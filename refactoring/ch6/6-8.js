export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp)); // 범위안에 포함되어 있지 않는것을 필터링
}

export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    // min과 max의 범위에 있는지 체크하는 함수
    return number >= this.#min && number <= this.#max;
  }
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(station, operationPlan);

console.log(result);

// 매개변수는 3개로 나쁘지 않지만 min, max는 하나의 객체로 묶어주는 것이 좋다!(range)
// 최솟값 최댓값을 가지고 있는 객체를 전달하기
// but 온도가 정상적인 범위 있는지 검사하는 함수를 따로 만들어 둔다면 더 유용할것!
// range의 클래스를 만듦 (데이터와 데이터를 처리하는 로직을 묶어주기 위해서)
