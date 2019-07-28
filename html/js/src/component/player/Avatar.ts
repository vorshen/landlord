import Bitmap, { i_BitmapOptions } from "../../render/Bitmap";
import ResourceManage from "../../render/ResourceManage";


/**
 * 玩家头像
 */
class Avatar extends Bitmap {
    constructor(options: i_BitmapOptions) {
        super(options);
    }

    beLandlord() {
        this._image = ResourceManage.get('LANDLORD');
    }

    beNormal() {
        this._image = ResourceManage.get('AVATAR');
    }
};

export default Avatar;
