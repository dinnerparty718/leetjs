import { faker } from "@faker-js/faker";
import { Mappable } from './Map';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string;

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = { lat: parseFloat(faker.address.latitude()), lng: parseFloat(faker.address.longitude()) };
    this.color = 'green';
  }

  markerContent() {
    return `
    <div>
      <h1>Compnay Name: ${this.companyName}</h1>
      <h3>CatchPhrase: ${this.catchPhrase}</h3>
     </div>
    `;
  }
}