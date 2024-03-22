

const min = 2;
const max = 9;

const distribution = [0,0,0,0,0,0,0,0,0];

for (let i = 0; i < 100000; i++) {
  const diff = Math.floor(Math.random() * (max - min + 1) + min) // + Math.round(Math.random() * (modulo.value - 1));
  distribution[diff - 1]++;
}
console.log(distribution);