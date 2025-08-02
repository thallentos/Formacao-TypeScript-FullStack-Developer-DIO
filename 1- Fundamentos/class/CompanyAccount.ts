import { TLS_Account } from "./TLS_Account";

export class CompanyAccount extends TLS_Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (): void => {
    console.log("Você fez um empréstimo!");
  };

  deposit = (): void => {
    console.log("A empresa depositou");
  };
}
