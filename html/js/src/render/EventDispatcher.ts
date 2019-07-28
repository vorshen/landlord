interface i_Listeners {
    [key: string]: Function[]
}

class EventDispatcher {
    private _listeners: i_Listeners = {};

    private _hasEventListener(type: string, func: Function) {
        if (this._listeners[type] === undefined) {
            return false;
        }

        if (this._listeners[type].indexOf(func) > -1) {
            return true;
        } else {
            return false;
        }
    }

    constructor() {
    }

    addEventListener(type: string, func: Function) {
        if (this._hasEventListener(type, func)) {
            return;
        }

        if (this._listeners[type] === undefined) {
            this._listeners[type] = [];
        }

        this._listeners[type].push(func);
    }

    removeEventListener(type: string, func: Function) {
        if (!this._hasEventListener(type, func)) {
            return;
        }

        let index = this._listeners[type].indexOf(func);

        this._listeners[type].splice(index, 1);
    }

    dispatchEvent(type: string, data?: any) {
        if (this._listeners[type] === undefined) {
            return;
        }

        for (let i = 0; i < this._listeners[type].length; i++) {
            this._listeners[type][i].call(this, data);
        }
    }
}

export default EventDispatcher;