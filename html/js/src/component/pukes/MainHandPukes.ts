import BasePukesContainer, { i_BasePukesContainerOptions } from "./BasePukesContainer";
import BasePuke from "./BasePuke";
import { debounce, comparePukes } from "../../utils";
import App from "../../App";
import ResourceManage from "../../render/ResourceManage";

class MainHandPukes extends BasePukesContainer {
    private _app: App;

    private _touchSet: Set<BasePuke> = new Set();

    /**
     * touchstart，touchmove的时候触发
     */
    private _touch = (data: { x: number, y: number }) => {
        let {
            x, y
        } = data;
        let len = this._children.length;
        let i;
        let temp: BasePuke;
        let puke: BasePuke | undefined;

        for (i = len - 1; i >= 0; i--) {
            temp = <BasePuke>this._children[i];
            if (temp.contain(x, y)) {
                puke = temp;
                break;
            }
        }

        if (puke) {
            this._choosePuke(puke);
        }
    }

    /**
     * touchend的时候触发
     */
    private _touchEnd = () => {
        this._touchSet.clear();
    }

    private _choosePuke(puke: BasePuke) {
        if (this._touchSet.has(puke)) {
            return;
        }

        this._touchSet.add(puke);
        puke.select();

        this.pukesChange();
    }

    /**
     * 找到将要添加的puke的层级，排序插入时使用
     * @param pukeA 
     */
    private _findPukeIndex(pukeA: string) {
        let pukeB: string;

        for (let i = 0; i < this._children.length; i++) {
            pukeB = (<BasePuke>this._children[i]).id;

            if (comparePukes([pukeA], [pukeB]) < 0) {
                return i;
            }
        }

        return undefined;
    }

    /**
     * 初始化手牌，有动画
     * @param pukes 
     */
    private _initPukes = (pukes: string[]) => {
        let self = this;
        let time = 200;
        let i = 0;

        function getPuke() {
            if (pukes[i] === undefined) {
                return;
            }

            self.postPukes([pukes[i]]);

            i++;

            setTimeout(getPuke, time);
        }

        getPuke();
    }

    constructor(app: App, options: i_BasePukesContainerOptions) {
        super(options);

        this._app = app;

        this.addEventListener('touchstart', this._touch);

        this.addEventListener('touchmove', this._touch);

        this.addEventListener('touchend', this._touchEnd);

        this.pukesChange = debounce(this.pukesChange, 10);
    }

    /**
     * 选中部分扑克牌
     * @param pukes 
     */
    choosePukes(pukes: string[]) {
        let id;

        for (let i = 0; i < this._children.length; i++) {
            id = (<BasePuke>this._children[i]).id;

            if (pukes.indexOf(id) > -1) {
                // 需要选中
                this._choosePuke(<BasePuke>this._children[i]);
            }
        }
    }

    /**
     * 获取用户选中的扑克牌
     */
    getChoosePukes(): string[] {
        let result: string[] = [];
        let len = this._children.length;
        let i;
        let temp: BasePuke;

        for (i = 0; i < len; i++) {
            temp = <BasePuke>this._children[i];

            if (temp.choose) {
                result.push(temp.id);
            }
        }

        return result;
    }

    /**
     * 将选中的牌出掉
     */
    shotChoosePukes() {
        let len = this._children.length;
        let i;
        let temp: BasePuke;

        for (i = len - 1; i >= 0; i--) {
            temp = <BasePuke>this._children[i];

            if (temp.choose) {
                this._deletePuke(temp);
            }
        }
    }

    /**
     * @override
     * 添加部分扑克牌
     * @param {string[]} pukes
     */
    postPukes(pukes: string[], reorder: boolean = false) {
        let index: number | undefined = undefined;

        pukes.forEach((pukeString) => {
            let puke = new BasePuke({
                image: ResourceManage.get(`PUKE_${pukeString}`),
                id: pukeString,
                width: this._pukeWidth,
                height: this._pukeHeight,
                left: 0,
                top: 0
            });

            if (reorder) {
                index = this._findPukeIndex(pukeString);
            }

            this._postPuke(puke, index);
        });
    }

    /**
     * 手牌中选中的牌发生变化时触发
     */
    pukesChange = () => {
        this.dispatchEvent('choosePukesChange');
    }
};

export default MainHandPukes;