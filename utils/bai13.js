export default function bai13() {

    const num = prompt('Hãy nhập một mảng: ');
    const numArray = num.trim().split(' ').map(Number);
    const max = Math.max(...numArray);
    

    return Swal.fire(`Số lớn nhất trong mảng [${numArray}] là:\n${max}`)
}
