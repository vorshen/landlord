import { i_DisplayObjectOptions } from "../../render/DisplayObject";
import Container from "../../render/Container";
import Text from "../../render/Text";
import Button from "../button/button";
import App from "../../App";

class OverModal extends Container {
    private _app: App;
    // 展示的获胜者名称
    private _text!: Text;
    // 确定的按钮
    private _button!: Button;

    private _initText() {
        this._text = new Text({
            text: '获胜者: ',
            size: 22,
            color: '#ffffff',
            width: 140,
            height: 30,
            top: 20,
            left: (this._width - 140) / 2
        });

        this.addChildren(this._text);
    }

    private _initButton() {
        this._button = new Button({
            text: '确定',
            callback: () => {
                this._app.room.confirmResult();
                this.hide();
            },
            available: true,
            width: 60,
            height: 30,
            top: 70,
            left: (this._width - 60) / 2
        });

        this.addChildren(this._button);
    }

    constructor(app: App, options: i_DisplayObjectOptions) {
        super(options);

        this._app = app;

        this._initText();

        this._initButton();
    }

    show(uid?: string) {
        this._text.text = `获胜者: ${uid}`;

        super.show();
    }

    render(ctx: CanvasRenderingContext2D) {
        if (!this._display) {
            return;
        }

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 0, 0, .7)';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
        ctx.restore();

        super.render(ctx);
    }
};

export default OverModal;