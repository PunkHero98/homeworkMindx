
export default function bai3(){
    const num = prompt('Hãy số n: ');

    const parseNum = parseInt(num);
    let result = 0;
    for(let i = 1 ; i <= num ; i++){
        result += i ;
    }
    return Swal.fire(`Tổng của 1 dến ${num} là : ${result}`);
}