export default function bai7(){
    const text = prompt('Hãy vào một mảng số: ');
    const numbers = text.trim().split(' ').map(Number);
    
    const result = sum(...numbers)
    return Swal.fire(`Tổng các phần tử của mảng là: ${result}`);

}

function sum(...nums){
    return nums.reduce((result, num) => result + num, 0);
}