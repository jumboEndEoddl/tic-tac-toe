# tic-tac-toe
틱택토
1일차 - 상태 변경시 직전값을 참조할 때는 함수를 이용해서 안전하게 하기 //클로저(내부 함수가 외부 함수의 변수에 접근하여 사용하는 특성) 로 인해 해당 함수의 스코프는 함수가 선언된 시점의 상태를 기억하기 때문에.
컴포넌트 외부에서 함수 변수 선언하고 활용하기

2일차 - 게임보드 판 생성(배열/객체 복사시 깊은 복사 통한 참조 피하기 - 상태 업데이트 보다 빠르기 때문에 피해주어야 한다). root컴포넌트에서 상태관리(props 통해 gameboard컴포넌트와 player컴포넌트에서 함께 사용하는 전역상태).
