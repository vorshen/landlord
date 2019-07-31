import User from "./user/User";
import Network from "./network/Network";
import Room from "./room/Room";
import Hall from "./hall/Hall";
import { RET_SUCCESS } from "./utils";
import './App.css';
import ResourceConfig from "./config/resource.json";
import ResourceManage from "./render/ResourceManage";
import DefaultConfig from "../../../config/default.json";

interface i_AppOptions {
    root: HTMLDivElement;
}

class App {
    // 用户信息
    private _user?: User;
    // 网络
    public network: Network;
    // 最外层容器
    private _root: HTMLDivElement;
    // 大厅
    private _hall!: Hall;
    // 房间
    private _room!: Room;

    // 首页需要dom的容器
    private _box!: HTMLDivElement;
    // 资源加载进度条
    private _resourceProgress!: HTMLDivElement;
    // 开始按钮
    private _startButton!: HTMLDivElement;
    
    public debugger: boolean = false;

    /**
     * 初始化
     */
    private _init() {
        this._resourceProgress = document.createElement('div');
        this._resourceProgress.className = 'index-resource-progress';

        this._startButton = document.createElement('div');
        this._startButton.className = 'index-start-button';
        this._startButton.innerText = '快速开始';
        this._startButton.onclick = this._start;

        this._box = document.createElement('div');
        this._box.className = 'index-box';

        this._box.appendChild(this._resourceProgress);
        this._box.appendChild(this._startButton);

        this._root.appendChild(this._box);

        // 开始加载资源
        ResourceManage.load(ResourceConfig);

        // 进度条
        ResourceManage.addEventListener('onProgress', () => {
            this._resourceProgress.style.width = `${100 * ResourceManage.completed / ResourceManage.total}%`;
            // console.log(ResourceManage.total, ResourceManage.completed);
        });

        // 加载完毕，「开始游戏按钮展示」
        ResourceManage.addEventListener('onComplete', () => {
            this._startButton.style.display = 'block';
        });
    }

    /**
     * 展示
     */
    private  _start = async () => {
        this._box.removeChild(this._startButton);

        let uid = String(Date.now() % 1000);
        let name = uid;

        this._user = new User({
            uid: uid,
            name: name
        });

        await this.initGame();

        this._box.style.display = 'none';

        this.enterHall();
    }

    constructor(options: i_AppOptions) {
        this._root = options.root;
        
        this.network = new Network({
            host: DefaultConfig.host,
            port: DefaultConfig.port
        });

        this._init();
    }

    get root() {
        return this._root;
    }

    get user() {
        return this._user;
    }

    get hall(): Hall {
        return this._hall;
    }

    get room(): Room {
        return this._room;
    }

    /**
     * 初始化游戏，简历websocket连接
     */
    async initGame() {
        await this.network.init();

        let result: any = await this.login(this._user!.uid, this._user!.name);
    
        if (result.retcode === RET_SUCCESS) {
            console.log('登录成功: ', result);
        } else {
            console.error('登录异常');
        }
    }

    enterHall() {
        if (this._room) {
            this._room.hide();
        }

        if (!this._hall) {
            this._hall = new Hall({
                app: this
            });
        }

        this._hall.show();
    }

    enterRoom(roomInfo: any) {
        this._hall.hide();

        roomInfo.mainUid = this._user!.uid;

        if (!this._room) {
            this._room = new Room({
                app: this
            });
        }

        this._room.show(roomInfo);
    }

    /**
     * 登录
     * @param uid 
     * @param name 
     */
    async login(uid: string, name: string) {
        return new Promise((resolve, reject) => {
            this.network.notify({
                route: 'Game.EnterGame',
                body: {
                    uid: uid,
                    name: name
                }
            }, function(result: any) {
                resolve(result);
            });
        });
    }
};

export default App;