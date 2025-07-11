function binarySearch(arr, searchVal, offset = 0) {
    if (arr.length === 0) {
        return -1
    }
    let mid = Math.floor(arr.length / 2)
    if (searchVal === arr[mid]) {
        return offset + mid
    }
    else if (searchVal > arr[mid]) {
        return binarySearch(arr.slice(mid + 1), searchVal, offset + mid + 1)
    }
    else {
        return binarySearch(arr.slice(0, mid), searchVal, offset)
    }
}
const a = [1, 4, 5, 6]
const z = 5
console.log(binarySearch(a, z))
