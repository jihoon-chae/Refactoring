export function printOwing(invoice) {
  // 코드가 너무 길다, 함수가 무슨일을 하는지 파악하기 어렵다

  printBanner();

  let outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);
}

function printBanner() {
  // 배너를 출력
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function calculateOutstanding(invoice) {
  // 총가격을 계산
  let result = 0;
  // calculate outstanding
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  // record due date (지급날짜 계산)
  const today = new Date();
  invoice.dueDate = new Date( // 객체를 수정
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  //print details (세부사항 출력)
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);

// 악취가 나는 이유
// 코드가 너무 길다
// 주석때문에 흐름이 끊긴다

// => 함수를 읽으면서 단계적으로 추출하는 작업을 해줘야 한다.

// 1. 지역변수는 사용하는 곳과 최대한 가까이에서 정의
   