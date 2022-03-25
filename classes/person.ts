import { Address } from "./address";
import { Email } from "./email";
import { Phone } from "./phone";

export class Person {
  private _name: string;
  private _surnames: string;
  private _age: number;
  private _dni: string;
  private _birthday: string;
  private _favColour: string;
  private _gender: string;
  private _addresses: Address[] = [];
  private _emails: Email[] = [];
  private _phones: Phone[] = [];
  private _notes: string;

  constructor(
    name: string,
    surnames: string,
    age: number,
    dni: string,
    birthday: string,
    favColour: string,
    gender: string,
    address: Address,
    email: Email,
    phone: Phone,
    notes: string
  ) {
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

  set name(name: string) {
    this._name = name;
  }

  set surnames(surnames: string) {
    this._surnames = surnames;
  }

  set age(age: number) {
    this._age = age;
  }

  set dni(dni: string) {
    this._dni = dni;
  }

  set birthday(birthday: string) {
    this._birthday = birthday;
  }

  set favColour(favColour: string) {
    this._favColour = favColour;
  }

  set gender(gender: string) {
    this._gender = gender;
  }

  set addresses(addresses: Address[]) {
    this._addresses = addresses;
  }
  
  set emails(emails: Email[]) {
    this._emails = emails;
  }

  set phones(phones: Phone[]) {
    this._phones = phones;
  }

  set notes(notes: string) {
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

  public addAddress(newAddress: Address): void {
      this.addresses.push(newAddress);
  }

  public displayAddresses(): string {
    let contactAddresses = '';
    for (let i=0; i<this.addresses.length; i++){
        contactAddresses += `\n\t• ${this.addresses[i].displayAddress()}`;
    }
    return contactAddresses;
  }

  public addEmail(newEmail: Email): void {
    this.emails.push(newEmail);
  }

  public displayEmails(): string {
    let contactEmails = '';
    for (let i=0; i<this.emails.length; i++) {
      contactEmails += `\n\t• ${this.emails[i].displayEmail()}`
    }
    return contactEmails;
  }

  public addPhone(newPhone: Phone): void {
    this.phones.push(newPhone);
  }

  public displayPhones(): string {
    let contactNumbers = '';
    for (let i=0; i<this.phones.length; i++){
      contactNumbers += `\n\t• ${this.phones[i].displayPhone()}`
    }
    return contactNumbers;
  }

  public displayContact(): string {
    let contactInfo: string = `
    Edad: ${this.age}
    DNI: ${this.dni}
    Fecha de nacimiento: ${this._birthday}
    Color favorito: ${this._favColour}
    Género: ${this.gender}
    Direcciones: ${this.displayAddresses()}
    Emails: ${this.displayEmails()}
    Teléfonos: ${this.displayPhones()}
    Notas: ${this.notes}`
    
    return contactInfo;
  }
}
