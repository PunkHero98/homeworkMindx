export default function bai12() {

    const num = prompt('Hãy nhập số tiền mong muốn: ');

    const parseNum = parseInt(num);
    const result = parseNum.toLocaleString('vi-VN') + ' VNĐ';

    return Swal.fire(`${result}`)
}
