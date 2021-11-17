
const hexadecimal = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const bgValue = document.querySelector("#bgValue");
const main = document.querySelector(".main");
const btn = document.querySelector("#btn");
const title_mode = document.querySelector("#title_mode");
let mode = "simple";

const bgSimpleValue = ["Red","Green","#F15025","Rgba(133,122,200)"];
const simple = document.querySelector("#simple");
const hex = document.querySelector("#hex");

// 0~15사이의 랜덤 인덱스 생성
const getRandomIndex = ()=>{
    return Math.floor(Math.random()*hexadecimal.length);
};

// 16진수 6자리의 배경색 값 생성
const createBgValue = ()=>{
    let newBgValue = "#";
    for(let i=0;i<6;i++)
    {
        newBgValue += hexadecimal[getRandomIndex()];
    }
    return newBgValue;
};
// 정해진 배경값 반환
const createSimpleBgValue = ()=>{
    return bgSimpleValue[Math.floor(Math.random()*bgSimpleValue.length)];
}

// 배경색 적용
const setBgValue = (mode)=>{
    let newBgValue;
    if(mode==="simple")
    {
        newBgValue = createSimpleBgValue();
    }
    else
    {
        newBgValue = createBgValue();
    }
    
    bgValue.textContent = newBgValue;
    main.style.backgroundColor = newBgValue;
};

btn.addEventListener("click",()=>{setBgValue(mode)});
simple.addEventListener("click",()=>{
    mode="simple";
    title_mode.textContent = "Color Flipper || Simple";
});
hex.addEventListener("click",()=>{
    mode="hex";
    title_mode.textContent = "Color Flipper || Hex";
});




