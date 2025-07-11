// a forced approch to sort an array with recursion, its not good for time complexity but great to practice nested recusion
function sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let temp = arr.pop();
    sort(arr);
    insert(arr, temp);
    return arr;
}

function insert(arr, temp) {
    if (arr[arr.length - 1] <= temp || arr.length == 0) {
        arr.push(temp)
        return
    }
    let temp2 = arr.pop()
    insert(arr, temp)
    arr.push(temp2)
}
const arr = [2,3,7,6,4,5]
console.log(sort(arr))