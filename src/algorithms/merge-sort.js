function* mergeSort(arr, start, end) {
    if (end > start) {
        var midpoint = start + Math.floor((end - start + 1) / 2) - 1;
        yield* mergeSort(arr, start, midpoint);
        yield* mergeSort(arr, midpoint + 1, end);
        yield* merge(arr, start, midpoint, end);
    }
}

function* merge(arr, start, midpoint, end) {
    var merged = [];
    var left = start;
    var right = midpoint + 1;

    while (left <= midpoint && right <= end) {
        if (arr[left] < arr[right]) {
            merged.push(arr[left]);
            left++;
        }
        else {
            merged.push(arr[right]);
            right++;
        }
    }

    while (left <= midpoint) {
        merged.push(arr[left]);
        left++;
    }

    while (right <= end) {
        merged.push(arr[right]);
        right++;
    }

    for (let i = 0; i < merged.length; i++) {
        arr[start + i] = merged[i];
    }

    yield arr;
}

export default mergeSort;