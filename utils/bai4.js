export default function bai4(){
    const num = prompt('Hãy số n: ');

    const parseNum = parseInt(num);
    let result = Math.pow(num , 2)
    return Swal.fire(`Bình phương của ${num} là : ${result}`);
}