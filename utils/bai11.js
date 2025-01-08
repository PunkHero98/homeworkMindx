export default function bai11() {
    const text = prompt('Hãy nhập vào một chuỗi ký tự: ');
    const newText = text.toUpperCase();
    return Swal.fire(`${newText}`);
}
