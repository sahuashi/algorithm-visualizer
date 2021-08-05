const NUM_ELEMENTS = 20;
const MAX_NUMBER = 250;

const randomizeArray = () => {
    var array = [];
    for (let i = 0; i < NUM_ELEMENTS; i++) {
        let number = Math.floor(Math.random() * MAX_NUMBER);
        array.push(number);
    }
    return array;
}

export default randomizeArray;