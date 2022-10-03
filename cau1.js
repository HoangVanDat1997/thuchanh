function findAvg() {
    arr = [123, 22, 234, 334, 11, 44, 33];
    avg = 0;
    tong = 0;
    for (let i = 0; i < arr.length; i++) {
        tong += arr[i];
    }
    avg = tong / arr.length;
}