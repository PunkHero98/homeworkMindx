export default function bai14() {

    const num = prompt('Hãy nhập một số n: ');

    const parseNum = parseInt(num);
    if (parseNum <= 1) {
        return Swal.fire(`${parseNum} không phải là số nguyên tố`);
    }
    for (let i = 2; i <= Math.sqrt(parseNum); i++) {
        if (parseNum % i === 0) {
            return Swal.fire(`${parseNum} không phải là số nguyên tố`);
        }
    }
    return Swal.fire(`${parseNum} là số nguyên tố`);

}
