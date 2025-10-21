
### 설치 및 실행
```bash
# 패키지 설치
npm install --save-dev jest

# 테스트 실행
npm test

# 각 케이스 상세하게 표시
npm test -- --verbose
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
