import EventDispatcher from "./EventDispatcher";

const enum RESOURCE_TYPE {
    IMAGE,
    AUDIO,
};

const enum RESOURCE_STATUS {
    LOADING,
    COMPLETED,
    FAILED
};

class ResourceManage extends EventDispatcher {
    // 总共需要加载的资源
    private _total: number;
    // 正在加载的资源
    private _loading: number;
    // 当前已经加载的资源
    private _completed: number;
    // 加载失败的资源
    private _failed: number;

    // 配置
    private _config: any = {};

    private _load(key: string, url: string) {
        this._total++;
        this._loading++;

        if (url.match(/png|jpg/)) {
            let image = this._loadImage(url);
            image.onload = () => {
                this._config[key].status = RESOURCE_STATUS.COMPLETED;
                this._handleLoaded();
            };
            image.onerror = () => {
                console.warn('资源加载失败: ', key);
                this._config[key].status = RESOURCE_STATUS.FAILED;
                this._handleError();
            };

            this._config[key] = {
                type: RESOURCE_TYPE.IMAGE,
                value: image,
                status: RESOURCE_STATUS.LOADING
            };
        } else {
            // 没有音乐
            console.log('no support');
        }
    }

    private _loadImage(url: string) {
        let image = new Image();
        image.src = url;

        return image;
    }

    private _handleLoaded = () => {
        this._loading--;
        this._completed++;

        this.dispatchEvent('onProgress');

        if (this._loading === 0) {
            this.dispatchEvent('onComplete');
        }
    }

    private _handleError = () => {
        this._loading--;
        this._failed++;

        this.dispatchEvent('onFail');
        
        if (this._loading === 0) {
            this.dispatchEvent('onComplete');
        }
    }

    constructor() {
        super();

        this._total = 0;
        this._loading = 0;
        this._completed = 0;
        this._failed = 0;
    }

    get total() {
        return this._total;
    }

    get loading() {
        return this._loading;
    }

    get completed() {
        return this._completed;
    }

    get failed() {
        return this._failed;
    }

    load(config: any) {
        for (let key in config) {
            if (this._config[key] === undefined) {
                this._load(key, config[key]);
            }
        }
    }

    get(key: string) {
        // 可以有是否失败、重试的判断
        return this._config[key].value;
    }
};

export default new ResourceManage();