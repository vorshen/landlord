import Bitmap, { i_BitmapOptions } from "../../render/Bitmap";

export type i_BasePukeOptions = i_BitmapOptions & {
    choose?: boolean,
    id: string;
}

class BasePuke extends Bitmap {
    // 是否选中
    private _choose: boolean;
    // id
    private _id: string;
    
    constructor(options: i_BasePukeOptions) {
        super(options);

        this._id = options.id;

        // 默认没有选中
        this._choose = options.choose || false;
    }

    get choose() {
        return this._choose;
    }

    get id() {
        return this._id;
    }

    /**
     * 选中
     */
    select() {
        if (this.choose) {
            this.translateY(((this.height * 0.15) >> 0));
        } else {
            this.translateY(-((this.height * 0.15) >> 0));
        }

        this._choose = !this._choose;
    }
}

export default BasePuke;