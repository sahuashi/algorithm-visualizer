const randomizeArray = () => {
    var array = [];
    for (let i = 0; i < 25; i++) {
        let number = Math.floor(Math.random() * 250);
        array.push(number);
    }
    return array;
}

export default randomizeArray;