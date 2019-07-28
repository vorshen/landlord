import Container from "../../../render/Container";
import Avatar from "../../player/Avatar";
import Name from "../../player/Name";
import MainHandPukes from "../../pukes/MainHandPukes";
import { i_DisplayObjectOptions } from "../../../render/DisplayObject";
import App from "../../../App";
import ButtonControl from "../../button/ButtonControl";
import Desktop from "../../desktop/Desktop";
import ResourceManage from "../../../render/ResourceManage";

class MainPlayerArea extends Container {
    private _app!: App;

    private _avatar!: Avatar;

    private _name!: Name;

    private _handPukes!: MainHandPukes;

    private _buttonControl!: ButtonControl;

    private _desktop!: Desktop;

    private _userId: string;

    /**
     * 初始化头像
     */
    private _initAvatar() {
        this._avatar = new Avatar({
            top: 62.5,
            left: 0,
            width: 75,
            height: 100,
            image: ResourceManage.get('AVATAR')
        });

        this.addChildren(this._avatar);
    }

    /**
     * 初始化名称
     */
    private _initName(name: string) {
        this._name = new Name({
            top: 162.5,
            left: 0,
            width: 75,
            height: 30,
            text: name,
            size: 18
        });

        this.addChildren(this._name);
    }

    /**
     * 初始化手牌
     */
    private _initHandPukes() {
        this._handPukes = new MainHandPukes(this._app, {
            pukeWidth: 70,
            interval: 50,
            top: 62.5 + 25 / 2,
            left: 0,
            width: this.width,
            height: 100
        });

        this.addChildren(this._handPukes);
    }

    /**
     * 初始化按钮
     */
    private _initButtonControl() {
        this._buttonControl = new ButtonControl({
            top: 0,
            left: 0,
            width: this.width,
            height: 62.5,
            app: this._app
        });

        this.addChildren(this._buttonControl);
    }

    private _initDesktop() {
        this._desktop = new Desktop({
            top: 0,
            left: 0,
            width: this.width,
            height: 62.5,
        });

        this.addChildren(this._desktop);

        this._desktop.hide();
    }

    constructor(app: App, options: i_DisplayObjectOptions) {
        super(options);

        this._app = app;
        this._userId = this._app.user!.uid;

        this._initAvatar();
        this._initName(this._app.user!.name);
        this._initHandPukes();
        this._initButtonControl();
        this._initDesktop();
    }

    get userId() {
        return this._userId;
    }

    get handPukes() {
        return this._handPukes;
    }

    get buttonControl() {
        return this._buttonControl;
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
        console.log(`${this._userId} ${isReady?'准备':'取消准备'}`);
    }

    /**
     * 初始化手牌，有动画
     * @param pukes 
     */
    initPukes(pukes: string[]) {
        let self = this;
        let time = 200;
        let i = 0;

        this._buttonControl.hide();
        this._handPukes.show();

        function getPuke() {
            if (pukes[i] === undefined) {
                return;
            }

            self._handPukes.postPukes([pukes[i]]);

            i++;

            setTimeout(getPuke, time);
        }

        getPuke();
    }

    /**
     * 获得新的牌，无动画
     * @param pukes 
     */
    getPukes(pukes: string[]) {
        this._handPukes.postPukes(pukes, true);
        this._handPukes.choosePukes(pukes);
    }

    /**
     * 进行叫地主
     */
    enterAskLandlord() {
        this._desktop.hide();
        this._buttonControl.show();

        this._buttonControl.enterAskLandlord();
    }

    /**
     * 进行抢地主
     */
    enterGrabLandlord() {
        this._desktop.hide();
        this._buttonControl.show();
        
        this._buttonControl.enterGrabLandlord();
    }

    /**
     * 游戏开始
     * @param isLandlord 是否是地主
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
        this._buttonControl.hide();
        this._desktop.show();

        this._desktop.askLandlord(isAsk);

        console.log(`${this._userId} ${isAsk?'叫地主':'不叫地主'}`);
    }

    /**
     * 抢地主
     * @param isGrab 
     */
    grabLandlord(isGrab: boolean) {
        this._buttonControl.hide();
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
        this._handPukes.shotChoosePukes();
        // 按钮隐藏
        this._buttonControl.hide();
        // 桌面牌安排下
        this._desktop.shotPukes(pukes);
        this._desktop.show();
    }

    /**
     * 进入出牌阶段
     */
    enterShotPukes() {
        this._desktop.reset();
        this._desktop.hide();

        // 如果桌面上最大的牌是空的，意味着这次，主视角玩家必须出牌
        this._buttonControl.enterPukes(this._app.room.desktopPukes.length === 0);
        this._buttonControl.show();
        
        this._handPukes.pukesChange();
    }

    /**
     * 游戏重置
     */
    gameReset() {
        // 地主标示重置一下
        this._avatar.beNormal();

        this._buttonControl.enterReady(false);
        this._buttonControl.show();

        this._desktop.hide();

        this._handPukes.deleteAll();
        this._handPukes.hide();
    }
};

export default MainPlayerArea;