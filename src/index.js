import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import Glass from './Glass'; // 이걸 계속 적용하면 Glass의 Test 문구가 계속 뜸
//import * as serviceWorker from './serviceWorker';


//<App /> 과 같은걸 컴포넌트라 하는데 App.js에 보면 HTML을 반환하는 함수이다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); // 여기를 보면 root라는 이름으로 모든 요소를 삽입, 리액트는 빈 HTML에 HTML을 넣는다. root 안으로 -> 소스코드가 안보임
// 리액트는 한번에 하나의 컴포넌트만 랜더링 가능. 그래서 App.js에 컴포넌트를 추가하는 방식으로


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
