function insertNumberToArray() {
    let x = Number(prompt("nhập số nguyên x: "));
    let index = Number(prompt("nhập index: "));
    let arr = [];
    let n = Number(prompt("Phần tử trong mảng: "));

    function insertNumberToArray(n) {
        for(let i = 0; i < n; i++) {
            arr[i] = Number(prompt('Nhập giá trị tại vị trí' + i + ": "));
        }
        if (arr[index] < 0 || arr[index] > arr.length) {
            return arr;
        } else {
            let newArr = new Array(arr.length + 1);
            for (let i = 0; i < newArr.length; i++) {
                if (i < index) {
                    newArr[i] = arr[i];
                } else if (i === index) {
                    newArr[i] = x;
                } else {
                    newArr[i] = arr[i - 1];
                }
            }
            return newArr;
        }
    }

    document.write(insertNumberToArray(n));
}