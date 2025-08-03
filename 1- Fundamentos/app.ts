import { CompanyAccount } from "./class/CompanyAccount";
import { peopleAccount } from "./class/PeopleAccount";

const peopleAccount1 = new peopleAccount(
  "Thalles Coelho Marques",
  123456,
  123456
);
console.log(peopleAccount1);

const companyAccount1: CompanyAccount = new CompanyAccount(
  "TLS Movies",
  123456
);
console.log(companyAccount1);
