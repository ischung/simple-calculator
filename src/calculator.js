export function add(a, b) {
    return a + b;
}
// 연산자 문자열을 받아 알맞은 함수를 골라 실행 (STEP 2부터 함수가 추가됨) 
export function calculate(operator, a, b) {
    const ops = { add };
    const fn = ops[operator];
    if (!fn) {
        throw new Error(`알 수 없는 연산자: ${operator}`);
    }
    return fn(a, b);
}
