const NUM_ELEMENTS = 20;
const MIN_NUMBER = 1;
const MAX_NUMBER = 255;

const randomizeArray = () => {
    var array = [];
    for (let i = 0; i < NUM_ELEMENTS; i++) {
        let number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
        array.push(number);
    }
    return array;
}

export default randomizeArray;