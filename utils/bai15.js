export default function bai15() {

    const text = prompt('Hãy nhập một ký tự: ');
    const num = prompt('Hãy nhập số lần muốn lặp:');
    
    let result = "";
    for(let i = 0; i< parseInt(num) ; i++){
        result = result + text + ' ';
    }
    return Swal.fire(`${result.trim()}`);

}
