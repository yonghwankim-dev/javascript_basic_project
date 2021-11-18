
/**
 * issue
 * 1. 마우스로 INCREASE / DECREASE 버튼을 일반적으로 꾸욱
 * 누르면 이상이 없어보이나 마우스 클릭을 연타로 하면
 * 비이상적으로 COUNT가 늘어나거나 줄어듬.
 * 함수의 동기화적인 문제인 것같음
 * Promise에 대한 공부 필요 
 */

const num = document.querySelector("#num");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

let count = 0;
let isPressed = false;
let isDown = true;

const interval = function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true);
        },200);
    });
};

const doInterval = function(action){
    if(isPressed && isDown){
        count = parseInt(num.textContent) + parseInt(action);

        reColoring(count);

        num.textContent = count;

        isDown = false;
        interval().then((result)=>{
            isDown = result;
            doInterval(action);
        });
    }
}

const reColoring = function(count){
    if(count>0){
        num.style.color = "green";
    }
    else if(count<0)
    {
        num.style.color = "red";
    }else if(count===0)
    {
        num.style.color = "#222";
    }
};


increase.addEventListener("mouseup",function(){
    isPressed = false;
});

increase.addEventListener("mousedown", function(){
    isPressed = true;
    doInterval(1);
});

decrease.addEventListener("mouseup",function(){
    isPressed = false;
});

decrease.addEventListener("mousedown", function(){
    isPressed = true;
    doInterval(-1);
});

reset.addEventListener("click",function(){
    num.textContent = 0;
});