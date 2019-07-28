import { i_BasePukesContainerOptions } from "./BasePukesContainer";
import Text from "../../render/Text";
import BasePuke from "./BasePuke";
import Container from "../../render/Container";
import App from "../../App";
import ResourceManage from "../../render/ResourceManage";

class SideHandPukes extends Container {
    private _app: App;

    private _backPuke!: BasePuke;
    private _pukesCount!: Text;
    private _remainingPukes: number = 0;
    private _pukeWidth: number;
    private _pukeHeight: number;

    private _addBackPukes() {
        let pukeUrl;

        pukeUrl = 'back';
            
        this._backPuke = new BasePuke({
            image: ResourceManage.get(`BACK`),
            id: pukeUrl,
            width: this._pukeWidth,
            height: this._pukeHeight,
            left: 0,
            top: 0,
        });

        this.addChildren(this._backPuke);
    }

    private _addPukesCount() {
        this._pukesCount = new Text({
            width: this._pukeWidth,
            height: this._pukeHeight,
            left: 0,
            top: 0,
            text: String(this._remainingPukes),
            color: 'white',
            size: 16
        });

        this.addChildren(this._pukesCount);
    }

    constructor(app: App, options: i_BasePukesContainerOptions) {
        super(options);

        this._app = app;

        this._pukeWidth = (options.width / 1) >> 0;
        this._pukeHeight = (this._pukeWidth / 105 * 150) >> 0;

        this._addBackPukes();
        this._addPukesCount();

        this._display = false;
    }

    /**
     * 出牌
     * @param amount 
     */
    shotPukes(amount: number) {
        this._remainingPukes -= amount;

        this._pukesCount.text = String(this._remainingPukes);
    }

    /**
     * 添加部分扑克牌
     * @param {string[]} pukes
     */
    postPukes(amount: number) {
        this._remainingPukes += amount;

        this._pukesCount.text = String(this._remainingPukes);
    }

    reset() {
        this._remainingPukes = 0;

        this._pukesCount.text = String(this._remainingPukes);
    }
};

export default SideHandPukes;