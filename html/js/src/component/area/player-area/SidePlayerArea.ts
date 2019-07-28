import Container from "../../../render/Container";
import Avatar from "../../player/avatar";
import Name from "../../player/name";
import SideHandPukes from "../../pukes/SideHandPukes";
import User from "../../../user/User";
import { i_DisplayObjectOptions } from "../../../render/DisplayObject";
import Desktop from "../../desktop/Desktop";
import App from "../../../App";

export type i_SidePlayerAreaOptions = i_DisplayObjectOptions & {
    user: User;
};

class SidePlayerArea extends Container {
    protected _app: App;
    // 头像
    protected _avatar!: Avatar;
    // 名称
    protected _name!: Name;
    // 手牌
    protected _handPukes!: SideHandPukes;
    // 出去的牌
    protected _desktop!: Desktop;
    // 用户id
    protected _userId: string;

    constructor(app: App, options: i_SidePlayerAreaOptions) {
        super(options);

        this._app = app;

        this._userId = options.user.uid;
    }

    get userId() {
        return this._userId;
    }

    /**
     * 重置
     */
    reset() {
        // 桌面隐藏
        this._desktop.hide();
        // 手牌隐藏
        this._handPukes.hide();
    }
    
    /**
     * 准备
     * @param isReady 
     */
    ready(isReady: boolean) {
        this._handPukes.hide();

        if (isReady) {
            // 桌面展示，并且显示准备
            this._desktop.show();
            this._desktop.ready(isReady);
        } else {
            this._desktop.hide();
        }

        console.log(`${this._userId} ${isReady?'准备':'取消准备'}`);
    }

    /**
     * @override
     * 初始化手牌
     * @param amount 
     */
    initPukes(amount: number) {
        this._desktop.hide();

        this._handPukes.postPukes(amount);
        this._handPukes.show();
    }

    /**
     * @override
     * 初始化手牌
     * @param amount 
     */
    getPukes(amount: number) {
        this._handPukes.postPukes(amount);
    }

    /**
     * 进行叫地主
     */
    enterAskLandlord() {
        this._desktop.hide();

        console.log(`${this._userId} 进入叫地主状态`);
    }

    /**
     * 进行抢地主
     */
    enterGrabLandlord() {
        this._desktop.hide();

        console.log(`${this._userId} 进入抢地主状态`);
    }

    /**
     * 游戏开始
     */
    gameStart(isLandlord: boolean) {
        if (isLandlord) {
            this._avatar.beLandlord();
        }
        this._desktop.hide();
    }

    /**
     * 叫地主
     * @param isAsk 
     */
    askLandlord(isAsk: boolean) {
        this._desktop.show();
        this._desktop.askLandlord(isAsk);

        console.log(`${this._userId} ${isAsk?'叫地主':'不叫地主'}`);
    }

    /**
     * 抢地主
     * @param isGrab 
     */
    grabLandlord(isGrab: boolean) {
        this._desktop.show();
        this._desktop.grabLandlord(isGrab);

        console.log(`${this._userId} ${isGrab?'抢地主':'不抢地主'}`);
    }

    /**
     * 出牌
     * @param pukes 
     */
    shotPukes(pukes: string[]) {
        console.log(`${this._userId} 出牌 ${pukes}`);

        // 手牌出掉
        this._handPukes.shotPukes(pukes.length);
    
        // 桌面牌安排下
        this._desktop.shotPukes(pukes);
        this._desktop.show();
    }

    /**
     * 进入出牌阶段
     */
    enterShotPukes() {
        console.log(`${this.userId} 进入出牌阶段`);

        this._desktop.reset();
        this._desktop.hide();
    }

    /**
     * 游戏重置
     */
    gameReset() {
        this._avatar.beNormal();

        this._handPukes.reset();
        this._handPukes.hide();
        this._desktop.reset();
        this._desktop.hide();
    }
}

export default SidePlayerArea;