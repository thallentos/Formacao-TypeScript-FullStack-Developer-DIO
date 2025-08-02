export abstract class TLS_Account {
  private name: string;
  readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
    
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (): void => {
    if (this.validateStatus()) {
      console.log("Deposito realizado com sucesso!");
    }
  };

  withdraw = (): void => {
    console.log("Saque realizado com sucesso!");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error();
  };
}
