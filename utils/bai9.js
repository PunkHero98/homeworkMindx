export default function bai9() {
    const people = [{ name: "An" }, { name: "Bình" }];

    const names = people.map(person => person.name).join(", ");

    return Swal.fire(`${names}`);
}
