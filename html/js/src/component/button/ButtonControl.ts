import Container from "../../render/Container";
import Button from "./button";
import { i_DisplayObjectOptions } from "../../render/DisplayObject";
import App from '../../App';

type i_ButtonControlOptions = i_DisplayObjectOptions & {
    app: App;
};

class ButtonControl extends Container {
    private _app: App;
    private _leftButton: Button;
    private _rightButton: Button;

    constructor(options: i_ButtonControlOptions) {
        super(options);

        this._app = options.app;
        
        let buttonWidth = 100;
        let buttonHeight = 40;

        this._leftButton = new Button({
            text: '左按钮',
            left: this.width / 2 - buttonWidth - 40,
            top: (this.height - buttonHeight) / 2,
            width: buttonWidth,
            height: buttonHeight
        });
        this._rightButton = new Button({
            text: '右按钮',
            left: this.width / 2 + 40,
            top: (this.height - buttonHeight) / 2,
            width: buttonWidth,
            height: buttonHeight
        });

        this._leftButton.hide();
        this._rightButton.hide();

        this.addChildren(this._leftButton);
        this.addChildren(this._rightButton);
    }

    /**
     * 进入等待阶段
     */
    enterReady(hasReady: boolean = false) {
        this._leftButton.text = '准备';
        this._leftButton.callback = () => {
            this._app.room.ready(true);
            this.enterReady(true);
        };

        this._rightButton.text = '取消准备';
        this._rightButton.callback = () => {
            this._app.room.ready(false);
            this.enterReady(false);
        };

        this._leftButton.show();

        this._rightButton.show();

        if (hasReady) {
            this._leftButton.disable();
            this._rightButton.enable();
        } else {
            this._leftButton.enable();
            this._rightButton.disable();
        }
    }

    /**
     * 进入 叫地主 阶段
     */
    enterAskLandlord() {
        this._leftButton.text = '不叫';
        this._leftButton.callback = () => {
            this._app.room.askLandlord(false);
            this.hideAll();
        };

        this._rightButton.text = '叫地主';
        this._rightButton.callback = () => {
            this._app.room.askLandlord(true);
            this.hideAll();
        };

        this._leftButton.enable();
        this._leftButton.show();

        this._rightButton.enable();
        this._rightButton.show();
    }

    /**
     * 进入 抢地主 阶段
     */
    enterGrabLandlord() {
        this._leftButton.text = '不抢';
        this._leftButton.callback = () => {
            this._app.room.grabLandlord(false);
            this.hideAll();
        }

        this._rightButton.text = '抢地主';
        this._rightButton.callback = () => {
            this._app.room.grabLandlord(true);
            this.hideAll();
        };

        this._leftButton.enable();
        this._leftButton.show();

        this._rightButton.enable();
        this._rightButton.show();
    }

    /**
     * 进入 出牌 阶段
     */
    enterPukes(isMustShot: boolean) {
        this._leftButton.text = '不出';
        this._leftButton.callback = () => {
            this._app.room.puke(false);
            this.disableAll();
        };

        this._rightButton.text = '出牌';
        this._rightButton.callback = () => {
            this._app.room.puke(true);
            this.disableAll();
        };

        this._leftButton.show();
        this._rightButton.show();

        if (isMustShot) {
            this._leftButton.disable();
        } else {
            this._leftButton.enable();
        }
        // 初始化的时候，默认无法出牌
        this._rightButton.disable();
    }

    /**
     * 可以出牌
     */
    canShotPukes() {
        this._rightButton.enable();
    }

    /**
     * 不能出牌
     */
    canNotShotPukes() {
        this._rightButton.disable();
    }

    /**
     * 隐藏所有按钮
     */
    hideAll() {
        this._leftButton.hide();
        this._rightButton.hide();
    }

    /**
     * 所有按钮都不可用
     */
    disableAll() {
        this._leftButton.disable();
        this._rightButton.disable();
    }
};

export default ButtonControl;