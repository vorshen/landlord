import App from './App';
import './render/polyfill';
import User from './user/User';


(<any>window).start = function() {
    let app = new App({
        root: <HTMLDivElement>document.querySelector('.root')
    });

    (<any>window).app = app;
};

(<any>window).startTest = function(app: App) {
    app.debugger = true;

    // @ts-ignore
    app._user = new User({
        uid: 'a',
        name: 'a'
    });

    // @ts-ignore
    app._box.style.display = 'none';
    app.enterHall();
    app.enterRoom({
        roomId: '123',
        players: {
            'a': {
                playerName: 'a',
                position: 0,
            },
            'b': {
                playerName: 'b',
                position: 1,
            },
            'c': {
                playerName: 'c',
                position: 2,
            }
        }
    });

    // @ts-ignore
    app.room._enterAskLandlord({
        askPlayer: 'a',
        pukes: ["1-29", "4-29", "4-22", "2-31", "1-24", "2-25", "2-21", "3-26", "3-19", "1-21", "3-30", "3-31", "3-21", "4-26", "2-30", "1-30", "1-27"]
    });

    // setTimeout(function() {
    //     // @ts-ignore
    //     app.room._gameStart({
    //         landlordPlayer: 'a',
    //         landlordPukes: ["1-29", "4-29", "4-22"]
    //     });
    // }, 3000);

    (<any>window).someonePukes = function(user: string) {
        // @ts-ignore
        app.room._playerPukes({
            player: user,
            pukes: ['1-29', '4-29', '1-29', '4-29', '1-29', '4-29', '1-29', '4-29']
        });
    }
}



