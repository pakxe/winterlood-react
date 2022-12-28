// import './App.css';
import Counter from './Counter';
import MyHeader from './MyHeader';

function App() {
  const counterProps = {
    a: 1,
    b: 2,
  };
  return (
    <div>
      <MyHeader />
      <Counter {...counterProps} />
    </div>
  );
}
/**
 * 공부
 *
 * self closing tag
 * 최상위 태그
 * jsx에서는 class라는 단어가 js의 예약어이기 떄문에 className으로 사용한다.
 * jsx내부에 js코드 삽입은 {} 안에 한다. 이 안엔 숫자나 문자열로 평가될 수 있는 표현식을 넣어야 한다.
 *  삼항 연산자도 넣을 수 있다.
 * 조건에 따라 각각 다른 요소로 렌더링 할 수 있다. 이런 방식의 렌더링을 조건부 렌더링이라고 한다. 많이 사용하게 된다.
 */

export default App;

/**
 * es module system 방식은 export default 를 사용한다. 리액트가 주로 사용
 * 읽어오는 방법은 import 이름 from 경로
 * 이름은 바꿔도 상관없다.
 * export default 방식은 하나의 컴포넌트만 내보낼 수 있다!
 *
 * 하지만 common js module system도 알고있어야 한다.
 * create-react-app 같은 보일러 플레이트가 아닌 직접 구축하고자 할 때는 필요하기 때문
 */
