const [min, max] = [null, null];
const price = 10;

function filtering() {
  return (min === null || min <= price) && (max === null || price <= max);
}

console.log(filtering());
