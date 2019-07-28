import EventDispatcher from './EventDispatcher';
import Point from './base/Point';
import Rect from './base/Rect';
import Matrix2D from './base/Matrix2D';

export interface i_DisplayObjectOptions {
    width: number;
    height: number;
    left: number;
    top: number;
}

class DisplayObject extends EventDispatcher {
    protected _width: number;
    protected _height: number;
    protected _matrix: Matrix2D;
    protected _parent: DisplayObject|null = null;
    protected _display: boolean = true;

    /**
     * 获得相比较于全局的matrix
     */
    protected _getGlobalMatrix(): Matrix2D {
        if (this._parent) {
            return this._parent._getGlobalMatrix().transformMatrix(this._matrix);
        } else {
            return this._matrix.clone();
        }
    }

    /**
     * 获取该displayobject的rect
     */
    protected _getAABB() {
        return new Rect(
            this._matrix.tx,
            this._matrix.ty,
            this._width,
            this._height
        );
    }

    constructor(options: i_DisplayObjectOptions) {
        super();

        this._width = options.width;
        this._height = options.height;

        this._matrix = new Matrix2D();
        this._matrix.translate(options.left, options.top);
    }

    get x() {
        return this._matrix.tx;
    }

    get y() {
        return this._matrix.ty;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set parent(obj: DisplayObject|null) {
        this._parent = obj;
    }

    get parent(): DisplayObject|null {
        return this._parent;
    }

    set display(d: boolean) {
        this._display = d;
    }

    get display(): boolean {
        return this._display;
    }

    /**
     * 设置位置
     * @param {*} x 
     * @param {*} y 
     */
    setPosition(x: number, y: number) {
        this._matrix.tx = x;
        this._matrix.ty = y;
    }

    /**
     * x方向偏移
     * @param x 
     */
    translateX(x: number) {
        this._matrix.translateX(x);
    }

    /**
     * y方向偏移
     * @param y 
     */
    translateY(y: number) {
        this._matrix.translateY(y);
    }

    /**
     * 判断是否在AABB中
     * 注意，这里x，y是global的坐标，没有经过transform
     * 所以要进行逆矩阵计算
     * @param {*} x 
     * @param {*} y 
     */
    contain(x: number, y: number) {
        let point = new Point(x, y);
        let matrix: Matrix2D;

        // 先求出完整的矩阵
        if (this._parent) {
            matrix = this._parent._getGlobalMatrix();
        } else {
            matrix = new Matrix2D();
        }

        // 再求逆矩阵
        matrix.invert();
        
        // 点进行矩阵变换
        point.transformWithMatrix(matrix);

        let rect = this._getAABB();

        return rect.contains(point);
    }

    /**
     * 隐藏
     */
    hide() {
        this._display = false;
    }

    /**
     * 展示
     */
    show() {
        this._display = true;
    }

    render(ctx: CanvasRenderingContext2D) {
        // @ts-ignore
        ctx.__saveTransform();

        // @ts-ignore
        ctx.__transform(this._matrix);

        // @ts-ignore
        ctx.__restoreTransform();
    }
};

export default DisplayObject;