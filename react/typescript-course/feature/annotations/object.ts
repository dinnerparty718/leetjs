const profile = {
  name: 'alex',
  age: 20,
  coord: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }

};


const { age }: { age: number; } = profile;
const { coord: { lat, lng } }: { coord: { lat: number; lng: number } } = profile;