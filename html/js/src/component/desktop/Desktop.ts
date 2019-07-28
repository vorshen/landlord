import Container from "../../render/Container";
import { i_DisplayObjectOptions } from "../../render/DisplayObject";
import DesktopPukes from "./DesktopPukes";
import DesktopText from "./DesktopText";
import ResourceManage from "../../render/ResourceManage";

class Desktop extends Container {
    private _desktopPukes!: DesktopPukes;
    private _desktopText!: DesktopText;

    private _initDesktopPukes() {
        this._desktopPukes = new DesktopPukes({
            pukeWidth: 40,
            interval: 30,
            width: this.width,
            height: this.height,
            top: 0,
            left: 0,
        });

        this.addChildren(this._desktopPukes);
    }

    private _initDesktopText() {
        this._desktopText = new DesktopText({
            top: (this.height - 60) / 2,
            left: (this.width - 120) / 2,
            width: 120,
            height: 60,
            image: ResourceManage.get('READY')
        });
        this._desktopText.hide();

        this.addChildren(this._desktopText);
    }

    constructor(options: i_DisplayObjectOptions) {
        super(options);

        this._initDesktopPukes();
        this._initDesktopText();
    }

    /**
     * 重置
     */
    reset() {
        this._desktopText.hide();
        this._desktopPukes.hide();
        this._desktopPukes.deleteAll();
    }

    /**
     * 准备
     */
    ready(isReady: boolean) {
        this._desktopText.ready(isReady);
        this._desktopText.show();
    }

    /**
     * 叫地主
     * @param isAsk 
     */
    askLandlord(isAsk: boolean) {
        this._desktopText.askLandlord(isAsk);
        this._desktopText.show();
    }

    /**
     * 抢地主
     * @param isGrab 
     */
    grabLandlord(isGrab: boolean) {
        this._desktopText.grabLandlord(isGrab);
        this._desktopText.show();
    }

    /**
     * 出牌
     * @param pukes 
     */
    shotPukes(pukes: string[]) {
        if (pukes.length === 0) {
            this._desktopText.noShot();
            this._desktopText.show();
        } else {
            this._desktopPukes.postPukes(pukes);
            this._desktopPukes.show();
        }
    }
};

export default Desktop;