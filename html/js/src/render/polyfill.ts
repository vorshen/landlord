import Matrix2D from "./base/Matrix2D";

(<any>CanvasRenderingContext2D.prototype).__matrix = new Matrix2D();
(<any>CanvasRenderingContext2D.prototype).__matrixArr = [];

(<any>CanvasRenderingContext2D.prototype).__saveTransform = function() {
    let t = this.getTransform();
    this.__matrix = new Matrix2D(t.a, t.b, t.c, t.d, t.e, t.f);
    this.__matrixArr.unshift(this.__matrix.clone());
};

(<any>CanvasRenderingContext2D.prototype).__transform = function(matrix: Matrix2D) {
    this.__matrix.transformMatrix(matrix);
    this.setTransform.apply(this, this.__matrix.serialize());
};

(<any>CanvasRenderingContext2D.prototype).__restoreTransform = function() {
    this.__matrix = this.__matrixArr.shift();
    this.setTransform.apply(this, this.__matrix.serialize());
};