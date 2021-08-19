const MIN_NUMBER = 1;
const MAX_NUMBER = 255;

const randomizeArray = (size) => {
    var array = [];
    for (let i = 0; i < size; i++) {
        let number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
        array.push(number);
    }
    return array;
}

export default randomizeArray;