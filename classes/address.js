"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(street, num, floor, door, zip, location, province) {
        this._street = street;
        this._num = num;
        this._floor = floor;
        this._door = door;
        this._zip = zip;
        this._location = location;
        this._province = province;
    }
    // Setters
    set street(street) {
        this._street = street;
    }
    set num(num) {
        this._num = num;
    }
    set floor(floor) {
        this._floor = floor;
    }
    set door(door) {
        this._door = door;
    }
    set zip(zip) {
        this._zip = zip;
    }
    set location(location) {
        this._location = location;
    }
    set province(province) {
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
    displayAddress() {
        let address = `${this._street} ${this._num}, ${this._floor} ${this._door},${this.zip}, ${this.location}, ${this._province}`;
        return address;
    }
}
exports.Address = Address;
