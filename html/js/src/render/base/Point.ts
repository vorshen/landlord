import Matrix2D from "./Matrix2D";

class Point {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    /**
     * 直接修改位置
     * @param x 
     * @param y 
     */
    setPosition(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    /**
     * 该点经过一个matrix变换
     * @param matrix 
     */
    transformWithMatrix(matrix: Matrix2D) {
        this._x = matrix.a * this._x + matrix.tx;
        this._y = matrix.d * this._y + matrix.ty;
    }
};

export default Point;