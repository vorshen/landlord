import Point from "./Point";
import Matrix2D from "./Matrix2D";

class Rect {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;

    constructor(x: number, y: number, w: number, h: number) {
        this._x = x;
        this._y = y;
        this._width = w;
        this._height = h;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    /**
     * 直接设置矩形的位置
     * @param x 
     * @param y 
     */
    setPosition(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    /**
     * 某个点是否在该矩型内部
     * @param point 
     */
    contains(point: Point): boolean {
        let {
            x,
            y
        } = point;
        
        if (
            x > this.x &&
            x < this.x + this.width &&
            y > this.y &&
            y < this.y + this.height
        ) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 该矩型经过一个matrix变换
     * @param matrix 
     */
    transformWithMatrix(matrix: Matrix2D) {
        let a = matrix.a;
        let b = matrix.b;
        let c = matrix.c;
        let d = matrix.d;
        let tx = matrix.tx;
        let ty = matrix.ty;

        let x = this.x;
        let y = this.y;
        let xMax = x + this.width;
        let yMax = y + this.height;

        let x0 = a * x + c * y + tx;
        let y0 = b * x + d * y + ty;
        let x1 = a * xMax + c * y + tx;
        let y1 = b * xMax + d * y + ty;
        let x2 = a * xMax + c * yMax + tx;
        let y2 = b * xMax + d * yMax + ty;
        let x3 = a * x + c * yMax + tx;
        let y3 = b * x + d * yMax + ty;

        let tmp = 0;

        if (x0 > x1) {
            tmp = x0;
            x0 = x1;
            x1 = tmp;
        }
        if (x2 > x3) {
            tmp = x2;
            x2 = x3;
            x3 = tmp;
        }

        this._x = Math.floor(x0 < x2 ? x0 : x2);
        this._width = Math.ceil((x1 > x3 ? x1 : x3) - this.x);

        if (y0 > y1) {
            tmp = y0;
            y0 = y1;
            y1 = tmp;
        }
        if (y2 > y3) {
            tmp = y2;
            y2 = y3;
            y3 = tmp;
        }

        this._y = Math.floor(y0 < y2 ? y0 : y2);
        this._height = Math.ceil((y1 > y3 ? y1 : y3) - this.y);
    }
};

export default Rect;