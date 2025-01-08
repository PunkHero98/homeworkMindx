export default function bai10() {
    const text = prompt('Hãy nhập vào một chuỗi ký tự: ');
    return Swal.fire(`Dộ dài của \'${text}\' \n là : ${text.trim().length} ký tự`);
}
