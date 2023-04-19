const btn = document.getElementById("btn");
const numFrame = document.getElementById("numFrame");

btn.addEventListener("click" , () => {
    numFrame.innerHTML = "";
    const inputElement = document.getElementById("input");
    const input = parseInt(inputElement.value);

    let primeNumA = [];
    outerA: for(let i = 2 ; i <= input ; i ++){
        for(let j = 2 ; j <= i ; j ++){
            if( (i % j) == 0 && j < i){
                continue outerA;
            }
            if( j == i){
                primeNumA.push(i);
            }
        }
    }

    primeNumA.forEach((i , index)=>{    //迴圈渲染
        if(index == primeNumA.length-1){
            numFrame.innerHTML += `<div class="fs-4 d-inline fw-bold ms-3">${i}</div>`; //模板字面量
        }else{
            numFrame.innerHTML += `<div class="fs-4 d-inline fw-bold ms-3">${i},</div>`;
        }

        if(index%10 == 0 && index != 0){
            numFrame.innerHTML += "<br>";
        }
    });

    console.log(primeNumA);
});

// let targetB = 10;
// let primeNumB = [];
// outerB: for(let i = 3 ; ; i ++){
//     for(let j = 2 ; j <= i ; j ++){
//         if( (i % j) == 0 && j < i){
//             continue outerB;
//         }
//         if( j == i){
//             primeNumB.push(i);
//         }
//     }
//     if(primeNumB.length == targetB){
//         break;
//     }
// }
// console.log(primeNumB);