class User {
  name: string = "Thalles";
  age: number = 32;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showName = () => {
    console.log(this.name);
  };
}

const user: User = new User("Thalles", 20);
user.showName();