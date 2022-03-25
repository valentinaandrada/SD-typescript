export class Phone {
    private _type: string;
    private _num: number;
  
    constructor(type: string, num: number) {
      this._type = type;
      this._num = num;
    }
  
    // Setters
  
    set type(type: string) {
      this._type = type;
    }
  
    set num(num: number) {
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

    public displayPhone(): string {
      let phone = `${this.type}: ${this.num}`
      return phone;
    }
  
  }
  
