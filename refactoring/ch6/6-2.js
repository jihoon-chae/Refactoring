// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1; // 점수로 등급 매기기
}

function moreThanFiveLateDeliveries(dvr) {}

// 예제 2
// 지역변수 하나만들어서 데이터를 반환 => 불필요한 함수, 그냥 호출하면 됨
// 불필요한 간접호출 일어나지 않도록 가지고 와서 인라인 해줌
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}

// 긴코드는 의미있는 단위로 나눠서 함수를 만들고 ㅇ
