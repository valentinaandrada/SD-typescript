"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    constructor(type, num) {
        this._type = type;
        this._num = num;
    }
    // Setters
    set type(type) {
        this._type = type;
    }
    set num(num) {
        this._num = num;
    }
    // Getters
    get type() {
        return this._type;
    }
    get num() {
        return this._num;
    }
    // Functions
    displayPhone() {
        let phone = `${this.type}: ${this.num}`;
        return phone;
    }
}
exports.Phone = Phone;
