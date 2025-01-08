
export default function bai1(){
    const item = prompt('Hãy nhập sản phẩm bạn muốn: ');
    const price = prompt(`Hãy nhập giá của ${item}:                                 (đơn vị nghìn đồng)`);

    return Swal.fire(`Sản phẩm: ${item.trim()} , Giá: ${price.trim()}000 VNĐ`);
}