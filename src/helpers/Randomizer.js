const MIN_NUMBER = 1;
const MAX_NUMBER = 255;

const randomizeArray = (size) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
    array.push(number);
  }
  return array;
};

export default randomizeArray;
