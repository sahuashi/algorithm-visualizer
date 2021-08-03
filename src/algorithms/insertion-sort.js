const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let v = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = v;
    }
    return arr;
}

export default insertionSort;