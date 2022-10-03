function sumOfListPrime() {
    let num = Number(prompt("nhập số nguyên x: "))
    let sum = 0;
    let flag = 1;

    function sumOfListPrime(num) {
        for (let j = 0; j <= num; j++) {
            if (j < 2) {
                continue;
            } else {
                for (let i = 2; i <= Math.sqrt(j); i++) {
                    if (j % i === 0) {
                        flag += 1;
                        break;
                    }
                }
            }
            if (flag === 1) {
                sum = sum + j;
                flag = 1;

            } else {
                flag = 1;
            }
        }
        return sum;
    }

    document.write("Tổng số nguyên tố đến x là: " + sumOfListPrime(num));
}