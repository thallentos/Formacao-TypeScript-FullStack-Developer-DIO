import { TLS_Account } from "./TLS_Account";

export class peopleAccount extends TLS_Account {
  doc_id: number;
  constructor(name: string, accountNumber: number, doc_id: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}
