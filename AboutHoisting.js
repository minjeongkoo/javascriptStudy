// Function Scope

function test(minjeong) {

    let i = 0;  // testing() 함수 전체에 걸쳐 정의된다.

    if (typeof minjeong == 'object') {


        var j = 0; // 블록 뿐만 아니라 함수 전체에 걸쳐 정의된다.

        for (var k = 0; k < 10; k++) { // k는 반복문 외에도 함수 전체에 걸쳐서 정의된다.
            console.log('k: ', k);     // 0부터 10까지 출력된다.
        }

        console.log('for function end. k:', k); // 정의되어있다. 10을 출력한다.
    }
    console.log(j); // 정의되어있다. 초기화되어있지 않다.

}

/* 지역 변수는 함수 전체에 걸쳐서 정의된다. 전역 변수는 함수 전체에서 이 지역 변수에 의해 감춰진다. */

var scope = 'global';

function notyet() {
    //console.log(this.scope); // 'global'을 출력한다.
    console.log(scope); // 'global'이 아니라 undefined를 출력한다.
    var scope = 'local'; // 여기서 초기화 하지만, 정의는 다른 곳에서 이루어졌다.
    console.log(scope); // 'local'을 출력한다.
}

/* 블록 스코프를 가진 프로그래밍 언어에서 변수를 선언하는 좋은 프로그래밍 방법은 ,가능한 한 그 변수가 사용되는 가장 가까운 곳에서 선언하는 것이다. */
/* 자바스크립트는 함수 유효범위를 가진 프로그래밍 언어이기 때문에, 가까운 위치 보다는 맨 꼭대기에 선언한다. */

function localvar() {
    var scope; // 지역 변수는 함수 맨 꼭대기에서 선언한다.
    console.log(scope); // scope 변수는 존재하지만 아직 undefined 값이다.
    scope = 'local';
    console.log(scope); // 기대한 값이 출력된다 'local'
}