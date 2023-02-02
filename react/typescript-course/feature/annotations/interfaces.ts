interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}



const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
}


// very resusable code
const printSummary = (item: Reportable): void => {
  // console.log(`name: ${vehicle.name}`);
  // console.log(`year: ${vehicle.year}`);
  // console.log(`Broken?: ${vehicle.broken}`);

  console.log(item.summary())
}

printSummary(oldCivic);

const dirnk = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `my drink has ${this.sugar} grams of sugar`;
  }
}

printSummary(dirnk);
