export class Email{
    private _type: string;
    private _email: string;
  
    constructor(type: string, email:string) {
      this._type = type;
      this._email = email;
    }
  
    // Setters
  
    set type (type: string) {
      this._type = type;
    }
  
    set email (email: string) {
      this._email = email;
    }
  
    // Getters
    
    get type() {
      return this._type;
    }
  
    get email() {
      return this._email
    }

    // Functions
  
    public displayEmail(): string{
      let email = `${this.type}: ${this.email}`
      return email;
    }
  }
  
  