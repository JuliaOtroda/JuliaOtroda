88 * apple

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const sum = (a, b) => a + b;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

