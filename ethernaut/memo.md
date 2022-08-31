# Ethernaut Helper 및 풀이
    Ethernaut의 경우, 브라우저의 개발자 모드를 이용하여 문제를 풀게끔 되어 있다.
    하지만 F12로 풀기에는 너무나도 불편하고 Remix도 조금 불편해서, 편한 환경해서 문제를 해결하기 위해 만든 코드이다.



# How to Use
## 1. .env 
- 주어진 `.env.template` 파일을 `.env`로 변경하여 사용
### a) 고정된 값
- ETHERNAUT : Ethernaut에서 각 문제들의 instance를 생성하고, 해결 여부를 확인하는 Root Contract 주소 

### b) 개인별 Key 값
- INFURA_KEY : 개인의 Infura API KEY
- METAMASK_PRIVATE_KEY : 사용자 Wallet의 private key 
- ETHERSCAN_API_KEY : 개인의 Etherscan API KEY
### c) 문제마다 바뀌는 값
- LEVEL : Level Contract address (각 문제의 URL을 보면 쉽게 확인 가능)

## 2. newInstance.js
- 각 문제에서 사용할 Instance를 생성해주는 코드
- `.env`의 LEVEL 값을 바꿔주고 실행하면, Instance 주소가 출력됨

## 3. submit.js
- 문제에서 요구하는 것들을 모두 만족한 후에 실행하는 제출 코드
- 만약 문제가 해결되었다면, `[!! CLEAR !!]` 라고 출력됨
- `newInstance.js`의 결과를 반영한 후 사용

## 4. solve.js
- 풀이 코드
- 작성 방법을 잘 모르겠다면 `1. FALLBACK/solve.js` 참고
- `newInstance.js`의 결과를 반영한 후 사용