// 외부에서 사용할 수 있는 클래스 만들기
export class Reading {
  #customer;
  #quantity;
  #month;
  #year;
  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer() {
    return this.#customer;
  }

  get quantity() {
    return this.#quantity;
  }

  get month() {
    return this.#month;
  }

  get year() {
    return this.#year;
  }

  // 데이터와 밀접하게 관련이 있기 때문에 reading 안에 들어가야함
  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    this.year;
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseRate - this.taxThreshold);
  }
}

// 객체 대신 클래스의 인스턴스를 할당
const reading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}

// 데이터가 여기저기 흩어져 있음
// 데이터를 반환만 하고 나중에 쓰는 사람이 각각 외부에서 계산해야함 => 코드중복, 재사용성 떨어짐, 유지보수 어려움
// 필요한 데이터와 관련된 함수를 하나로 응집하기 (캡슐화)

// Reading 이라는 클래스 안에서 필요한 데이터를 가지고 계산할 수 있도록 
// 장점 => 외부에서 일일이 계산을 반복할 필요가 없고 클래스안에서 제공해주는 함수를 통해서 데이터를 읽을 수 있음