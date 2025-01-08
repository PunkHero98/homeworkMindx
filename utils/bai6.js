export default function bai6(){
    const text = prompt('Hãy vào một mảng: ');
    let textArray = text.trim().split(' ');
    return Swal.fire(`Phần tử đầu tiên của mảng là \'${textArray[0]}\'`);

}