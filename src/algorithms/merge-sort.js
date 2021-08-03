const mergeSort = (arr) => {
    if (arr.length > 1) {
        var A = [], B = [];
        var midpoint = Math.floor(arr.length / 2);

        for (let i = 0; i < midpoint; i++) {
            A.push(arr[i]);
        }

        for (let i = midpoint; i < arr.length; i++) {
            B.push(arr[i]);
        }

        mergeSort(A);
        mergeSort(B);
        merge(A, B, arr);
    }
    return arr;
}

const merge = (A, B, arr) => {
    let i = 0, j = 0, k = 0;
    while (i < A.length && j < B.length) {
        if (A[i] <= B[j]) {
            arr[k] = A[i];
            i++;
        }
        else {
            arr[k] = B[j];
            j++;
        }
        k++;
    }

    if (i === A.length) {
        for (let x = j; x < B.length; x++) {
            arr[k] = B[x];
            k++;
        }
    }
    else {
        for (let x = i; x < A.length; x++) {
            arr[k] = A[x];
            k++;
        }
    }
}

export default mergeSort;