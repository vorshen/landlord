import EventDispatcher from "../render/EventDispatcher";

interface i_NetworkOptions {
    host: string;
    port?: number;
    useSecurity?: boolean
}

enum NETWORK_STATUS {
    UNOPEN,
    OPENING,
    OPENED
};

class Network extends EventDispatcher {
    private _host: string;
    private _port: number|null;
    private _useSecurity: boolean;
    private _callbackIndex: number = 0;
    private _callbacks: Function[] = [];
    private _status: NETWORK_STATUS;
    private _ws?: WebSocket;

    private _processMessage(msg: any) {
        // response消息
        if (msg.id) {
            let cb = this._callbacks[msg.id];

            delete this._callbacks[msg.id];
            if (typeof cb !== 'function') {
                console.error('callback is not a function for request: ', msg.id);
                return;
            }

            cb(msg.body);

            return;
        }

        // 服务器推送消息
        let route = msg.route;

        if (!route) {
            console.error('no route in message');
            return;
        }

        this.dispatchEvent(route, msg.data);
    }

    private _processMessageBatch(msg: any) {
        for (let i = 0; i < msg.length; i++) {
            this._processMessage(msg[i]);
        }
    }

    constructor(options: i_NetworkOptions) {
        super();

        this._host = options.host;
        this._port = options.port || null;
        this._useSecurity = options.useSecurity || false;

        this._status = NETWORK_STATUS.UNOPEN;
    }

    get status() {
        return this._status;
    }

    async init() {
        return new Promise((resolve, reject) => {
            let url = `${this._useSecurity?'wss':'ws'}://${this._host}`;

            if (this._port) {
                url += `:${this._port}`;
            }

            this._ws = new WebSocket(url);

            this._status = NETWORK_STATUS.OPENING;

            this._ws.onopen = () => {
                this._status = NETWORK_STATUS.OPENED;

                this.dispatchEvent('open');

                resolve();
            };

            this._ws.onclose = () => {
                this._status = NETWORK_STATUS.UNOPEN;

                this.dispatchEvent('close');

                reject();
            };

            this._ws.onmessage = (response) => {
                let data = response.data;

                if (typeof data === 'string') {
                    data = JSON.parse(data);
                }
                
                if (data instanceof Array) {
                    this._processMessageBatch(data);
                } else {
                    this._processMessage(data);
                }
            };
        });
    }

    notify(msg: any, callback?: Function) {
        if (!this._ws) {
            return;
        }

        if (typeof callback === 'function') {
            msg.id = ++this._callbackIndex;

            this._callbacks[msg.id] = callback;
        }

        this._ws.send(JSON.stringify(msg));
    }
};

export default Network;