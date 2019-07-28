import Container from "../../render/Container";
import { i_DisplayObjectOptions } from "../../render/DisplayObject";
import BasePuke from "./BasePuke";
import ResourceManage from "../../render/ResourceManage";

export type i_BasePukesContainerOptions = i_DisplayObjectOptions & {
    pukeWidth: number,

    interval?: number,
    verticalAlign?: PUKE_VERTICAL_ALIGN,
    horizontalAlign?: PUKE_HORIZONTAL_ALIGN,
};

enum PUKE_HORIZONTAL_ALIGN {
    LEFT,
    CENTER,
    RIGHT
};

enum PUKE_VERTICAL_ALIGN {
    TOP,
    MIDDLE,
    BOTTOM
};

class BasePukesContainer extends Container {
    // 扑克牌宽度
    protected _pukeWidth: number;
    // 扑克牌高度
    protected _pukeHeight: number;
    // 扑克牌水平对齐方式
    protected _horizontalAlign: PUKE_HORIZONTAL_ALIGN;
    // 扑克牌垂直对齐方式
    protected _verticalAlign: PUKE_VERTICAL_ALIGN;
    // 扑克牌之间两两的覆盖大小
    private _interval: number;

    /**
     * 移除某张扑克牌
     * @param {*} object 
     */
    protected _deletePuke(object: BasePuke) {
        this.removeChildren(object);

        this._updatePukes();
    }

    /**
     * 加入单张扑克牌
     * @param {*} puke 
     */
    protected _postPuke(puke: BasePuke, zIndex?: number) {
        this.addChildren(puke, zIndex);

        this._updatePukes();
    }

    /**
     * 触发更新维护的扑克牌的位置
     */
    protected _updatePukes() {
        // 获取手上扑克总数
        let len = this._children.length;
        if (len === 0) {
            return;
        }

        // 计算出来这次手上扑克牌最大宽度
        let maxWidth = this._pukeWidth + (this._pukeWidth - this._interval) * (len - 1);

        // 起始点x，y
        let x;
        let y = 0;
        
        let part = len;
        // 如果最大宽度超了，意味着需要有多行
        if (maxWidth > this.width) {
            // 每行的扑克牌数量
            part = (this.width / maxWidth * len) >> 0;
            // 那么x必然从0开始了
            x = 0;
        } else {
            // 计算x的位置
            x = (this.width - maxWidth) / 2;
        }

        let puke;
        for (let i = 0; i < len; i++) {
            puke = this._children[i];

            // 设置扑克牌的位置
            puke.setPosition(x, y + ((i / part) >> 0) * this._pukeHeight / 3);

            x += (this._pukeWidth - this._interval);
            if (x > this.width - this._pukeWidth) {
                x = 0;
            }
        }
    }

    constructor(options: i_BasePukesContainerOptions) {
        super(options);

        // 容器中包含的扑克牌安排一下
        this._pukeWidth = options.pukeWidth;
        this._pukeHeight = (this._pukeWidth / 105 * 150) >> 0;

        if (options.interval !== undefined) {
            this._interval = options.interval;
        } else {
            this._interval = this._pukeWidth;
        }

        // 对齐安排一下
        this._horizontalAlign = options.horizontalAlign || PUKE_HORIZONTAL_ALIGN.LEFT
        this._verticalAlign = options.verticalAlign || PUKE_VERTICAL_ALIGN.TOP;
    }

    /**
     * 移除部分扑克牌
     * @param {string[]} pukes
     */
    deletePukes(pukes: string[]) {
        (<BasePuke[]>this._children).forEach((puke: BasePuke) => {
            let index = pukes.indexOf(puke.id);
            if (index >= 0) {
                this._deletePuke(puke);
                pukes.splice(index, 1);
            }
        });
    }

    /**
     * 添加部分扑克牌
     * @param {string[]} pukes
     */
    postPukes(pukes: string[]) {
        pukes.forEach((pukeString) => {
            let puke = new BasePuke({
                image: ResourceManage.get(`PUKE_${pukeString}`),
                id: pukeString,
                width: this._pukeWidth,
                height: this._pukeHeight,
                left: 0,
                top: 0
            });

            this._postPuke(puke);
        });
    }

    /**
     * 删除所有牌
     */
    deleteAll() {
        this._children = [];
    }
};

export default BasePukesContainer;