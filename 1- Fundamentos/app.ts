// Thallentos Banking

// name, accountNumber
// depositar, sacar

abstract class Account {
  name: string;
  accountNumber: number;
  balance: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("Deposito realizado com sucesso!");
  };

  withdraw = () => {
    console.log("Saque realizado com sucesso!");
  };

  getBalance = () => {
    console.log(this.balance);
  };
}

class peopleAccount extends Account {
  doc_id: number;
  constructor(name: string, accountNumber: number, doc_id: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}

const peopleAccount1 = new peopleAccount("Thalles Coelho Marques", 123456, 123456);
peopleAccount1.deposit();
peopleAccount1.getBalance();