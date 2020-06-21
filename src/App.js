import React from 'react';
//import Glass from "./Glass";  // Glass js를 여기서 사용하겠다.
//import PropTypes from 'prop-types';
import Axios from "axios";
import Movie from "./Movie";
import "./Movie.css"

/*
const somedata = [
    {
      id: 1,
      name: "Luda",
      image: "https://i.ytimg.com/vi/rKlK9aapKtw/maxresdefault.jpg",
      rating: 4
    },
    {
      id: 2,
      name: "jiho",
      image: "https://lh3.googleusercontent.com/proxy/nek1lQxZJ4SbqVQhWLFxad3EiMaM2op8981t2Cu68daYBb7WD1sx5JfyBXhdPpvYgDblVMp27tZo9tqrcxz23YMaXxMhwB0trJYB4ihO63J76RJysf6mVSwQx8Bkn0lS3udBphsE0yFQlMqYrExmj0mm3L8DIBVdnRNrzaZFOUQLRl9dLX3i",
      rating: 2.3
    },
    {
      id: 3,
      name: "hayoung",
      image: "https://pbs.twimg.com/profile_images/899150441493090305/l9tY9yCn_400x400.jpg",
      rating: 1
    },
    {
      id: 4,
      name: "Wendy",
      image: "https://pbs.twimg.com/media/Dxrs0ZUU0AI1Vho.jpg",
      rating: 2
    },
    {
      id: 5,
      name: "youju",
      image: "data:image/jpeg;base64,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",
      rating: 100
    }
    ];

function Test({name,pic,rate}) {
  return <div>
      <h1>do you know {name}??</h1>
      <h4>{rate} / 5.0</h4>
      <img src={pic} alt ={name}/>
    </div>
  }
    // 리액트는 재사용 가능한 컴포넌트 생성 가능

Test.prototype = {
  name:PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}// 체크하기 위함, 문자열 숫자, 오브젝트 등 모든것을 체크 가능

function App() {
  return( 
    <div>
      <h1>??????</h1> 
      {somedata.map(Idol => (
      <Test key = {Idol.id} name={Idol.name}  pic={Idol.image} rate={Idol.rating}/>))}
    </div>
    );
}
*/
//그러면 ??? 다음에 Glass or Test 가 사용됨
//파이썬 map과 같은 역할이 JS에도 있음 JS를 쓰기 위해서는 {}으로 사용
//Test 함수의 오브젝트 인자를 보낼때, <Test>의 파라미터 이름과 동일하게 해야함!!!! 
// 리액트 컴포넌트에서 내부에서 사용하기 위해 key값을 사용하므로 key를 추가 
//prop-type은 내가 전달 받은 props가 내가 원하는 props인지 확인해줌 -npm i prop-type

class App extends React.Component{
  state = {
    isloading: true,
    movie_list: []
  }
  /*
  add = () => {
    this.setState(function f(a){
      return {count: a.count + 1}
    });
  } //state를 부를때 위와같이 함수를 사용하여 호출하는게 좋음
  */

  get_list = async () =>{
    const {
      data: {
            data: {movies}
            } //es6문법을 이용하여 json에서 data의 data의 movis 목록을 가져옴
        } = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=year"); // fetch와 같은 역할, 해당 URL의 정보를 읽음
    console.log(movies) // 이 영화목록들을 state의 move_list에 넣어야함
    //console.log('const변수명'.data.data.movies)  // 일반적인 접근 방법
    this.setState({movie_list:movies ,isloading:false}) 
    // 영화목록을 받아 데이터를 넣고 loading 값을 변경!! -> 데이터를 받으면 문자열이 바뀜
    // state의 변수명과 다를때 이렇게 사용, 같으면 그냥 이름만 사용하면 react가 자동으로 해석함, 
  };

  componentDidMount(){
    // setTimeout( () => {
    //   this.setState({isloading: false});
    // },3000)
    this.get_list();
  }
  get_start(movie){

  }


  render(){
    const {isloading,movie_list} = this.state;
    return <section class = "container">
      {isloading ? <div class = "loader">
        <span class = "loader_text">
          Loading......
        </span>
      </div>
      : (
       <div class = "movies">
         {movie_list.map(movie => (
      <Movie 
          key = {movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          language ={movie.language}
          kind = {movie.genres} 
          />
         ))}
      </div> 
      )} 
    </section> 
  };
}
//function component는 무언가를 return하고 class 는 react.componet로부터 확장되고 screen에 표시 -> 그걸 render메서드에 넣어야함-> 자동으로 실행함 
//state는 object, 데이터는 변함 그래서 state사용 setstate를 통해 state를 refresh하고 render를 다시 호출함
//class componet의 라이프 사이클로 render 전과 후에 실행되는 함수가 있음(mount,update) 확인하면 됨
//render에서 Movie 를 호출할때, ,movie는 movie_list state의 값이며 여기는 JSON에 명시된 객체명을 호출해서 보내야함!!!! 안그러면 에러
export default App;
