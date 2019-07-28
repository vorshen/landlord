import Container from "../render/Container";
import App from "../App";
import User from "../user/User";
import RightPlayerArea from "./area/player-area/RightPlayerArea";
import LeftPlayerArea from "./area/player-area/LeftPlayerArea";
import { i_DisplayObjectOptions } from "../render/DisplayObject";
import TopArea from "./area/top-area/TopArea";
import MainPlayerArea from "./area/player-area/MainPlayerArea";
import OverModal from "./modal/Model";

type i_StageOptions = i_DisplayObjectOptions & {
    app: App,
    offsetX: number,
    offsetY: number,

};

export enum PLAYER_POSITION {
    MAIN,
    RIGHT,
    LEFT
};

class Stage extends Container {
    private _app: App;
    // canvas舞台
    private _canvas!: HTMLCanvasElement;
    // canvas上下文
    private _ctx!: CanvasRenderingContext2D;
    // 舞台相对屏幕的偏移（黑边的大小）
    private _offsetX!: number;
    private _offsetY!: number;
    // 玩家的区域
    private _playerArea: any = {};
    // 顶部的区域
    private _topArea!: TopArea;
    // 游戏结束的弹窗提示
    private _overModal!: OverModal;
    // 渲染的定时器
    private _tick: number = 0;

    /**
     * 初始化canvas相关
     */
    private _initCanvas() {
        let devicePixelRatio = window.devicePixelRatio || 1;
        let canvas = document.createElement('canvas');
        let ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
        // let rect = this._resolveScreen(this._app.root.offsetWidth, this._app.root.offsetHeight);
        // 开始进行缩放屏幕适配的问题
        let width = this._width;
        let height = this._height;

        canvas.setAttribute('width', '' + Math.round(width * devicePixelRatio));
        canvas.setAttribute('height', '' + Math.round(height * devicePixelRatio));
        
        canvas.style.position = 'absolute';
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        this._canvas = canvas;
        this._ctx = ctx;

        this._ctx.scale(devicePixelRatio, devicePixelRatio);
        this._ctx.textAlign = 'left';
        this._ctx.textBaseline = 'middle';
        // this._canvas.style.transformOrigin = 'left top';
        // this._canvas.style.transform = `translateX(${height}px) rotate(90deg)`;
    }

    /**
     * 顶部区域安排一下
     */
    private _addTopArea() {
        let topArea = new TopArea(this._app, {
            width: this.width,
            height: 45,
            left: 0,
            top: 0,
        });

        this._topArea = topArea;
        this.addChildren(topArea, 0);
    }

    /**
     * 弹窗安排一下
     */
    private _addModal() {
        let overModal = new OverModal(this._app, {
            width: 280,
            height: 120,
            top: 120,
            left: (this._width - 280) / 2
        });
        overModal.hide();

        this._overModal = overModal;
        this.addChildren(overModal, 100);
    }

    /**
     * 绑定交互事件
     */
    private _addTouchListener() {
        this._canvas.addEventListener('touchstart', this._touchstart);

        this._canvas.addEventListener('touchmove', this._touchmove);

        this._canvas.addEventListener('touchend', this._touchend);
    }

    /**
     * 解绑交互事件
     */
    private _removeTouchListener() {
        this._canvas.removeEventListener('touchstart', this._touchstart);

        this._canvas.removeEventListener('touchmove', this._touchmove);

        this._canvas.removeEventListener('touchend', this._touchend);
    }

    private _touchstart = (e: any) => {
        let touch = e.touches[0];
        let y = this.height - this._offsetX - touch.clientX;
        let x = touch.clientY - this._offsetY;

        this.dispatchEvent('touchstart', {
            x, y
        });
    }

    private _touchmove = (e: any) => {
        let touch = e.touches[0];
        let y = this.height - this._offsetX - touch.clientX;
        let x = touch.clientY - this._offsetY;

        this.dispatchEvent('touchmove', {
            x, y
        });
    }

    private _touchend = (e: any) => {
        this.dispatchEvent('touchend');
    }

    constructor(options: i_StageOptions) {
        super(options);

        this._app = options.app;

        this._offsetX = options.offsetX;
        this._offsetY = options.offsetY;

        this._initCanvas();

        this._addTopArea();

        this._addModal();
        
        this.show();
    }

    get canvas() {
        return this._canvas;
    }

    get topArea(): TopArea {
        return this._topArea;
    }

    get overModal(): OverModal {
        return this._overModal;
    }

    /**
     * 获得对应的玩家区域
     * @param id 
     */
    getPlayerArea(id: string) {
        return this._playerArea[id];
    }

    /**
     * 有其他玩家加入
     * @param user 
     * @param position 
     */
    addPlayer(user: User, position: PLAYER_POSITION) {
        let playerArea;

        switch (position) {
            case PLAYER_POSITION.RIGHT:
                playerArea = new RightPlayerArea(this._app, {
                    width: this.width / 3,
                    height: 125,
                    left: this.width / 2 + 10,
                    top: 45,
                    user: user,
                });
                break;
            case PLAYER_POSITION.LEFT:
                playerArea = new LeftPlayerArea(this._app, {
                    width: this.width / 3,
                    height: 125,
                    left: 0,
                    top: 45,
                    user: user,
                });
                break;
            case PLAYER_POSITION.MAIN:
                playerArea = new MainPlayerArea(this._app, {
                    width: this.width,
                    height: 187.5,
                    left: 0,
                    top: 187.5,
                });
                break;
            default:
                throw 'invalid position';
        }

        this._playerArea[user.uid] = playerArea;
        this.addChildren(playerArea, 0);
    }

    /**
     * 玩家离开
     * @param userId 
     */
    removePlayer(userId: string) {
        this.removeChildren(this._playerArea[userId]);
        delete this._playerArea[userId];
    }

    /**
     * 展示stage
     */
    show() {
        this._canvas.style.display = 'block';

        this._addTouchListener();

        this.render();
    }

    /**
     * 隐藏stage
     */
    hide() {
        this._canvas.style.display = 'none';

        clearTimeout(this._tick);
    }

    /**
     * 渲染
     */
    render = () => {
        this._ctx.clearRect(0, 0, this._width, this._height);

        this._children.forEach((item) => {
            item.display && item.render(this._ctx);
        });

        this._tick = setTimeout(this.render, 60);
    }
};

export default Stage;