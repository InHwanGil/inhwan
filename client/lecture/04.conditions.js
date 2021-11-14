// -------------------------------------------------
// 04. 조건 처리
// -------------------------------------------------
// - if, else if, else
// - switch case, default
// - expression, tertiary
// - try, catch
// -------------------------------------------------

// 주사위 굴리기(rollingDice) 함수를 작성하세요.


// function rollingDice(){
//     return Math.floor(Math.random()*6 +1);
// }
function rollingDice(min = 1, max = 6){
    return Math.floor(Math.random()* (max - min) + min);
}
// 굴려서 나온 주사위 값의 홀수인지 여부를 반환하는 함수를 작성하세요.
const isOdd = (value) =>{
    if(value % 2 === 1){
        return  true;
    }else{
        return false;
    }
}
// 값반환 조건 ? 참 : 거짓
// return value % 2 === 1 ? true : false;

// 값반환 (값 그 자체가 boolean이기 때문)
return value % 2 === 1;

// console.log(isOdd(rollingDice()));
// console.log(isOdd(rollingDice()));
// console.log(isOdd(rollingDice()));
// console.log(isOdd(rollingDice()));

// 주사위를 굴립니다.
// 주사위의 값이 홀수인지 여부를 확인합니다.
const isEven = (value) => {
    return !isOdd(value)
}

// let value = rollingDice();

// if (isOdd(value)){
//     console.log(value, '= 홀수입니다.');
// }else{
//     console.log(value, '= 짝수입니다.');    
// }

let value = rollingDice();

// if (isOdd(value)){
//     console.log(value, '= 홀수입니다.');
// }else{
//     throw new Error(`${value} = 짝수입니다.`); 
// }

const throwError = (message) =>{
    throw new Error(message);
}
isOdd(value) ? console.log(value, '= 홀수입니다.') : throwError(`${value} = 짝수입니다.`)

// 주사위 값이 홀수라면?
// Console 패널에 주사위 값이 '홀수'임을 출력하세요.
// 그렇지 않다면?
// Console 패널에 주사위 값이 '홀수'가 아님을 오류 메시지로 출력하세요.


// 주루마블 게임을 하는 중입니다.
// 던져서 나온 주사위 값에 따라 벌칙이 무엇인지 반환하는 페널티 함수를 작성하세요.
// - "1잔 원샷"
// - "지목 원샷"
// - "여성 원샷"
// - "남성 원샷"
// - "다 같이 원샷"
// - "나 빼고 원샷"

//type of penalty
function displayPanerty(value){
    //switch(+value)
    switch(Number(value)){
        case 1 : return  "1잔 원샷";
        case 2 : return  "지목 원샷";
        case 3 : return  "여성 원샷";
        case 4 : return  "남성 원샷";
        case 5 : return  "다 같이 원샷";
        case 6 : return  "나 빼고 원샷";
        default:
            throwError('유효한 숫자의 범위가 아닙니다.');
    }
}
console.log(displayPanerty(rollingDice()));

// 앞서 작성한 코드에서 `문`을 `식`으로 변경 가능한 부분을 찾아 수정해봅니다.


// 벌칙 카드에서 처리 가능하지 않은 값이 전달될 경우, 오류를 출력하는 구문을 작성해봅니다.
