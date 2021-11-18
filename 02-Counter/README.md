### 제목 : Counter

### 기능(clone)

1.  INCREASE 버튼 클릭 : 숫자를 1 증가
2.  DECREASE 버튼 클릭 : 숫자를 1 감소
3.  RESET 버튼 클릭 : 숫자를 0으로 변경

### 추가 기능(practice)

1.  INCREASE 버튼 클릭 유지(mousedown) : 숫자가 0.2초 간격으로 1씩 증가
2.  DECREASE 버튼 클릭 유지(mousedown) : 숫자가 0.2초 간격으로 1씩 감소

### Issue

1\. 버튼 클릭 유지 기능에 대한 비동기적 수행

- 문제 현상
  - 버튼 클릭을 연타하면 숫자가 비정상적으로 늘어나거나 줄어드는 현상 발생
- 문제 원인
  - 버튼 클릭을 유지하면 숫자가 계속 증가 또는 감소시키기 위해서 setTimeout() 함수를 사용하였는데 setTimeout() 함수로 인한 대기 중에 버튼 클릭에 의해서 비동기적인 수행이 발생됨
- 문제 해결방법
  - Promise 객체 활용
  - setTimeout() 함수가 종료된 이후에만 숫자를 변경시킬 수 있도록 flag 변수를 조건문에 추가

```
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
```
