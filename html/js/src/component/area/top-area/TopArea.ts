import Container from "../../../render/Container";
import App from "../../../App";
import LandlordPukes from "./LandlordPukes";
import BackButton from "./BackButton";
import RoomInfo from "./RoomInfo";
import { i_DisplayObjectOptions } from "../../../render/DisplayObject";
import { EVENT_NAME } from "../../../utils";

class TopArea extends Container {
    private _app: App;

    private _backButton!: BackButton;

    private _roomInfo!: RoomInfo;

    private _landlordPukes!: LandlordPukes;

    private _initBackButton() {
        this._backButton = new BackButton({
            text: '返回',
            callback: () => {
                console.log('返回大厅');
                this._app.room.leaveRoom();
            },
            available: true,
            width: 60,
            height: 30,
            top: 5,
            left: 10
        });

        this.addChildren(this._backButton);
    }

    private _initRoomInfo() {
        this._roomInfo = new RoomInfo({
            text: '房间号: ',
            size: 16,
            width: 100,
            height: 20,
            top: 10,
            left: 80,
            color: 'black'
        });

        this.addChildren(this._roomInfo);
    }

    private _initLandlordPukes() {
        this._landlordPukes = new LandlordPukes({
            pukeWidth: 28,
            interval: 0,
            width: 28 * 3,
            height: 42,
            left: (this._width - 28 * 3) / 2,
            top: 0
        });

        this.addChildren(this._landlordPukes);
    }

    private _handleRoomShow = () => {
        this._roomInfo.text = `房间号: ${this._app.room.roomId}`;
    }

    private _handleGameStart = (data: {landlordPlayer: string, landlordPukes: string[]}) => {
        this._landlordPukes.postPukes(data.landlordPukes);
    }

    private _handleGameReset = () => {
        this._landlordPukes.deleteAll();
    }

    constructor(app: App, options: i_DisplayObjectOptions) {
        super(options);

        this._app = app;

        this._initBackButton();

        this._initRoomInfo();

        this._initLandlordPukes();

        this._app.room.addEventListener(EVENT_NAME.ROOM_SHOW, this._handleRoomShow);
    
        this._app.room.addEventListener(EVENT_NAME.GAME_START, this._handleGameStart);

        this._app.room.addEventListener(EVENT_NAME.GAME_RESET, this._handleGameReset);
    }
};

export default TopArea;