import Avatar from "../../player/Avatar";
import Name from "../../player/Name";
import SidePlayerArea, { i_SidePlayerAreaOptions } from "./SidePlayerArea";
import SideHandPukes from "../../pukes/SideHandPukes";
import Desktop from "../../desktop/Desktop";
import App from "../../../App";
import ResourceManage from "../../../render/ResourceManage";

class RightPlayerArea extends SidePlayerArea {
    /**
     * 初始化头像
     */
    private _initAvatar() {
        this._avatar = new Avatar({
            width: 75,
            height: 100,
            top: 0,
            left: this.width - 100,
            image: ResourceManage.get('AVATAR')
        });

        this.addChildren(this._avatar);
    }

    /**
     * 初始化名称
     */
    private _initName(name: string) {
        this._name = new Name({
            width: 75,
            height: 30,
            top: 100,
            left: this.width - 100,
            text: name,
            size: 18
        });

        this.addChildren(this._name);
    }

    /**
     * 初始化手牌
     */
    private _initHandPukes() {
        this._handPukes = new SideHandPukes(this._app, {
            pukeWidth: 20,
            interval: 0,
            width: 20,
            height: 30,
            top: 100,
            left: this.width - 20 - 100
        });

        this.addChildren(this._handPukes);
    }

    private _initDesktopPukes() {
        this._desktop = new Desktop({
            width: this.width - 100,
            height: 100,
            top: 0,
            left: 0,
        });

        this.addChildren(this._desktop);
    }

    constructor(app: App, options: i_SidePlayerAreaOptions) {
        super(app, options);

        this._initAvatar();
        this._initName(options.user.name);
        this._initHandPukes();
        this._initDesktopPukes();
    }
};

export default RightPlayerArea;