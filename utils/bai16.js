export default function bai16() {

    const text = prompt('Hãy nhập một mảng số: ');
    const numArray = text.trim().split(' ').map( f =>{
        if(parseInt(f) % 2 !== 0){
            return parseInt(f);
        }
    });
    return Swal.fire(`${numArray}`);

}
