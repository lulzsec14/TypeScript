const profile = {
  pername: 'alex',
  age: 20,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { pername, age }: { pername: string; age: number } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
