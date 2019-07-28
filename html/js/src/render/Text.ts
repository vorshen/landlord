import DisplayObject, { i_DisplayObjectOptions } from "./DisplayObject";

export type i_TextOptions = i_DisplayObjectOptions & {
    text: string;
    color?: string;
    bold?: boolean;
    size: number;
}

class Text extends DisplayObject {
    static canvas: HTMLCanvasElement;
    static ctx: CanvasRenderingContext2D;
    static init() {
        Text.canvas = document.createElement('canvas');
        Text.canvas.width = 1;
        Text.canvas.height = 500;
        Text.canvas.dir = 'ltr';
        Text.ctx = <CanvasRenderingContext2D>Text.canvas.getContext('2d');
    }

    protected _text: string;
    protected _color: string;
    protected _bold: boolean;
    protected _size: number;
    private _fontStyle: string = '';
    private _textWidth: number = 0;

    /**
     * 计算出文字的宽度
     */
    private _getWidth() {
        Text.ctx.font = this._fontStyle;
        this._textWidth = Text.ctx.measureText(this._text).width;
    }

    /**
     * 计算出文字的样式
     */
    private _getFontStyle() {
        this._fontStyle = `${this._bold ? 'bold' : ''} ${this._size}px 微软雅黑`;
    }

    constructor(options: i_TextOptions) {
        super(options);

        this._text = options.text;
        this._color = options.color || '#000000';
        this._bold = options.bold || false;
        this._size = options.size;

        this._getFontStyle();
        this._getWidth();
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
        this._getWidth();
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get bold() {
        return this._bold;
    }

    set bold(value) {
        this._bold = value;
        this._getFontStyle();
        this._getWidth();
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
        this._getFontStyle();
        this._getWidth();
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.save();

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.clip();
        ctx.closePath();

        ctx.beginPath();
        ctx.font = this._fontStyle;
        ctx.fillStyle = this._color;
        ctx.lineWidth = this._bold ? 2 : 1;
        ctx.fillText(
            this._text, 
            this.x + (this.width - this._textWidth) / 2, 
            this.y + this.height / 2
        );
        ctx.closePath();

        ctx.restore();
    }
};

Text.init();

export default Text;