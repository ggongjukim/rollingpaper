# 결과물 👨‍💻

![teacherdaysgif](https://github.com/ggongjukim/rollingpaper/assets/75241542/e03e659e-a773-4032-a7bb-8f629ffd4e6e)


1. 편지 쓰기 (Create)
2. 편지 수정 (Update)
3. 편지 조회 (Read)
4. 노래 재생 / 끄기

끝 ,, 

<br/>
<br/>

# api 서버 [🔗](http://54.227.18.151/docs)
이모지 클릭

<br/>
<br/>

# 시행착오 🤔
## 1. `npx create-react-app .` 오류
시작부터 오류가 ;;
```cmd
PS C:\teachersday> npx create-react-app .
npm notice 
npm notice New minor version of npm available! 10.5.0 -> 10.7.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.7.0
npm notice Run npm install -g npm@10.7.0 to update!
npm notice 
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\kch96\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\kch96\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 
```
해결 : 삭제하고 다시 시작
```cmd
npm uninstall -g create-react-app
npm install -g create-react-app 
npx create-react-app .
```
<br/>
<br/>

## 2. 필요한거 설치
```cmd
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install react-router-dom
```
<br/>
<br/>

## 3. eslint prettier 설치
```cmd
npm install -D prettier
npm install -D eslint eslint-config-prettier
```
- .prettierrc 파일 만들기
- .eslint.js 파일 만들기
- package.json scripts 추가
```
    "format": "prettier --check ./src",
    "format:fix": "prettier --write ./src",
    "lint": "eslint ./src",
    "lint:fix": "eslint --fix ./src"

    npm run format 으로 실행 가능
```
<br/>
<br/>

## 4. 모바일 화면에 맞춰 세팅
- utils 로 작성
```js
export default function setMobileHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
```
- resize 이벤트에 적용
- App.js 에 적용

```js
  //처음 렌더링할 때 기준 높이로 vh를 계산하게되기 때문에 중간에 화면사이즈가 바뀌면 실시간으로 적용되지 않음
  useEffect(() => {
    setMobileHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener('resize', setMobileHeight);
    return () => window.removeEventListener('resize', setMobileHeight);
  }, []);
```
<br/>
<br/>

## 5. is missing in props validation react/prop-types 에러 ESLint
```json
rules: {
      ...
        "react/prop-types": 0
    },
```
당장추가

<br/>
<br/>

## 6.  .env 설정
```
REACT_APP_FAST_API = {YOUR_API_REQUEST_BASE_URL}
```
