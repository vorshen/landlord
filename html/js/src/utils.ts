declare const Module: any;

export const RET_SUCCESS = 10000;

export enum EVENT_NAME {
    ROOM_SHOW = 'RoomShow',
    ROOM_HIDE = 'RoomHide',

    PLAYER_ENTER_ROOM = 'PlayerEnterRoom',
    PLAYER_LEAVE_ROOM = 'PlayerLeaveRoom',
    PLAYER_READY = 'PlayerReady',
    PLAYER_ENTER_ASK = 'PlayerEnterAsk',
    PLAYER_ASK = 'PlayerAsk',
    PLAYER_ENTER_GRAB = 'PlayerEnterGrab',
    PLAYER_GRAB = 'PlayerGrab',
    PLAYER_ENTER_SHOT = 'PlayerEnterShot',
    PLAYER_SHOT = 'PlayerShot',
    
    GAME_START = 'GameStart',
    GAME_OVER = 'GameOver',
    GAME_RESET = 'GAMEReset'
};

export function comparePukes(pukesA: string[], pukesB: string[]) {
    // 数组的内存先申请了
    let ptrA = Module._malloc(4 * pukesA.length);
    let ptrB = Module._malloc(4 * pukesB.length);
    let cppPukesA: any[] = [];
    let cppPukesB: any[] = [];

    // 生成扑克牌
    pukesA.forEach((pukeA: string, i: number) => {
        let infoA = pukeA.split('-');
        cppPukesA.push(
            new Module.JSPuke(+infoA[0], +infoA[1])
        );

        Module.HEAP32[(ptrA >> 2) + i] = cppPukesA[i].ptr;
    });

    pukesB.forEach((pukeB: string, i: number) => {
        let infoB = pukeB.split('-');
        cppPukesB.push(
            new Module.JSPuke(+infoB[0], +infoB[1])
        );

        Module.HEAP32[(ptrB >> 2) + i] = cppPukesB[i].ptr;
    });

    // 开始判断大小
    let result = Module._comparePukes(ptrA, cppPukesA.length, ptrB, cppPukesB.length);

    Module._free(ptrA);
    Module._free(ptrB);

    if (result === 0) {
        result = -1;
    }

    // 析构
    cppPukesA.forEach((cppPuke) => {
        cppPuke.Release();
    });

    cppPukesB.forEach((cppPuke) => {
        cppPuke.Release();
    });

    return result;
}

export function debounce(fn: Function, wait: number) {
    let timer: number | null = null;
    return function() {
        // @ts-ignore
        let context = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, wait);
    };
}