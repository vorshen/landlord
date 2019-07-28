import App from "../App";
import { RET_SUCCESS } from "../utils";

import './Hall.css';

interface i_HallOptions {
    app: App;
}

class Hall {
    private _app: App;
    // 是否初始化过，该组件只会初始化一次
    private _inited: boolean = false;
    // 大厅的dom容器
    private _box!: HTMLDivElement;
    // 创建房间的按钮
    private _createButton!: HTMLDivElement;
    // 输入房间号的输入框
    private _roomIdInput!: HTMLInputElement;
    // 加入房间的按钮
    private _enterButton!: HTMLDivElement;


    private _show() {

        if (this._inited) {
            this._box.style.display = 'block';
        } else {
            this._initUI();

            this._inited = true;
        }
    }

    private _hide() {
        this._box.style.display = 'none';
    }

    private _initUI() {
        this._createButton = document.createElement('div');
        this._createButton.className = 'hall-create-button';
        this._createButton.innerText = '创建房间';
        this._createButton.onclick = () => {
            this.createRoom();
        }

        this._roomIdInput = document.createElement('input');
        this._roomIdInput.className = 'hall-rid-input';

        this._enterButton = document.createElement('div');
        this._enterButton.className = 'hall-enter-button';
        this._enterButton.innerText = '加入房间';
        this._enterButton.onclick = () => {
            this.enterRoom(this._roomIdInput.value);
        }

        this._box = document.createElement('div');
        this._box.className = 'hall-box';

        this._box.appendChild(this._createButton);
        this._box.appendChild(this._roomIdInput);
        this._box.appendChild(this._enterButton);

        this._app.root.appendChild(this._box);
    }

    private async _createRoom() {
        return new Promise((resolve, reject) => {
            this._app.network.notify({
                route: 'Hall.CreateRoom',
            }, function(result: any) {
                if (result.retcode === RET_SUCCESS) {
                    console.log('创建房间成功', result);
                    resolve(result);
                } else {
                    console.error('创建房间失败');
                }
                
            });
        });
    }

    private async _enterRoom(rid: string) {
        return new Promise((resolve, reject) => {
            this._app.network.notify({
                route: 'Hall.EnterRoom',
                body: {
                    rid: rid
                }
            }, function(result: any) {
                if (result.retcode === RET_SUCCESS) {
                    console.log('进入房间成功');
                    resolve(result);
                } else {
                    console.error('进入房间失败');
                }
                
            });
        });
    }

    constructor(options: i_HallOptions) {
        this._app = options.app;
    }

    show() {
        console.log('进入大厅');

        this._show();
    }

    hide() {
        console.log('离开大厅');

        this._hide();
    }

    async createRoom() {
        let result = await this._createRoom();

        this._app.enterRoom(result);
    }

    async enterRoom(rid: string) {
        let result: any = await this._enterRoom(rid);

        result.roomId = rid;
        this._app.enterRoom(result);
    }
};

export default Hall;