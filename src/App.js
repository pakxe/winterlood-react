// import './App.css';
import MyHeader from './MyHeader';

function App() {
  const name = '박세현';

  const style = {
    // camelCase 사용
    App: {
      backgroundColor: 'black',
    },
    h2: {
      color: 'red',
    },
    bold_text: {
      color: 'green',
    },
  };

  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <b style={style.bold_text}>React.js</b>
    </div>
  );
}
/**
 * 키워드
 *
 * self closing tag
 * 최상위 태그
 * jsx에서는 class라는 단어가 js의 예약어이기 떄문에 className으로 사용한다.
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
