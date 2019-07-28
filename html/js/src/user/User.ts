interface i_Options {
    uid: string;
    name: string;
};

class User {
    private _uid: string;
    private _name: string;

    constructor(options: i_Options) {
        this._uid = options.uid;
        this._name = options.name;
    }

    get uid() {
        return this._uid;
    }

    get name() {
        return this._name;
    }
};

export default User;