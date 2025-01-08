export default function bai5(){
    const num = prompt('Hãy một số n: ');

    const parseNum = parseInt(num);
    if(parseNum % 2 == 0 ){
        return Swal.fire(`${num} là số chẵn`);
    }
    return Swal.fire(`${num} là số lẽ`);

}