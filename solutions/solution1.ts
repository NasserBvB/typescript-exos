interface IMonument {
  name: string;
  height: number;
}

const monuments: Array<IMonument> = [
  {
    height: Math.floor(Math.random() * 100),
    name: "Tour Effel",
  },
  {
    height: Math.floor(Math.random() * 100),
    name: "Tour Hassan",
  },
  {
    height: Math.floor(Math.random() * 100),
    name: "Koutoubiya",
  },
];

function compareHeghts(monuments: Array<IMonument>) {
  return monuments.sort((a, b) => (a.height > b.height ? 1 : -1))[0];
}
console.log(compareHeghts(monuments).name);
