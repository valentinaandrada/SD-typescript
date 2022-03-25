export class Address {
    private _street: string;
    private _num: number;
    private _floor: number;
    private _door: string;
    private _zip: number;
    private _location: string;
    private _province: string;

    constructor(
        street: string, 
        num: number,
        floor: number,
        door: string,
        zip: number,
        location: string,
        province: string,
    ) {
        this._street = street;
        this._num = num;
        this._floor = floor;
        this._door = door;
        this._zip = zip;
        this._location = location;
        this._province = province;
    }

    // Setters

    set street (street: string) {
        this._street = street;
    }

    set num (num: number) {
        this._num = num;
    }
    
    set floor (floor: number) {
        this._floor = floor;
    }

    set door (door: string) {
        this._door = door;
    }

    set zip (zip: number) {
        this._zip = zip;
    }

    set location (location: string) {
        this._location = location;
    }

    set province (province: string) {
        this._province = province;
    }

    // Getters

    get street() {
        return this._street;
    }

    get num() {
        return this._num;
    }

    get floor() {
        return this._floor;
    }

    get door() {
        return this._door;
    }

    get zip() {
        return this._zip;
    }

    get location() {
        return this._location;
    }

    get province() {
        return this._province;
    }

    // Functions

    public displayAddress(): string {
        let address: string = `${this._street} ${this._num}, ${this._floor} ${this._door},${this.zip}, ${this.location}, ${this._province}`
        return address;
    }

}
