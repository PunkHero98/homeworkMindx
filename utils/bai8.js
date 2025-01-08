export default function bai8() {

    const user = { name: "Nam", age: 30 };

    const { name, age } = user;
    return Swal.fire(`Name: ${name}, Age: ${age}`);
}
