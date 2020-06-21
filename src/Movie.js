import React from "react";
import PropType from "prop-types";
import "./Movie.css";
// 이제 여기서 영화를 랜더링 할것
// 여기는 state가 필요없기에 function component를 사용

function Movie ({ id,year,title,summary,poster,language,kind }) {
    return (<div class = "movie">
        <img src={poster} alt={title} title={title}/>
        <div class = "movie_date">
            <h3 class = "m_title">{title}</h3>
            <h3 class = "m_year">{year}</h3>
            <p class ="m_summary">{summary}</p>
            <h3 class ="m_language">{language}</h3>
            <ul class = "m_kind">{kind.map( (type,index ) =>
                <li key = {index} class = "m_kind_genre">{type}</li>)}</ul>
        </div>
    </div>
    );
}
// m_kind 쪽에 map을 호출할때, map에는 2가지 파라미터를 사용가능, 하나는 현재 아이템 다른건 아이텀 number
Movie.PropType={
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    language: PropType.string.isRequired,
    kind: PropType.arrayOf(PropType.string).isRequired
}// 우리가 얻어올 props 타입을 설정해주기, api에서 확인가능

export default Movie;