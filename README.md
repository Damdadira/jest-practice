
### 설치 및 실행
```bash
# 패키지 설치
npm install --save-dev jest

# 테스트 실행
npm test

# 테스트 결과 상세 보기(테스트 실행 후 입력)
jest --verbose

# 코드의 몇 퍼센트가 테스트 되었는지 보기(테스트 실행 후 입력)
jest --coverage
jest --verbose --coverage(함께 사용 가능)
```
<br/>

### pakage.json
```bash
# 개별 사용
{
  "scripts": {
    "test": "jest --verbose",   // 테스트 상세 표시
    "test": "jest --watchAll",  // 파일 변경될 때마다 자동으로 테스트 재실행
  }
}

# 한번에 사용
{
  "scripts": {
    "test": "jest --watchAll --verbose",
  }
}
```
<br/>

### 특징
- 한번 작성된 테스트 코드는 영원히 유지보수 해야 한다
- 내부 구현 사항을 테스트 하면 안된다
- 재사용성을 높이자
- 배포용 코드와 철저하게 분리하자
- 테스트코드를 통해 문서화 하자
