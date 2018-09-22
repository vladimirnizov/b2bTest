export class Rating {
    public get Source(): string {
        return this._Source;
    }
    public set Source(value: string) {
        this._Source = value;
    }
    public get Value(): string {
        return this._Value;
    }
    public set Value(value: string) {
        this._Value = value;
    }

    constructor(private _Source: string,
                private _Value: string)
                {}
                

}