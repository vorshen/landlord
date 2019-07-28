class Matrix2D {
    public a: number;
    public b: number;
    public c: number;
    public d: number;
    public tx: number;
    public ty: number;

    constructor(a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
    }

    clone(): Matrix2D {
        let matrix = new Matrix2D();

        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;

        return matrix;
    }

    reset() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
    }

    /**
     * 偏移
     * @param {*} x 
     * @param {*} y 
     */
    translate(x: number, y: number) {
        this.tx += x;
        this.ty += y;
    }

    /**
     * x方向偏移
     * @param {*} x 
     */
    translateX(x: number) {
        this.tx += x;
    }

    /**
     * y方向的偏移
     * @param {*} y 
     */
    translateY(y: number) {
        this.ty += y;
    }

    /**
     * 缩放
     * @param {*} x 
     * @param {*} y 
     */
    scale(x: number, y: number) {
        this.a *= x;
        this.c *= x;
        this.tx *= x;

        this.b *= y;
        this.d *= y;
        this.ty *= y;
    }

    /**
     * x方向缩放
     * @param {*} x 
     */
    scaleX(x: number) {
        this.a *= x;
        this.c *= x;
        this.tx *= x;
    }

    /**
     * y方向缩放
     * @param {*} y 
     */
    scaleY(y: number) {
        this.b *= y;
        this.d *= y;
        this.ty *= y;
    }

    /**
     * 自身矩阵与另外一个矩阵相乘
     * @param {*} matrix 
     * @param {*} target
     */
    transformMatrix(matrix: Matrix2D, target?: Matrix2D): Matrix2D {
        if (target === undefined) {
            target = this;
        }

        target.a = this.a * matrix.a;
        target.b = 0;
        target.c = 0;
        target.d = this.d * matrix.d;
        target.tx = this.a * matrix.tx + this.tx;
        target.ty = this.d * matrix.ty + this.ty;

        return target;
    }

    /**
     * 自身矩阵的逆矩阵
     * @param {*} target
     */
    invert(target?: Matrix2D) {
        if (target === undefined) {
            target = this;
        }

        let a = this.a;
        let b = this.b;
        let c = this.c;
        let d = this.d;
        let tx = this.tx;
        let ty = this.ty;
        if (b == 0 && c == 0) {
            target.b = target.c = 0;
            if (a == 0 || d == 0) {
                target.a = target.d = target.tx = target.ty = 0;
            } else {
                a = target.a = 1 / a;
                d = target.d = 1 / d;
                target.tx = -a * tx;
                target.ty = -d * ty;
            }

            return;
        }

        let determinant = a * d - b * c;
        if (determinant == 0) {
            target.reset();
            return;
        }
        
        determinant = 1 / determinant;
        let k = target.a = d * determinant;
        b = target.b = -b * determinant;
        c = target.c = -c * determinant;
        d = target.d = a * determinant;
        target.tx = -(k * tx + c * ty);
        target.ty = -(b * tx + d * ty);
    }

    serialize() {
        return [
            this.a, this.b, 
            this.c, this.d, 
            this.tx, this.ty
        ];
    }
};

export default Matrix2D;