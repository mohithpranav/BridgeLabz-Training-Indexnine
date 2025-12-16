class Person {
  name: string;
  age: number;
  country: string;
  address: {
    door_no: string;
    street: string;
    pincode: number;
  };

  constructor(
    name: string,
    age: number,
    country: string,
    address: { door_no: string; street: string; pincode: number }
  ) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.address = address;
  }
}
