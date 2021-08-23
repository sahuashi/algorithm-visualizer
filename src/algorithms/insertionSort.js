function* insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const v = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > v) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = v;
    yield arr;
  }
  return arr;
}

export default insertionSort;
