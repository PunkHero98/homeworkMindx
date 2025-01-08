import bai1 from "./utils/bai1.js";
import bai2 from "./utils/bai2.js";
import bai3 from "./utils/bai3.js";
import bai4 from "./utils/bai4.js";
import bai5 from "./utils/bai5.js";
import bai6 from "./utils/bai6.js";
import bai7 from "./utils/bai7.js";
import bai8 from "./utils/bai8.js";
import bai9 from "./utils/bai9.js";
import bai10 from "./utils/bai10.js";
import bai11 from "./utils/bai11.js";
import bai12 from "./utils/bai12.js";
import bai13 from "./utils/bai13.js";
import bai14 from "./utils/bai14.js";
import bai15 from "./utils/bai15.js";
import bai16 from "./utils/bai16.js";
// import bai17 from "./utils/bai17.js";
// import bai18 from "./utils/bai18.js";
// import bai19 from "./utils/bai19.js";
// import bai20 from "./utils/bai20.js";
// import bai21 from "./utils/bai21.js";
// import bai22 from "./utils/bai22.js";
// import bai23 from "./utils/bai23.js";
// import bai24 from "./utils/bai24.js";
// import bai25 from "./utils/bai25.js";
// import bai26 from "./utils/bai26.js";
// import bai27 from "./utils/bai27.js";
// import bai28 from "./utils/bai28.js";
// import bai29 from "./utils/bai29.js";
// import bai30 from "./utils/bai30.js";

import { exc1 , exc2 , exc3 ,exc4 , exc5 , exc6 , exc7 , exc8 , exc9 , exc10 , exc11 , exc12 , exc13 , exc14 , exc15 ,exc16 ,exc17 , exc18} from "./utilsForBuoi2/index.js";

// document.querySelector('button.bai1').addEventListener('click' , ()=>{
//     bai1();
// })
document.querySelector('.toggle_buoi_1').addEventListener('click' , ()=>{
    hienBuoi1();
});
document.querySelector('.toggle_buoi_2').addEventListener('click' , ()=>{
    hienBuoi2();
});

// Định nghĩa hàm handleBuoi1 bên ngoài
function handelBuoi1(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        const name = {
            'Bai 1': () => bai1(),
            'Bai 2': () => bai2(),
            'Bai 3': () => bai3(),
            'Bai 4': () => bai4(),
            'Bai 5': () => bai5(),
            'Bai 6': () => bai6(),
            'Bai 7': () => bai7(),
            'Bai 8': () => bai8(),
            'Bai 9': () => bai9(),
            'Bai 10': () => bai10(),
            'Bai 11': () => bai11(),
            'Bai 12': () => bai12(),
            'Bai 13': () => bai13(),
            'Bai 14': () => bai14(),
            'Bai 15': () => bai15(),
            'Bai 16': () => bai16(),
            'Bai 17': () => bai17(),
            'Bai 18': () => bai18(),
            'Bai 19': () => bai19(),
            'Bai 20': () => bai20(),
            'Bai 21': () => bai21(),
            'Bai 22': () => bai22(),
            'Bai 23': () => bai23(),
            'Bai 24': () => bai24(),
            'Bai 25': () => bai25(),
            'Bai 26': () => bai26(),
            'Bai 27': () => bai27(),
            'Bai 28': () => bai28(),
            'Bai 29': () => bai29(),
            'Bai 30': () => bai30(),
        };
        name[event.target.innerHTML]?.();
    }
}

function handelBuoi2(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        const name = {
            'Bai 1': () =>exc1(),
            'Bai 2': () =>exc2(),
            'Bai 3': () =>exc3(),
            'Bai 4': () =>exc4(),
            'Bai 5': () =>exc5(),
            'Bai 6': () =>exc6(),
            'Bai 7': () =>exc7(),
            'Bai 8': () =>exc8(),
            'Bai 9': () =>exc9(),
            'Bai 10': () => exc10(),
            'Bai 11': () => exc11(),
            'Bai 12': () => exc12(),
            'Bai 13': () => exc13(),
            'Bai 14': () => exc14(),
            'Bai 15': () => exc15(),
            'Bai 16': () => exc16(),
            'Bai 17': () => exc17(),
            'Bai 18': () => exc18(),
            'Bai 19': () => exc19(),
            'Bai 20': () => exc20(),
            'Bai 21': () => exc21(),
            'Bai 22': () => exc22(),
            'Bai 23': () => exc23(),
            'Bai 24': () => exc24(),
            'Bai 25': () => exc25(),
            'Bai 26': () => exc26(),
            'Bai 27': () => exc27(),
            'Bai 28': () => exc28(),
            'Bai 29': () => exc29(),
        };
        name[event.target.innerHTML]?.();
    }
}

function hienBuoi1() {
    document.querySelector('div.main').innerHTML = "";
    document.querySelector('div.main').removeEventListener('click', handelBuoi2);

    for (let i = 1; i <= 30; i++) {
        const button = document.createElement('button');
        button.classList.add(i % 2 === 0 ? 'even' : 'odd');
        button.textContent = `Bai ${i}`;
        document.querySelector('div.main').appendChild(button);
    }

    document.querySelector('div.main').addEventListener('click', handelBuoi1);
}

function hienBuoi2() {
    document.querySelector('div.main').innerHTML = "";

    // Gỡ bỏ sự kiện
    document.querySelector('div.main').removeEventListener('click', handelBuoi1);

    for (let i = 1; i <= 29; i++) {
        const button = document.createElement('button');
        button.classList.add(i % 2 === 0 ? 'even' : 'odd');
        button.textContent = `Bai ${i}`;
        document.querySelector('div.main').appendChild(button);
    }

    document.querySelector('div.main').addEventListener('click', handelBuoi2);

}
