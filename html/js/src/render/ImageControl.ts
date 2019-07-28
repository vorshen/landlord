interface i_Pools {
    [key: string]: HTMLImageElement
}

class ImageControl {
    private _pools: i_Pools = {};

    constructor() {
    }

    push(url: string): HTMLImageElement {
        if (!this._pools[url]) {
            let image = new Image();
            image.src = url;
            this._pools[url] = image;
        }

        return this._pools[url];
    }
};



export default new ImageControl();