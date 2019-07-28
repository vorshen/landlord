import Text from "../../render/Text";
import Container from "../../render/Container";
import { i_DisplayObjectOptions } from "../../render/DisplayObject";

export type i_ButtonOptions = i_DisplayObjectOptions & {
    text?: string;
    callback?: Function;
    valid?: {color?: string, bgColor?: string};
    invalid?: {color?: string, bgColor?: string};
    available?: boolean
}

class Button extends Container {
    // @ts-ignore
    private _visiable: boolean;
    // @ts-ignore
    private _callback: Function;
    // @ts-ignore
    private _valid: {color: string, bgColor: string};
    // @ts-ignore
    private _invalid: {color: string, bgColor: string};
    // @ts-ignore
    private _textObject: Text;
    // @ts-ignore
    private _available: boolean;

    /**
     * 按钮可用态和不可用态处理一下
     * @param options 
     */
    private _setConfig(options: i_ButtonOptions) {
        // 有效状态下样式安排一下
        if (options.valid === undefined) {
            options.valid = {};
        }
        this._valid = {
            color: '#ffffff',
            bgColor: '#0099FF'
        };
        Object.assign(this._valid, options.valid);

        // 无效状态下样式安排一下
        if (options.invalid === undefined) {
            options.invalid = {};
        }
        this._invalid = {
            color: '#ffffff',
            bgColor: '#969696'
        };
        Object.assign(this._invalid, options.invalid);

        // 初始状态是否可用
        if (options.available) {
            this.enable();
        } else {
            this.disable();
        }
    }

    /**
     * 给按钮添加文字组件
     * @param text 
     */
    _setText(text: string) {
        let textObject = new Text({
            text: text,
            color: this.color,
            size: (this.height / 2) >> 0,
            width: this.width,
            height: this.height,
            top: 0,
            left: 0
        });

        this._textObject = textObject;
        this.addChildren(textObject);
    }

    /**
     * 监听的点击事件
     * @param x 
     * @param y 
     */
    private _touch = (data: {x: number, y: number}) => {
        let {
            x, y
        } = data;

        if (this._available && this.contain(x, y)) {
            this.callback && this.callback();
        }
    }

    /**
     * @param {*} options
     *  text 按钮内容
     *  valid 可用状态下
     *      color 文字颜色
     *      bgColor 背景色
     *  invalid 不可用状态下
     *      color 文字颜色
     *      bgColor 背景色
     *  available 是否可用
     *  style 样式
     */
    constructor(options: i_ButtonOptions) {
        super(options);

        this._visiable = true;
        
        this._callback = options.callback || function() {};

        this.addEventListener('touchstart', this._touch);

        this._setConfig(options);
        this._setText(options.text || '');
    }

    get text() {
        return this._textObject.text;
    }

    set text(text: string) {
        this._textObject.text = text;
    }

    get color() {
        return this._available ? this._valid.color : this._invalid.color;
    }

    get bgColor() {
        return this._available ? this._valid.bgColor : this._invalid.bgColor;
    }

    get callback() {
        return this._callback;
    }

    set callback(callback: Function) {
        this._callback = callback;
    }

    enable() {
        this._available = true;
    }

    disable() {
        this._available = false;
    }

    show() {
        this._visiable = true;
    }

    hide() {
        this._visiable = false;
    }

    render(ctx: CanvasRenderingContext2D) {
        if (!this._visiable) {
            return;
        }

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.bgColor;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        super.render(ctx);
    }
};

export default Button;