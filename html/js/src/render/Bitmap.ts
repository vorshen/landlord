import DisplayObject, { i_DisplayObjectOptions } from "./DisplayObject";

export type i_BitmapOptions = i_DisplayObjectOptions & {
    image: HTMLImageElement;
}

class Bitmap extends DisplayObject {
    protected _image: HTMLImageElement;

    constructor(options: i_BitmapOptions) {
        super(options);

        this._image = options.image;
    }

    /**
     * 渲染
     * @param {*} ctx 
     */
    render(ctx: CanvasRenderingContext2D) {
        super.render(ctx);

        ctx.save();
        ctx.beginPath();
        ctx.drawImage(this._image, this.x, this.y, this.width, this.height);
        ctx.closePath();
        ctx.restore();
    }
};

export default Bitmap;