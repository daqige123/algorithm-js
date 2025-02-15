function quickSort(arr, left, right) {
    if (left <  right){
        let i = left;
        let j = right;
        let povit = arr[i];
        while (i < j) {
            while(i< j && arr[j] >= povit) j--;
            if (i < j) arr[i] = arr[j];
            while(i < j && arr[i] <= povit) i++;
            if (i < j) arr[j] = arr[i];
        }
            arr[i] = povit;
            quickSort(arr, 0, i - 1);
            quickSort(arr, j+1, right);
    } 
}
// let arr = [0, -1, 2, -2, 6,-1,9, 10,-4 ];
let arr = [0, -1, 2, -2, 10000, 0, -1, 0, 6,-1,9, 10,-4 ];
quickSort(arr, 0, arr.length - 1);
console.log(arr);