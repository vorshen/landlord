import App from "../App";
import User from "../user/User";
import Stage, { PLAYER_POSITION } from "../component/Stage";
import { comparePukes, RET_SUCCESS, EVENT_NAME } from "../utils";
import EventDispatcher from "../render/EventDispatcher";

import './Room.css';

interface i_RoomOptions {
    app: App,
};

enum GAME_TYPE {
    PLAY,
    WATCH
};

export interface i_RoomShowOptions {
    roomId: string,
    mainUid: string,
    players: {
        [key: string]: {
            playerName: string,
            position: number
        }
    }
};

interface i_AddRivalOptions {
    playerUid: string,
    playerName: string,
    position: number
};

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 375;

function resolveScreen(screenWidth: number, screenHeight: number) {
    // 高度一定要全部展示出来（这里的高度指的是旋转后的）
    let scale = screenHeight / DEFAULT_HEIGHT;
    let width = DEFAULT_WIDTH * scale;
    let left = (screenWidth - width) / 2;

    return {
        top: 0,
        left: left,
        width: width,
        height: screenHeight
    };
}

class Room extends EventDispatcher {
    private _app: App;
    private _roomId!: string;
    // 是否初始化过，该组件只会初始化一次
    private _inited: boolean = false;
    // 房间的dom容器
    private _box!: HTMLDivElement;
    // @ts-ignore
    private _stage: Stage;
    // 玩家自己的位置
    private _position: number = 0;
    // 对手的map
    private _rival: any = {};
    // 主视角的玩家id
    private _mainUid!: string;
    // 房间模式
    private _gameType!: GAME_TYPE;
    // 当前桌面上最大的扑克牌
    private _desktopPukes: string[] = [];
    // 当前桌面上最大的扑克牌出牌者
    private _desktopPukesOwner!: string;

    /**
     * 初始化，主要是生成stage
     * @param info 
     */
    private _show(info: i_RoomShowOptions) {
        this._roomId = info.roomId;

        if (this._inited) {
            this._stage.show();
        } else {
            this._initStage();

            this._inited = true;
        }

        this.dispatchEvent(EVENT_NAME.ROOM_SHOW, info);

        this._allocatePosition(info.players);

        this._addMessageListener();

        if (this._gameType === GAME_TYPE.PLAY) {
            // 监听手牌变化
            this._stage.getPlayerArea(this._mainUid).handPukes.addEventListener('choosePukesChange', this._checkPukesCanShot);

            this._stage.getPlayerArea(this._mainUid).buttonControl.enterReady(false);
        }
    }

    /**
     * 初始化stage
     */
    private _initStage() {
        let width = this._app.root.offsetWidth;
        let height = this._app.root.offsetHeight;

        this._box = document.createElement('div');
        this._box.className = 'room-box';
        // 宽高反转
        this._box.style.width = `${height}px`;
        this._box.style.height = `${width}px`;
        this._box.style.transform = `translateX(${width}px) rotate(90deg)`;

        // 注意参数
        let rect = resolveScreen(height, width);
        
        this._stage = new Stage({
            app: this._app,
            width: rect.width,
            height: rect.height,
            left: 0,
            top: 0,
            offsetX: rect.top,
            offsetY: rect.left
        });

        this._stage.canvas.style.left = `${rect.left}px`;
        this._stage.canvas.style.top = `${rect.top}px`;

        this._box.appendChild(this._stage.canvas);

        this._app.root.appendChild(this._box);
    }

    /**
     * Room展示的时候，分配位置
     * @param info 
     */
    private _allocatePosition(players: any) {
        let position;
        let playerName;
        let playerUid;

        // 先找到自己的位置
        this._position = players[this._mainUid].position;

        for (playerUid in players) {
            playerName = players[playerUid].playerName;
            position = players[playerUid].position;

            this._playerEnterRoom({
                playerName,
                playerUid,
                position
            });    
        }
    }

    /**
     * 房间模块隐藏
     * 解绑消息推送
     * 隐藏stage
     */
    private _hide() {
        this._removeMessageListener();
        
        for (let userId in this._rival) {
            this._playerLeaveRoom({
                player: userId
            });
        }

        this.dispatchEvent(EVENT_NAME.ROOM_HIDE);

        this._stage.hide();
    }

    private _addMessageListener() {
        // 对手进入
        this._app.network.addEventListener('Room.PlayerEnterRoom', this._playerEnterRoom);

        // 对手离开
        this._app.network.addEventListener('Room.PlayerLeaveRoom', this._playerLeaveRoom);

        // 监听玩家准备
        this._app.network.addEventListener('Room.PlayerReady', this._playerReady);

        // 进入叫地主阶段
        this._app.network.addEventListener('Room.EnterAskLandlord', this._enterAskLandlord);

        // 对手叫地主
        this._app.network.addEventListener('Room.PlayerAskLandlord', this._playerAskLandlord);

        // 进入抢地主阶段
        this._app.network.addEventListener('Room.EnterGrabLandlord', this._enterGrabLandlord);

        // 对手抢地主
        this._app.network.addEventListener('Room.PlayerGrabLandlord', this._playerGrabLandlord);

        // 游戏开始
        this._app.network.addEventListener('Room.GameStart', this._gameStart);

        // 出牌
        this._app.network.addEventListener('Room.PlayerShotPukes', this._playerPukes);

        // 继续出牌
        this._app.network.addEventListener('Room.LoopPukes', this._loopPukes);

        // 游戏结束
        this._app.network.addEventListener('Room.GameOver', this._gameOver);
    }

    private _removeMessageListener() {
        this._app.network.removeEventListener('Room.PlayerEnterRoom', this._playerEnterRoom);

        this._app.network.removeEventListener('Room.PlayerLeaveRoom', this._playerLeaveRoom);

        this._app.network.removeEventListener('Room.PlayerReady', this._playerReady);

        this._app.network.removeEventListener('Room.EnterAskLandlord', this._enterAskLandlord);
    
        this._app.network.removeEventListener('Room.PlayerAskLandlord', this._playerAskLandlord);

        this._app.network.removeEventListener('Room.EnterGrabLandlord', this._enterGrabLandlord);

        this._app.network.removeEventListener('Room.PlayerGrabLandlord', this._playerGrabLandlord);
    
        this._app.network.removeEventListener('Room.GameStart', this._gameStart);

        this._app.network.removeEventListener('Room.PlayerShotPukes', this._playerPukes);
    
        this._app.network.removeEventListener('Room.LoopPukes', this._loopPukes);

        this._app.network.removeEventListener('Room.GameOver', this._gameOver);
    }

    /**
     * 有其他玩家进入
     * @param {*} user 
     */
    private _playerEnterRoom = (data: i_AddRivalOptions) => {
        
        let userInfo = new User({
            uid: data.playerUid,
            name: data.playerName
        });;
        let position = data.position;
        let diff = this._position - position;

        switch (diff) {
            case -1:
            case 2:
                this._rival[userInfo.uid] = userInfo;
                // 新来玩家在右边
                this._stage.addPlayer(userInfo, PLAYER_POSITION.RIGHT);
                break;
            case -2:
            case 1:
                this._rival[userInfo.uid] = userInfo;
                // 新来玩家在左边
                this._stage.addPlayer(userInfo, PLAYER_POSITION.LEFT);
                break;
            case 0:
                this._stage.addPlayer(userInfo, PLAYER_POSITION.MAIN);
                break;
            default:
                throw 'invalid position';
        }
    }

    /**
     * 有其他玩家离开
     * 如果自己离开房间，也会在uninit中调用，清除对手玩家
     * @param data
     */
    private _playerLeaveRoom = (data: {player: string}) => {
        let userId = data.player;

        this._stage.removePlayer(userId);

        delete this._rival[userId];
    }

    /**
     * 玩家准备
     * @param data 
     */
    private _playerReady = (data: {player: string, isReady: boolean}) => {
        let {
            player,
            isReady
        } = data;

        this._stage.getPlayerArea(player).ready(isReady);
    }

    /**
     * 进入叫地主阶段
     * 这里会接收到初始化的牌
     */
    private _enterAskLandlord = (data: {askPlayer: string, pukes: string[]}) => {
        let {
            askPlayer,
            pukes
        } = data;

        // 排序
        pukes.sort((a: string, b: string) => {
            return comparePukes([a], [b]);
        });

        // 自己初始化的手牌
        this._stage.getPlayerArea(this._mainUid).initPukes(pukes);

        // 对手的牌初始化一下
        for (let userId in this._rival) {
            this._stage.getPlayerArea(userId).initPukes(pukes.length);
        }

        // 对应玩家进入到叫地主阶段
        this._stage.getPlayerArea(askPlayer).enterAskLandlord();
    }

    /**
     * 玩家叫地主
     */
    private _playerAskLandlord = (data: {player: string, isAsk: boolean}) => {
        let {
            player,
            isAsk
        } = data;

        this._stage.getPlayerArea(player).askLandlord(isAsk);
    }

    /**
     * 进入抢地主阶段
     */
    private _enterGrabLandlord = (data: {grabPlayer: string}) => {
        let {
            grabPlayer
        } = data;

        // 对应玩家进入到叫地主阶段
        this._stage.getPlayerArea(grabPlayer).enterGrabLandlord();
    }

    /**
     * 玩家抢地主
     */
    private _playerGrabLandlord = (data: {player: string, isGrab: boolean}) => {
        let {
            player,
            isGrab
        } = data;

        this._stage.getPlayerArea(player).grabLandlord(isGrab);
    }

    /**
     * 游戏开始，服务器下发地主是谁，地主的扑克也下发
     */
    private _gameStart = (data: {landlordPlayer: string, landlordPukes: string[]}) => {
        let {
            landlordPlayer,
            landlordPukes
        } = data;

        this.dispatchEvent(EVENT_NAME.GAME_START, data);

        this._stage.getPlayerArea(this._mainUid).gameStart(landlordPlayer === this._mainUid);

        for (let userId in this._rival) {
            this._stage.getPlayerArea(userId).gameStart(landlordPlayer === userId);
        }

        this._stage.getPlayerArea(landlordPlayer).enterShotPukes();

        if (this._app.user!.uid === landlordPlayer) {
            this._stage.getPlayerArea(this._mainUid).getPukes(landlordPukes);
        } else {
            this._stage.getPlayerArea(landlordPlayer).getPukes(landlordPukes.length);
        }
    }

    /**
     * 玩家出牌
     */
    private _playerPukes = (data: {player: string, pukes: string[]}) => {
        let {
            player,
            pukes
        } = data;

        if (pukes.length > 0) {
            // 如果成功出牌，那么就认为这个牌是最大的牌了
            this._desktopPukes = pukes;
            this._desktopPukesOwner = player;
        }

        this._stage.getPlayerArea(player).shotPukes(pukes);
    }

    /**
     * 玩家进入出牌阶段
     */
    private _loopPukes = (data: {player: string}) => {
        let player = data.player;

        if (
            player === this._app.user!.uid &&
            this._desktopPukesOwner === this._app.user!.uid
        ) {
            // 满足这个条件，就是出牌到了自己，并且桌面上最大的牌就是自己的
            // 那么桌面最大牌就空掉了（因为相当于重新出牌了）
            this._desktopPukes = [];

        }

        this._stage.getPlayerArea(player).enterShotPukes();
    }

    /**
     * 游戏结束
     */
    private _gameOver = (data: {player: string}) => {
        let player = data.player;

        this._stage.overModal.show(player);

        for (let userId in this._rival) {
            this._stage.getPlayerArea(userId).gameReset();
        }

        console.log('游戏结束，胜者：', player);
    }

    constructor(options: i_RoomOptions) {
        super();

        this._app = options.app;
    }

    get desktopPukes() {
        return this._desktopPukes;
    }

    get roomId() {
        return this._roomId;
    }

    show(info: i_RoomShowOptions) {
        console.log('进入房间');

        this._mainUid = info.mainUid;

        if (this._mainUid === this._app.user!.uid) {
            this._gameType = GAME_TYPE.PLAY;
        } else {
            this._gameType = GAME_TYPE.WATCH;
        }

        this._show(info);
    }

    hide() {
        console.log('离开房间');

        this._hide();
    }

    /**
     * 准备
     * @param isReady 
     */
    ready(isReady: boolean) {
        this._stage.getPlayerArea(this._mainUid).ready(isReady);

        this._app.network.notify({
            route: 'Room.Ready',
            body: {
                rid: this._roomId,
                isReady: isReady
            }
        }, function(result: any) {
            if (result.retcode !== RET_SUCCESS) {
                console.error('准备异常');
            } else {
                console.log(`${isReady?'准备':'取消准备'}成功`);
            }
        });
    }

    /**
     * 叫地主
     * @param isAsk 
     */
    askLandlord(isAsk: boolean) {
        this._stage.getPlayerArea(this._mainUid).askLandlord(isAsk);

        this._app.network.notify({
            route: 'Room.AskLandlord',
            body: {
                rid: this._roomId,
                isAsk: isAsk
            }
        }, function(result: any) {
            if (result.retcode !== RET_SUCCESS) {
                console.error('叫地主异常');
            } else {
                console.log(`${isAsk?'叫地主':'不叫地主'}`);
            }
        });
    }

    /**
     * 抢地主
     * @param isGrab 
     */
    grabLandlord(isGrab: boolean) {
        this._stage.getPlayerArea(this._mainUid).grabLandlord(isGrab);

        this._app.network.notify({
            route: 'Room.GrabLandlord',
            body: {
                rid: this._roomId,
                isGrab: isGrab
            }
        }, function(result: any) {
            if (result.retcode !== RET_SUCCESS) {
                console.error('抢地主异常');
            } else {
                console.log(`${isGrab?'抢地主':'不抢地主'}`);
            }
        });
    }

    /**
     * 离开房间
     */
    leaveRoom() {
        this._app.enterHall();

        this._app.network.notify({
            route: 'Hall.LeaveRoom',
            body: {
                rid: this._roomId
            }
        }, function(result: any) {
            if (result.retcode !== RET_SUCCESS) {
                console.error('离开房间异常');
            } else {
                console.log('离开房间');
            }
        });
    }

    /**
     * 判断选中的牌，能否出
     * @param pukes 
     */
    private _checkPukesCanShot = () => {
        let pukes: string[] = this._stage.getPlayerArea(this._mainUid).handPukes.getChoosePukes();
        let result = comparePukes(this._desktopPukes, pukes);

        if (result > 0) {
            this._stage.getPlayerArea(this._mainUid).buttonControl.canShotPukes();
        } else {
            this._stage.getPlayerArea(this._mainUid).buttonControl.canNotShotPukes();
        }
    }

    /**
     * 出牌
     * @param choose 
     */
    puke(choose: boolean) {
        let pukes: string[];

        if (choose) {
            pukes = this._stage.getPlayerArea(this._mainUid).handPukes.getChoosePukes();
        } else {
            // 放弃出牌
            pukes = [];
        }

        // 出牌
        this._stage.getPlayerArea(this._mainUid).shotPukes(pukes);

        if (this._app.debugger) {
            return;
        }

        this._app.network.notify({
            route: 'Room.Pukes',
            body: {
                rid: this._roomId,
                pukes: pukes
            }
        }, (result: any) => {
            if (result.retcode !== RET_SUCCESS) {
                console.error('出牌异常');
            } else {
                console.log('出牌成功');

                this._desktopPukes = pukes;
                this._desktopPukesOwner = this._app.user!.uid;
            }
        });
    }

    confirmResult = () => {
        // 弹窗隐藏
        this._stage.overModal.hide();

        this._stage.getPlayerArea(this._mainUid).gameReset();

        this.dispatchEvent(EVENT_NAME.GAME_RESET);
    }
};

export default Room;