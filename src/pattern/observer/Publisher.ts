import ISubscriber from "./ISubscriber";

export default class Publisher {
    private name: string;
    private listeners: ISubscriber[];

    constructor(_name: string) {
        this.name = _name;
        this.listeners = [];
    }

    public subscribe(_newSubscriber: ISubscriber) {
        _newSubscriber.update(this);
        this.listeners.push(_newSubscriber);
    }

    public unsubscribe(subscriber: ISubscriber) {
        this.listeners.filter((elem: ISubscriber) => elem !== subscriber);
    }

    public notify() {
        for (const elem of this.listeners) {
            elem.update(this);
        }
    }

    get getName(): string {
        return this.name;
    }

    set setName(_value: string) {
        this.name = _value;
        this.notify();
    }
}