"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, surnames, age, dni, birthday, favColour, gender, address, email, phone, notes) {
        this._addresses = [];
        this._emails = [];
        this._phones = [];
        this._name = name;
        this._surnames = surnames;
        this._age = age;
        this._dni = dni;
        this._birthday = birthday;
        this._favColour = favColour;
        this._gender = gender;
        this._addresses.push(address);
        this._emails.push(email);
        this._phones.push(phone);
        this._notes = notes;
    }
    // Setters
    set name(name) {
        this._name = name;
    }
    set surnames(surnames) {
        this._surnames = surnames;
    }
    set age(age) {
        this._age = age;
    }
    set dni(dni) {
        this._dni = dni;
    }
    set birthday(birthday) {
        this._birthday = birthday;
    }
    set favColour(favColour) {
        this._favColour = favColour;
    }
    set gender(gender) {
        this._gender = gender;
    }
    set addresses(addresses) {
        this._addresses = addresses;
    }
    set emails(emails) {
        this._emails = emails;
    }
    set phones(phones) {
        this._phones = phones;
    }
    set notes(notes) {
        this._notes = notes;
    }
    // Getters
    get name() {
        return this._name;
    }
    get surnames() {
        return this._surnames;
    }
    get age() {
        return this._age;
    }
    get dni() {
        return this._dni;
    }
    get birthday() {
        return this._birthday;
    }
    get favColour() {
        return this._favColour;
    }
    get gender() {
        return this._gender;
    }
    get addresses() {
        return this._addresses;
    }
    get emails() {
        return this._emails;
    }
    get phones() {
        return this._phones;
    }
    get notes() {
        return this._notes;
    }
    // Functions
    addAddress(newAddress) {
        this.addresses.push(newAddress);
    }
    displayAddresses() {
        let contactAddresses = '';
        for (let i = 0; i < this.addresses.length; i++) {
            contactAddresses += `\n\t• ${this.addresses[i].displayAddress()}`;
        }
        return contactAddresses;
    }
    addEmail(newEmail) {
        this.emails.push(newEmail);
    }
    displayEmails() {
        let contactEmails = '';
        for (let i = 0; i < this.emails.length; i++) {
            contactEmails += `\n\t• ${this.emails[i].displayEmail()}`;
        }
        return contactEmails;
    }
    addPhone(newPhone) {
        this.phones.push(newPhone);
    }
    displayPhones() {
        let contactNumbers = '';
        for (let i = 0; i < this.phones.length; i++) {
            contactNumbers += `\n\t• ${this.phones[i].displayPhone()}`;
        }
        return contactNumbers;
    }
    displayContact() {
        let contactInfo = `
    Edad: ${this.age}
    DNI: ${this.dni}
    Fecha de nacimiento: ${this._birthday}
    Color favorito: ${this._favColour}
    Género: ${this.gender}
    Direcciones: ${this.displayAddresses()}
    Emails: ${this.displayEmails()}
    Teléfonos: ${this.displayPhones()}
    Notas: ${this.notes}`;
        return contactInfo;
    }
}
exports.Person = Person;
