let arr = [1, "num", 4, 6, 7, 8, 9]
let result = undefined

for (let i = 0; i < 6; i = i+1) {
    if (typeof(arr[i]) === typeof(arr[i+1])) {
        result = true
    } else if (typeof(arr[i]) !== typeof(arr[i+1])){
        result = false
        break;
    }
}

console.log(result)