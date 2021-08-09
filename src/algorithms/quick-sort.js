function* quickSort(arr, start, end) {
    if (end > start) {
        var pivot = arr[start];
        var pivotIndex = start;
        
        for (let i = start + 1; i < end + 1; i++) {
            if (arr[i] <= pivot) {
                pivotIndex++;
                [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
                yield arr;
            }
        }
        
        [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
        yield arr;

        yield* quickSort(arr, start, pivotIndex - 1);
        yield* quickSort(arr, pivotIndex + 1, end);
    }
}

export default quickSort;