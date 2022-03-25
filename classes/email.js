"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(type, email) {
        this._type = type;
        this._email = email;
    }
    // Setters
    set type(type) {
        this._type = type;
    }
    set email(email) {
        this._email = email;
    }
    // Getters
    get type() {
        return this._type;
    }
    get email() {
        return this._email;
    }
    // Functions
    displayEmail() {
        let email = `${this.type}: ${this.email}`;
        return email;
    }
}
exports.Email = Email;
