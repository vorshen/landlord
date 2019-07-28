import DisplayObject, { i_DisplayObjectOptions } from "./DisplayObject";

class Container extends DisplayObject {
    protected _children: DisplayObject[] = [];

    constructor(options: i_DisplayObjectOptions) {
        super(options);
    }

    /**
     * 添加一个元素
     * 在children越往后，index越大，层级越高
     * @param {*} object 
     */
    addChildren(object: DisplayObject, index?: number) {
        object.parent = this;

        if (index === undefined) {
            this._children.push(object);
        } else {
            this._children.splice(index, 0, object);
        }
    }

    /**
     * 删除某个元素
     * @param {*} object 
     */
    removeChildren(object: DisplayObject) {
        let pos = this._children.indexOf(object);
        if (pos < 0) {
            return;
        }

        this._children.splice(pos, 1);
        object.parent = null;
    }

    /**
     * 渲染
     * @param {*} ctx 
     */
    render(ctx: CanvasRenderingContext2D) {
        if (false) {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
        if (!this._display) {
            return;
        }

        // @ts-ignore
        ctx.__saveTransform();
        // @ts-ignore
        ctx.__transform(this._matrix);

        this._children.forEach(function(item) {
            item.display && item.render && item.render(ctx);
        });

        // @ts-ignore
        ctx.__restoreTransform();
    }

    /**
     * 触发事件，不仅仅自己的要触发，还要透传到子节点
     * @param event
     * @param data
     */
    dispatchEvent(event: string, data?: any) {
        super.dispatchEvent(event, data);

        this._children.forEach(function(item) {
            item.dispatchEvent && item.dispatchEvent(event, data);
        });
    }
};

export default Container;