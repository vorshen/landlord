import Bitmap, { i_BitmapOptions } from "../../render/Bitmap";
import ResourceManage from "../../render/ResourceManage";

class DesktopText extends Bitmap {
    private _change(key: string | null) {
        if (key === null) {
            this.hide();
            return;
        }

        this._image = ResourceManage.get(key);
        this.show();
    }

    constructor(options: i_BitmapOptions) {
        super(options);
    }

    ready(isReady: boolean) {
        if (isReady) {
            this._change('READY');
        } else {
            this._change(null);
        }
    }

    askLandlord(isAsk: boolean) {
        if (isAsk) {
            this._change('ASK');
        } else {
            this._change('NO_ASK');
        }
    }

    grabLandlord(isGrab: boolean) {
        if (isGrab) {
            this._change('GRAB');
        } else {
            this._change('NO_GRAB');
        }
    }

    noShot() {
        this._change('NO_SHOT');
    }
};

export default DesktopText;