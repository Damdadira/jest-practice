const Calculator = require("../calculator.js");

/**
 * describe: 테스트를 그룹화
 * it: 개별 테스트 케이스를 정의하는 함수(test와 동일해서 둘다 사용 가능)
 */
describe("Calculator", () => {
  /**
   * 공통적으로 필요한 문법은 beforeEach 사용
   * 테스트가 실행 되기 전 beforeEach 실행 > 테스트 실행
   * 각 테스트는 독립적이어야함
   * 제일 상단에 변수로 선언하는건 옳지 않은 방법
   */
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  // 0으로 초기화 된다
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  // 9로 세팅한다
  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  // 클리어
  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  // 더하기
  it("adds", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  // 빼기
  it("substracts", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  // 곱하기
  it("multiplies", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  // 나누기
  describe("divides", () => {
    // 0을 0으로 나누기
    it("0/0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    // 숫자를 0으로 나누기
    it("1/0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    // 숫자를 숫자로 나누기
    it("4/4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});