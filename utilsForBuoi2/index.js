function exc1() {
  Swal.fire({
    title: "Tính tổng mảng",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ; width:60%">
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                     <span style="font-size:20px ; margin-top: 5px">Nhập các số cách nhau bởi dấu phẩy</span>
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p>Bài 1: Viết hàm <b>sumArray(arr)</b> trả về tổng các phần tử trong mảng.</p>
                    <p><i>Input:</i> arr = [1, 2, 3, 4]</p>
                    <p><i>Output:</i> 10</p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Tính tổng",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      if (newInput.some(isNaN)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập số, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const sum = result.value.reduce((total, num) => total + num, 0);
      Swal.fire({
        title: "Kết quả",
        text: `Tổng các phần tử trong mảng là: ${sum}`,
      });
    }
  });
}

function exc2() {
  Swal.fire({
    title: "Đếm số lần xuất hiện của một giá trị trong một mảng",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column; align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng số:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập giá trị số muốn đếm:</span>
                     <input type="text" id="array-input-value" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 2.</strong> Viết hàm <span style="color:green">countOccurrences(arr, value)</span> đếm số lần xuất hiện của <span style="color:green">value</span> trong mảng arr</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green">arr = [1, 2, 2, 3, 2] , value = 2</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">3</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Đếm",
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      const inputVal = document
        .getElementById("array-input-value")
        .value.trim();
      if (!input || !inputVal) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      const valueInput = parseINT(inputVal);
      if (valueInput === null) return false;
      if (newInput.some(isNaN)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập số, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      let final = 0;
      newInput.forEach((f) => {
        if (f === valueInput) {
          final++;
          return;
        }
      });
      return final;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Kết quả",
        text: `Tổng các phần tử trong mảng là: ${result.value}`,
      });
    }
  });
}

function exc3() {
  Swal.fire({
    title: "Loại bỏ mảng trùng lặp.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng số:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 3.</strong> Viết hàm <span style="color:green">removeDuplicates(arr)</span> trả về mảng không có phần tử trùng lặp.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = [1, 2, 2, 3, 4, 4]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">[1, 2, 3, 4]</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Loại bỏ",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      if (newInput.some(isNaN)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập số, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const final = result.value.filter(
        (value, index, self) => self.indexOf(value) === index
      );
      Swal.fire({
        title: "Kết quả",
        text: `Mảng loại bỏ phần tử trùng là: \n${JSON.stringify(final)}`,
      });
    }
  });
}

function exc4() {
  Swal.fire({
    title: "Xử lý mảng 2 chiều.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng số:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 4.</strong> Viết hàm <span style="color:green">flattenArray(arr)</span> chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều).</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = [[1, 2], [3, 4]]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">[1, 2, 3, 4]</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Xử lý",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      if (newInput[0].some(isNaN) || newInput[1].some(isNaN)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập số, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const final = [...result.value[0], ...result.value[1]];
      Swal.fire({
        title: "Kết quả",
        text: `Mảng sau xử lý: \n${JSON.stringify(final)}`,
      });
    }
  });
}

function exc5() {
  Swal.fire({
    title: "Kiểm tra mảng đối xứng.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng số:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 5.</strong> Viết hàm <span style="color:green">isSymmetric(arr)</span> kiểm tra xem mảng có đối xứng hay không..</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = [1, 2, 3, 2, 1]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">true</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Kiểm tra",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      if (newInput.some(isNaN)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập số, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const mid = Math.floor(result.value.length / 2);
      const max = result.value.length - 1;
      let final = true;
      for (let n = 0; n < mid; n++) {
        if (result.value[n] !== result.value[max - n]) {
          final = false;
        }
      }
      console.log(final);
      Swal.fire({
        title: "Kết quả",
        text: final ? "Mảng đối xứng" : "Mảng không đối xứng",
      });
    }
  });
}

function exc6() {
  Swal.fire({
    title: "Tìm giá trị lớn thứ 2 trong mảng.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng số:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 4.</strong> Viết hàm <span style="color:green">findSecondLargest(arr)</span> trả về giá trị lớn thứ hai trong mảng..</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = [3, 1, 4, 2]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green"> 3</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Tìm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      if (newInput.length < 2) {
        Swal.showValidationMessage(
          "Vui lòng nhiều hơn một phần tử, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      if (newInput.some(isNaN)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập số, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const final = [...new Set(result.value)].sort((a, b) => b - a);
      const finalNum = final[1];
      Swal.fire({
        title: "Kết quả",
        text: `Số lớn thứ nhì trong mảng là: ${finalNum}`,
      });
    }
  });
}

function exc7() {
  Swal.fire({
    title: "Sắp xếp một mảng các Object theo giá tăng dần.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng Object:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 7.</strong> Viết hàm <span style="color:green">sortProductsByPrice(products)</span> sắp xếp danh sách sản phẩm theo giá tăng dần.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> products = [</span></p>
                    <p><span style="color:green">{ name: 'Product A', price: 30 },</span></p>
                    <p><span style="color:green">{ name: 'Product B', price: 20 },</span></p>
                    <p><span style="color:green">{ name: 'Product C', price: 50 }</span></p>
                    <p><span style="color:green">]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green"> products = [</span></p>
                    <p><span style="color:green">{ name: 'Product B', price: 20 },</span></p>
                    <p><span style="color:green">{ name: 'Product A', price: 30 },</span></p>
                    <p><span style="color:green">{ name: 'Product C', price: 50 }</span></p>
                    <p><span style="color:green">]</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Tìm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString = input.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (newInput.length < 2) {
        Swal.showValidationMessage(
          "Vui lòng nhiều hơn một phần tử, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      if (newInput.some((f) => typeof f !== "object" || f === null)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập Object, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const final = result.value.sort((a, b) => a.price - b.price);
      const string = renderObj(final);
      Swal.fire({
        title: "Kết quả",
        html: `<p>Mảng sau khi sắp xếp:</p>
                    ${string}`,
        customClass: {
          popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
        },
      });
    }
  });
}

function exc8() {
  Swal.fire({
    title: "Tìm giá trị lớn nhất trong mảng Object.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng Object:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 8.</strong> Viết hàm <span style="color:green">findMostExpensiveProduct(products)</span> trả về sản phẩm có giá lớn nhất.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> products = [</span></p>
                    <p><span style="color:green">{ name: 'Product A', price: 30 },</span></p>
                    <p><span style="color:green">{ name: 'Product B', price: 20 },</span></p>
                    <p><span style="color:green">{ name: 'Product C', price: 50 }</span></p>
                    <p><span style="color:green">]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green"> { name: 'Product A', price: 30 }</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Tìm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString = input.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (newInput.length < 2) {
        Swal.showValidationMessage(
          "Vui lòng nhiều hơn một phần tử, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      if (newInput.some((f) => typeof f !== "object" || f === null)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập Object, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const final = result.value.sort((a, b) => b.price - a.price);
      const finallll = final[0];
      Swal.fire({
        title: "Kết quả",
        html: `<p>Object với giá trị Price lớn nhất:</p>
                    <p>${JSON.stringify(finallll)}</p>`,
        customClass: {
          popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
        },
      });
    }
  });
}

function exc9() {
  Swal.fire({
    title: "Tạo Object dựa theo key.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng Object:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 9.</strong> Viết hàm <span style="color:green">groupByType(arr)</span> gom nhóm các phần tử trong mảng dựa theo loại (type).</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = [</span></p>
                    <p><span style="color:green">{ type: 'fruit', name: 'apple' },</span></p>
                    <p><span style="color:green">{ type: 'vegetable', name: 'carrot' },</span></p>
                    <p><span style="color:green">{ type: 'fruit', name: 'banana' }</span></p>
                    <p><span style="color:green">]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">{</span></p>
                    <p><span style="color:green">fruit: ['apple', 'banana'],</span></p>
                    <p><span style="color:green">vegetable: ['carrot']</span></p>
                    <p><span style="color:green">}</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Kết hợp",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString = input.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (newInput.length < 2) {
        Swal.showValidationMessage(
          "Vui lòng nhiều hơn một phần tử, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      if (newInput.some((f) => typeof f !== "object" || f === null)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập Object, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const grouped = {};

      result.value.forEach((f) => {
        if (!grouped[f.type]) {
          grouped[f.type] = [];
        }
        grouped[f.type].push(f.name);
      });
      const final = renderForExct9(grouped);
      Swal.fire({
        title: "Kết quả",
        html: `<p>Object sau khi đã xử lý:</p>${final}`,
        customClass: {
          popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
        },
      });
    }
  });
}

function exc10() {
  Swal.fire({
    title: "Kiểm tra mảng con.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column; align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng số arr1:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng số arr2:</span>
                     <input type="text" id="array-input-value" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 10.</strong> Viết hàm <span style="color:green">isSubset(arr1, arr2)</span> kiểm tra xem arr2 có phải là mảng con của arr1 hay không.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr1 = [1, 2, 3, 4] , arr2 = [2, 4]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">true</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Kiểm tra",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      const inputVal = document
        .getElementById("array-input-value")
        .value.trim();
      if (!input || !inputVal) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      const newInputVal = parseJSON(inputVal);
      if (newInputVal === null) return false;
      if (newInput.some(isNaN) || newInputVal.some(isNaN)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập số, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      return { arr1: newInput, arr2: newInputVal };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      //  const final = result.value.filter((value, index, self) => self.indexOf(value) === index);
      const { arr1, arr2 } = result.value;
      let final = true;
      if (arr2.length >= arr1.length) {
        final = false;
      }
      arr2.forEach((f) => {
        if (!arr1.find((item) => item === f)) final = false;
      });
      Swal.fire({
        title: "Kết quả",
        text: final
          ? "arr2 là mảng con của arr1"
          : "arr2 không phải là mảng con của arr1",
      });
    }
  });
}

function exc11() {
  Swal.fire({
    title: "Tìm key có giá trị lớn nhất trong Object.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập Object:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 11.</strong> Viết hàm <span style="color:green">findMaxKey(obj)</span> trả về key có giá trị số lớn nhất trong object.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> obj = { a: 10, b: 20, c: 15 }</p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green"> 'b'</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss",
    },
    showCancelButton: true,
    confirmButtonText: "Tìm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString = input.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (newInput.length < 2) {
        Swal.showValidationMessage(
          "Vui lòng nhiều hơn một phần tử, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      for (let key in newInput) {
        if (isNaN(newInput[key])) {
          Swal.showValidationMessage("Vui lòng chỉ nhập số cho key value!");
          return false;
        }
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let maxKey = "";
      let maxValue = -Infinity;
      for (let key in result.value) {
        if (result.value[key] > maxValue) {
          maxValue = result.value[key];
          maxKey = key;
        }
      }
      Swal.fire({
        title: "Kết quả",
        html: `<p>Key chứa giá trị lớn nhất là:</p>
                    <p>\"${maxKey}\"</p>`,
        customClass: {
          popup: "swalCustomCss",
        },
      });
    }
  });
}

function exc12() {
  Swal.fire({
    title: "Hợp 2 object.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập obj1:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập obj2:</span>
                     <input type="text" id="array-input-value" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 12.</strong> Viết hàm <span style="color:green">mergeObjectsSumValues(obj1, obj2)</span> hợp hai object, nếu key trùng nhau thì cộng giá trị.</p>
                    <p><i><span style="color:red">Input:</span></i>
                    <p><span style="color:green"> obj1 = { a: 10, b: 20 };</p>
                    <p><span style="color:green"> obj2 = { b: 30, c: 40 };</p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green"> { a: 10, b: 50, c: 40 }</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss",
    },
    showCancelButton: true,
    confirmButtonText: "Hợp",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      const inputVal = document
        .getElementById("array-input-value")
        .value.trim();
      if (!input || !inputVal) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString1 = input.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');
      const validString2 = inputVal
        .replace(/'/g, '"')
        .replace(/(\w+):/g, '"$1":');

      const newInput = parseJSON(validString1);
      if (newInput === null) return false;
      const newInputVal = parseJSON(validString2);
      if (newInputVal === null) return false;
      return { obj1: newInput, obj2: newInputVal };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { obj1, obj2 } = result.value;
      let final = { ...obj1 };
      for (let key in obj2) {
        if (final.hasOwnProperty(key)) {
          if (typeof final[key] == "string" && typeof obj2[key] == "number") {
            obj2[key] = `${obj2[key]}`;
          }
          if (typeof final[key] == "number" && typeof obj2[key] == "string") {
            final[key] = `${final[key]}`;
          }
          final[key] += obj2[key];
        } else {
          final[key] = obj2[key];
        }
      }
      Swal.fire({
        title: "Kết quả",
        html: `<p>Object sau khi đã xử lý:</p>
                    <p>${JSON.stringify(final)}</p>`,
        customClass: {
          popup: "swalCustomCss",
        },
      });
    }
  });
}

function exc13() {
  Swal.fire({
    title: "Điếm số lần xuất hiện mỗi phần tử trong mảng.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 13.</strong> Viết hàm <span style="color:green">countElements(arr)</span> trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng..</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = ['a', 'b', 'a', 'c', 'b', 'a']</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">{ a: 3, b: 2, c: 1 }</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Đếm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString = input.replace(/'/g, '"');
      const newInput = parseJSON(validString);
      if (newInput === null) return false;

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let final = {};
      result.value.forEach((f, index, array) => {
        const newArray = array.filter((item) => item === f);
        final[f] = newArray.length;
      });
      Swal.fire({
        title: "Kết quả",
        text: `${JSON.stringify(final)}`,
      });
    }
  });
}

function exc14() {
  Swal.fire({
    title: "Làm sạch object.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập object:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 14.</strong> Viết hàm <span style="color:green">cleanObject(obj)</span> xóa các key có giá trị là <span style="color:green">null</span> hoặc <span style="color:green">undefined</span>.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> obj = { a: 1, b: null, c: undefined, d: 4 }</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">{ a: 1, d: 4 }</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Làm sạch",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString = input
        .replace(/(\w+):/g, '"$1":')
        .replace(/undefined/g, "null");
      const newInput = parseJSON(validString);
      if (newInput === null) return false;

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let final = {};
      for (let key in result.value) {
        if (result.value[key] !== null) {
          final[key] = result.value[key];
        }
      }
      Swal.fire({
        title: "Kết quả",
        text: `${JSON.stringify(final)}`,
      });
    }
  });
}

function exc15() {
  Swal.fire({
    title: "Kiểm tra phần tử trùng lặp trong mảng.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 15.</strong> Viết hàm <span style="color:green">hasDuplicate(arr)</span> kiểm tra xem mảng có phần tử lặp lại hay không.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = [1, 2, 3, 4, 2]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">true</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Kiểm tra",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString = input.replace(/'/g, '"');
      const newInput = parseJSON(validString);
      if (newInput === null) return false;

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let newFinal = true;
      const max = result.value.length;
      const final = result.value.filter(
        (value, index, self) => self.indexOf(value) === index
      );
      if (max == final.length) newFinal = false;
      Swal.fire({
        title: "Kết quả",
        text: newFinal
          ? "Mảng có phần tử trùng lặp"
          : "Mảng không có phần tử trùng lặp",
      });
    }
  });
}

function exc16() {
  Swal.fire({
    title: "Tính tổng giá tị theo nhóm.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng Object:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 9.</strong> Viết hàm <span style="color:green">sumByGroup(arr, key)</span> tính tổng giá trị theo nhóm.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = [</span></p>
                    <p><span style="color:green">{ type: 'fruit', price: 10 },</span></p>
                    <p><span style="color:green">{ type: 'vegetable', price: 20 },</span></p>
                    <p><span style="color:green">{ type: 'fruit', price: 30 }</span></p>
                    <p><span style="color:green">]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">{</span></p>
                    <p><span style="color:green">fruit: 40,</span></p>
                    <p><span style="color:green">vegetable: 20</span></p>
                    <p><span style="color:green">}</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Tính",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng số!");
        return false;
      }
      const validString = input.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (newInput.length < 2) {
        Swal.showValidationMessage(
          "Vui lòng nhiều hơn một phần tử, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      if (newInput.some((f) => typeof f !== "object" || f === null)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập Object, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      newInput.forEach((f) => {
        if (typeof f.type !== "string") {
          Swal.showValidationMessage(
            "Giá trị thuộc tính type phải là kiểu chuỗi !"
          );
          return false;
        }
        if (typeof f.price !== "number") {
          Swal.showValidationMessage(
            "Giá trị thuộc tính type phải là kiểu số !"
          );
          return false;
        }
      });

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const grouped = {};
      const max = result.value.length - 1;
      result.value.forEach((f, index, self) => {
        if (!grouped[f.type]) {
          grouped[f.type] = 0;
        }
        grouped[f.type] += parseInt(f.price);
      });
      console.log(grouped);
      const final = renderForExct9(grouped);
      Swal.fire({
        title: "Kết quả",
        html: `<p>Object sau khi đã xử lý:</p>${final}`,
        customClass: {
          popup: "swalCustomCss",
        },
      });
    }
  });
}

function exc17() {
  Swal.fire({
    title: "Lấy giá trị duy nhất của 2 mảng",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column; align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng arr1:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng arr2:</span>
                     <input type="text" id="array-input-value" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 2.</strong> Viết hàm <span style="color:green">uniqueValues(arr1, arr2)</span> trả về mảng các giá trị duy nhất từ hai mảng.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr1 = [1, 2, 3], arr2 = [3, 4, 5]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">[1, 2, 3, 4, 5]</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Thực thi",
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      const inputVal = document
        .getElementById("array-input-value")
        .value.trim();
      if (!input || !inputVal) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      const valueInput = parseJSON(inputVal);
      if (valueInput === null) return false;

      return { arr1: newInput, arr2: valueInput };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { arr1, arr2 } = result.value;
      const combineArr = [...arr1, ...arr2];
      const final = combineArr.filter(
        (item, index, self) => self.indexOf(item) === index
      );
      Swal.fire({
        title: "Kết quả",
        text: `Mảng sau khi xử lý: ${JSON.stringify(final)}`,
      });
    }
  });
}

function exc18() {
  Swal.fire({
    title: "So sánh hoán vị giữa 2 mảng",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column; align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng arr1:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng arr2:</span>
                     <input type="text" id="array-input-value" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 18.</strong> Viết hàm <span style="color:green">isPermutation(arr1, arr2)</span> kiểm tra xem hai mảng có phải là hoán vị của nhau không.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr1 = [1, 2, 3], arr2 = [3, 2, 1]</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">true</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "So sánh",
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      const inputVal = document
        .getElementById("array-input-value")
        .value.trim();
      if (!input || !inputVal) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }
      const newInput = parseJSON(input);
      if (newInput === null) return false;
      const valueInput = parseJSON(inputVal);
      if (valueInput === null) return false;

      return { arr1: newInput, arr2: valueInput };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { arr1, arr2 } = result.value;
      let final = true;
      const max = arr1.length;
      if (max !== arr2.length) {
        final = false;
      } else {
        const newArr = arr1.map((f, index, self) => self[max - index - 1]);
        newArr.forEach((f, index) => {
          if (f !== arr2[index]) {
            final = false;
            return;
          }
        });
      }
      Swal.fire({
        title: "Kết quả",
        text: final
          ? "2 mảng arr1 và arr2 là hoán vị của nhau"
          : "2 mảng arr1 và arr2 không phải là hoán vị của nhau",
      });
    }
  });
}

function exc19() {
  Swal.fire({
    title: "Tìm chuỗi có độ dài lơn nhất.",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                     <span style="font-size:20px ; margin-top: 5px;">Nhập mảng:</span>
                     <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                </div>
                <div style="margin-left: 10px; text-align: left;">
                    <p><strong>Bài 19.</strong> Viết hàm <span style="color:green">findLongestString(arr)</span> trả về chuỗi có độ dài lớn nhất trong mảng.</p>
                    <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = ['abc', 'abcd', 'a']</span></p>
                    <p><i><span style="color:red">Output:</span></i> <span style="color:green">'abcd'</span></p>
                </div>
            </div>
        `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Tìm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng chuỗi!");
        return false;
      }
      const validString = input.replace(/'/g, '"');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (newInput.some((f) => typeof f !== "string")) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập chuỗi, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let final = "";
      result.value.forEach((f) => {
        if (f.length > final.length) {
          final = f;
        }
      });
      Swal.fire({
        title: "Kết quả",
        text: `Mảng sau xử lý: \n${JSON.stringify(final)}`,
      });
    }
  });
}

function exc20() {
  Swal.fire({
    title: "Lấy giá trị chung giữa 2 mảng.",
    html: `
              <div style="display: flex; align-items: center;">
                  <div style="display: flex; flex-direction: column; align-items: start ; width:60%">
                       <span style="font-size:20px ; margin-top: 5px;">Nhập mảng arr1:</span>
                       <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                       <span style="font-size:20px ; margin-top: 5px;">Nhập mảng arr2:</span>
                       <input type="text" id="array-input-value" class="swal2-input" style="font-size:20px">
                  </div>
                  <div style="margin-left: 10px; text-align: left;">
                      <p><strong>Bài 20.</strong> Viết hàm <span style="color:green">intersection(arr1, arr2)</span> trả về mảng chứa các giá trị chung giữa hai mảng.</p>
                      <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr1 = [1, 2, 3], arr2 = [2, 3, 4]</span></p>
                      <p><i><span style="color:red">Output:</span></i> <span style="color:green">[2, 3]</span></p>
                  </div>
              </div>
          `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Xử lý",
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      const inputVal = document
        .getElementById("array-input-value")
        .value.trim();
      if (!input || !inputVal) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }
      const validString = input.replace(/'/g, '"');
      const validStringval = inputVal.replace(/'/g, '"');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      const valueInput = parseJSON(validStringval);
      if (valueInput === null) return false;

      return { arr1: newInput, arr2: valueInput };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { arr1, arr2 } = result.value;
      let final = [];
      arr1.forEach((f) => {
        if (arr2.includes(f)) {
          final.push(f);
        }
      });
      Swal.fire({
        title: "Kết quả",
        text: `Mảng sau xử lý: ${JSON.stringify(final)}`,
      });
    }
  });
}

function exc21() {
  Swal.fire({
    title: "Loại bỏ phần tử nhỏ hơn minValue.",
    html: `
              <div style="display: flex; align-items: center;">
                  <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                       <span style="font-size:20px ; margin-top: 5px;">Nhập mảng:</span>
                       <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                       <span style="font-size:20px ; margin-top: 5px;">Nhập <span style="color:green">minValue</span>:</span>
                       <input type="text" id="array-input-val" class="swal2-input" style="font-size:20px">
                  </div>
                  <div style="margin-left: 10px; text-align: left;">
                      <p><strong>Bài 19.</strong> Viết hàm <span style="color:green">filterByMinValue(arr, minValue)</span> để xóa tất cả các phần tử có giá trị nhỏ hơn <span style="color:green">minValue</span>.</p>
                      <p><i><span style="color:red">Input:</span></i> <span style="color:green"> arr = [5, 10, 15, 20]  , minValue = 12</span></p>
                      <p><i><span style="color:red">Output:</span></i> <span style="color:green">[15,20]</span></p>
                  </div>
              </div>
          `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Loại bỏ",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      const inputVal = document.getElementById("array-input-val").value.trim();
      if (!input || !inputVal) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }

      const newInput = parseJSON(input);
      if (newInput === null) return false;
      const newInputVal = parseINT(inputVal);
      if (newInputVal === null) return false;
      if (newInput.some(isNaN) || isNaN(newInputVal)) {
        Swal.showValidationMessage("Vui lòng chỉ nhập số!");
        return false;
      }

      return { arr: newInput, minValue: newInputVal };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { arr, minValue } = result.value;
      const final = arr.filter((f) => f > minValue);
      Swal.fire({
        title: "Kết quả",
        text: `Mảng sau xử lý: \n${JSON.stringify(final)}`,
      });
    }
  });
}

function exc22() {
  Swal.fire({
    title: "Tìm key value có độ dài lớn nhất.",
    html: `
              <div style="display: flex; align-items: center;">
                  <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                       <span style="font-size:20px ; margin-top: 5px;">Nhập object:</span>
                       <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                  </div>
                  <div style="margin-left: 10px; text-align: left;">
                      <p><strong>Bài 14.</strong> Viết hàm <span style="color:green">findLongestValue(obj)</span> để tìm giá trị có độ dài lớn nhất trong một object.</p>
                      <p><i><span style="color:red">Input:</span></i> <span style="color:green"> obj = { a: 'cat', b: 'elephant', c: 'dog' }</span></p>
                      <p><i><span style="color:red">Output:</span></i> <span style="color:green">'elephant'</span></p>
                  </div>
              </div>
          `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Tìm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một Object!");
        return false;
      }
      const validString = input.replace(/(\w+):/g, '"$1":').replace(/'/g, '"');
      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      for (let key in newInput) {
        if (typeof newInput[key] !== "string") {
          Swal.showValidationMessage("Vui lòng chỉ nhập chuỗi!");
          return false;
        }
      }
      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let final = "";
      for (let key in result.value) {
        if (result.value[key].length > final.length) {
          final = result.value[key];
        }
      }
      Swal.fire({
        title: "Kết quả",
        html: `<p>Key có giá trị lớn nhất:</p>
                <p>${JSON.stringify(final)}</p>`,
      });
    }
  });
}

function exc23() {
  Swal.fire({
    title: "Gom chuỗi theo chữ cái đầu tiên.",
    html: `
              <div style="display: flex; align-items: center;">
                  <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                       <span style="font-size:20px ; margin-top: 5px;">Nhập mảng chuỗi:</span>
                       <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                  </div>
                  <div style="margin-left: 10px; text-align: left;">
                      <p><strong>Bài 9.</strong> Viết hàm <span style="color:green">groupByFirstLetter(arr)</span> để gom nhóm các chuỗi theo chữ cái đầu tiên.</p>
                      <p><i><span style="color:red">Input:</span></i> <span style="color:green">arr = ['apple', 'banana', 'avocado', 'blueberry']</span></p>
                      <p><i><span style="color:red">Output:</span></i> <span style="color:green">{</span></p>
                      <p><span style="color:green"> a: ['apple', 'avocado'],</span></p>
                      <p><span style="color:green"> b: ['banana', 'blueberry']</span></p>
                      <p><span style="color:green">}</span></p>
                  </div>
              </div>
          `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Xử lý",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng chuỗi!");
        return false;
      }
      const validString = input.replace(/'/g, '"').replace(/(\w+):/g, '"$1":');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;

      if (newInput.some((f) => typeof f !== "string")) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập chuỗi, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const grouped = {};

      result.value.forEach((f, index, self) => {
        if (!grouped[f[0]]) {
          grouped[f[0]] = [];
        }
        grouped[f[0]] = self.filter((item) => item[0] === f[0]);
      });
      const final = renderForExct23(grouped);
      Swal.fire({
        title: "Kết quả",
        html: `<p>Mảng sau khi đã xử lý:</p>${final}`,
        customClass: {
          popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
        },
      });
    }
  });
}

function exc24() {
  Swal.fire({
    title: "Lây danh sách người có tuổi lớn hơn tuổi chỉ định.",
    html: `
                <div style="display: flex; align-items: center;">
                    <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                         <span style="font-size:20px ; margin-top: 5px;">Nhập mảng Object:</span>
                         <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                         <span style="font-size:20px ; margin-top: 5px;">Nhập tuổi chỉ định:</span>
                         <input type="text" id="array-input-val" class="swal2-input" style="font-size:20px">
                    </div>
                    <div style="margin-left: 10px; text-align: left;">
                        <p><strong>Bài 24.</strong> Viết hàm <span style="color:green">getAdults(people)</span> để trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.</p>
                        <p><i><span style="color:red">Input:</span></i> <span style="color:green">people = [</span></p>
                        <p><span style="color:green"> { name: 'Alice', age: 17 },</span></p>
                        <p><span style="color:green"> { name: 'Bob', age: 20 },</span></p>
                        <p><span style="color:green"> { name: 'Charlie', age: 16 },</span></p>
                        <p><span style="color:green"> { name: 'David', age: 22 }</span></p>
                        <p><span style="color:green">]</span></p>
                        <p><i><span style="color:red">Output:</span></i></p>
                        <p><span style="color:green">[{ name: 'Bob', age: 20 }, { name: 'David', age: 22 }]</span></p>
                    </div>
                </div>
            `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Xử lý",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      const inputVal = document.getElementById("array-input-val").value.trim();
      if (!input || !inputVal) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }
      const validString = input.replace(/(\w+):/g, '"$1":').replace(/'/g, '"');

      console.log(validString);
      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      const newInputVal = parseINT(inputVal);
      if (newInputVal === null) return false;
      if (isNaN(newInputVal)) {
        Swal.showValidationMessage("Vui lòng chỉ nhập số!");
        return false;
      }
      if (newInput.some((f) => typeof f !== "object" || f === null)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập Object, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return { arr: newInput, age: newInputVal };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { arr, age } = result.value;
      const final = arr.filter((f) => f.age >= age);
      Swal.fire({
        title: "Kết quả",
        html: `<p>Mảng sau khi đã xử lý:</p>
                <p>${renderObj(final)}</p>`,
      });
    }
  });
}

function exc25() {
  Swal.fire({
    title: "Chuyển đổi Object sang Array.",
    html: `
              <div style="display: flex; align-items: center;">
                  <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                       <span style="font-size:20px ; margin-top: 5px;">Nhập object:</span>
                       <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                  </div>
                  <div style="margin-left: 10px; text-align: left;">
                      <p><strong>Bài 25.</strong> Viết hàm <span style="color:green">convertToArray(obj)</span> để chuyển đổi một object thành mảng các cặp <span style="color: green">[key, value]</span>.</p>
                      <p><i><span style="color:red">Input:</span></i> <span style="color:green"> obj = { a: 1, b: 2, c: 3 }</span></p>
                      <p><i><span style="color:red">Output:</span></i> <span style="color:green">{[['a', 1], ['b', 2], ['c', 3]]</span></p>
                  </div>
              </div>
          `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Chuyển đổi",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một Object!");
        return false;
      }
      const validString = input
        .replace(/(\w+):/g, '"$1":')
        .replace(/undefined/g, "null");
      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (typeof newInput !== "object" || newInput === null) {
        Swal.showValidationMessage("Vui lòng chỉ nhập Object!");
        return false;
      }
      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let final = [];
      for (let key in result.value) {
        final.push([key, result.value[key]]);
      }
      Swal.fire({
        title: "Kết quả",
        html: `<p>Mảng sau chuyển đổi:</p> <p>${JSON.stringify(final)}</p>`,
      });
    }
  });
}

function exc26() {
  Swal.fire({
    title: "Sắp xếp mảng chuỗi theo độ dài tăng dần.",
    html: `
                <div style="display: flex; align-items: center;">
                    <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                         <span style="font-size:20px ; margin-top: 5px;">Nhập mảng chuỗi:</span>
                         <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                    </div>
                    <div style="margin-left: 10px; text-align: left;">
                        <p><strong>Bài 26.</strong> Viết hàm <span style="color:green">sortStringsByLength(arr)</span> để sắp xếp mảng chuỗi theo độ dài tăng dần.</p>
                        <p><i><span style="color:red">Input:</span></i> <span style="color:green">arr = ['a', 'ccc', 'bb']</span></p>
                        <p><i><span style="color:red">Output:</span></i> <span style="color:green">['a', 'bb', 'ccc']</span></p>
                    </div>
                </div>
            `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Sắp xếp",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng nhập một mảng chuỗi!");
        return false;
      }
      const validString = input.replace(/'/g, '"');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;

      if (newInput.some((f) => typeof f !== "string")) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập chuỗi, cách nhau bằng dấu phẩy!"
        );
        return false;
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const final = result.value.sort((a, b) => a.length - b.length);
      Swal.fire({
        title: "Kết quả",
        html: `<p>Mảng sau khi đã xử lý:</p>${JSON.stringify(final)}`,
        customClass: {
          popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
        },
      });
    }
  });
}

function exc27() {
  Swal.fire({
    title: "Tính tổng giá trị là số của một key.",
    html: `
                  <div style="display: flex; align-items: center;">
                      <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                           <span style="font-size:20px ; margin-top: 5px;">Nhập mảng Object:</span>
                           <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                      </div>
                      <div style="margin-left: 10px; text-align: left;">
                          <p><strong>Bài 27.</strong> Viết hàm <span style="color:green">sumByKey(arr, key)</span> để tính tổng giá trị là số của một key được chỉ định trong danh sách object.</p>
                          <p><i><span style="color:red">Input:</span></i> <span style="color:green">arr = [</span></p>
                          <p><span style="color:green"> { type: 'fruit', price: 10 },</span></p>
                          <p><span style="color:green"> { type: 'vegetable', price: 20 },</span></p>
                          <p><span style="color:green"> { type: 'fruit', price: 30 }</span></p>
                          <p><span style="color:green"> ]</span></p>
                          <p><span style="color:green">Key = 'price'.</span></p>
                          <p><i><span style="color:red">Output:</span></i> <span style="color: green">60</span></p>
                      </div>
                  </div>
              `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Xử lý",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }
      const validString = input.replace(/(\w+):/g, '"$1":').replace(/'/g, '"');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (newInput.some((f) => typeof f !== "object" || f === null)) {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập Object, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      newInput.forEach((f) => {
        if (typeof f.price !== "number") {
          Swal.showValidationMessage("Vui lòng chỉ nhập số!");
          return false;
        }
      });

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let final = 0;
      result.value.forEach((f) => {
        final += f.price;
      });
      Swal.fire({
        title: "Kết quả",
        html: `<p>Giá trị của key 'price' bằng:</p>
                  <p>${final}</p>`,
      });
    }
  });
}

function exc28() {
  Swal.fire({
    title: "Đếm số từ trong một chuỗi.",
    html: `
                    <div style="display: flex; align-items: center;">
                        <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                             <span style="font-size:20px ; margin-top: 5px;">Nhập chuỗi:</span>
                             <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                        </div>
                        <div style="margin-left: 10px; text-align: left;">
                            <p><strong>Bài 27.</strong> Viết hàm <span style="color:green">countWords(str)</span> để đếm số từ trong một chuỗi.</p>
                            <p><i><span style="color:red">Input:</span></i> <span style="color:green">str = "Hello world! Welcome to JavaScript"</span></p>
                            <p><i><span style="color:red">Output:</span></i> <span style="color: green">5</span></p>
                        </div>
                    </div>
                `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Đếm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }
      return input;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const words = result.value.split(/\s+/);
      Swal.fire({
        title: "Kết quả",
        html: `<p>Số từ trong chuỗi là:</p>
                    <p>${words.length}</p>`,
      });
    }
  });
}

function exc29() {
  Swal.fire({
    title: "Tìm key có giá trị số nhỏ nhất trong object.",
    html: `
                    <div style="display: flex; align-items: center;">
                        <div style="display: flex; flex-direction: column ;align-items: start ; width:60%">
                             <span style="font-size:20px ; margin-top: 5px;">Nhập Object:</span>
                             <input type="text" id="array-input" class="swal2-input" style="font-size:20px">
                        </div>
                        <div style="margin-left: 10px; text-align: left;">
                            <p><strong>Bài 27.</strong> Viết hàm <span style="color:green">findMinKey(obj)</span> để tìm key có giá trị số nhỏ nhất trong object.</p>
                            <p><i><span style="color:red">Input:</span></i> <span style="color:green">obj = { a: 100, b: 20, c: 50 }</span></p>
                            <p><i><span style="color:red">Output:</span></i> <span style="color: green">'b'</span></p>
                        </div>
                    </div>
                `,
    customClass: {
      popup: "swalCustomCss", // Thêm lớp CSS tùy chỉnh
    },
    showCancelButton: true,
    confirmButtonText: "Tìm",
    // allowOutsideClick: false,
    preConfirm: () => {
      const input = document.getElementById("array-input").value.trim();
      if (!input) {
        Swal.showValidationMessage("Vui lòng không để trống!");
        return false;
      }
      const validString = input.replace(/(\w+):/g, '"$1":').replace(/'/g, '"');

      const newInput = parseJSON(validString);
      if (newInput === null) return false;
      if (typeof newInput !== "object") {
        Swal.showValidationMessage(
          "Vui lòng chỉ nhập Object, cách nhau bằng dấu phẩy!"
        );
        return false;
      }
      for (let key in newInput) {
        if (typeof newInput[key] !== "number") {
          Swal.showValidationMessage("Vui lòng chỉ nhập số cho keyValue!");
          return false;
        }
      }

      return newInput;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let minKey = null;
      let minValue = Infinity;
      for (const key in result.value) {
        if (result.value.hasOwnProperty(key)) {
          if (result.value[key] < minValue) {
            minValue = result.value[key];
            minKey = key;
          }
        }
      }
      Swal.fire({
        title: "Kết quả",
        html: `<p>Giá trị của key 'price' bằng:</p><p>\'${minKey}\'</p>`,
      });
    }
  });
}
function parseINT(input) {
  try {
    const newInput = parseInt(input);

    return newInput;
  } catch (error) {
    Swal.showValidationMessage("Số không hợp lệ");
    return null;
  }
}

function parseJSON(input) {
  try {
    const newInput = JSON.parse(input);

    return newInput;
  } catch (error) {
    Swal.showValidationMessage("Chuỗi không hợp lệ");
    return null;
  }
}
function renderObj(arrObj) {
  const max = arrObj.length - 1;
  let string = arrObj
    .map((f, index) => {
      if (index === 0) {
        return `<p>[  ${JSON.stringify(f)}</p>`;
      }
      if (index === max) {
        return `<p>${JSON.stringify(f)}  ]</p>`;
      }
      return `<p>${JSON.stringify(f)}</p>`;
    })
    .join("");
  return string;
}
function renderForExct9(objArray) {
  let result = "";
  for (let key in objArray) {
    result += `<p>\"${key}\": \"${objArray[key]}\",</p>`;
  }

  return insertCharacters(result, "{  ", 3, "  }", -4);
}
function renderForExct23(objArray) {
  let result = "";
  for (let key in objArray) {
    result += `<p>${key}: ${JSON.stringify(objArray[key])},</p>`;
  }
  return insertCharacters(result, "{  ", 3, "  }", -4);
}

function insertCharacters(str, char1, pos1, char2, pos2) {
  let part1 = str.slice(0, pos1);
  let part2 = str.slice(pos1);
  str = part1 + char1 + part2;
  let newPos2 = str.length + pos2;
  part1 = str.slice(0, newPos2);
  part2 = str.slice(newPos2);
  str = part1 + char2 + part2;

  return str;
}
export {
  exc1,
  exc2,
  exc3,
  exc4,
  exc5,
  exc6,
  exc7,
  exc8,
  exc9,
  exc10,
  exc11,
  exc12,
  exc13,
  exc14,
  exc15,
  exc16,
  exc17,
  exc18,
  exc19,
  exc20,
  exc21,
  exc22,
  exc23,
  exc24,
  exc25,
  exc26,
  exc27,
  exc28,
  exc29,
};
