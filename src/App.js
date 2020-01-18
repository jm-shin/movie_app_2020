import React from "react";
import PropTypes from "prop-types";

const heroILike = [
  {
    id:1,
    name: "CaptainAmerica",
    image:
    "https://post-phinf.pstatic.net/MjAxODExMTJfMTc5/MDAxNTQxOTk3NDg5MDc5.STSux1X9dhsqS0dlaP-aAiufnuiJAe1412w6_ADiJ7cg.IjR41oa7NkvZ_F9tOpeOyhwD3EO5GN9JMQDfQBZr020g.JPEG/Captain-America-New-Costume-in-Avengers-4.jpg?type=w1200",
    rating: 4
  },
  {
    id: 2,
    name:"Iron-man",
    image:"http://mblogthumb1.phinf.naver.net/MjAxODA1MTFfODEg/MDAxNTI2MDEwNzcxODMw.CBS3g3lf7tBbrf0HMEXI8euEfwfinEL2BSNVQRrMdAwg.v8mbKosv_xESPhQvwhgrKEh2hobxgR--Rc_fdHODt_8g.JPEG.dongyoon87/Iron-Man-Will-Die-in-Avengers-4.jpg?type=w800",
    rating: 4.3
  },
  {
    id: 3,
    name:"Thor",
    image:"https://i.ytimg.com/vi/d72hyEhxXgA/maxresdefault.jpg",
    rating: 4.5
  },
  {
    id: 4,
    name:"Hulk",
    image:"https://img.huffingtonpost.com/asset/5d7f3e61230000580554f916.jpeg?cache=vsNYzmVNEQ&ops=scalefit_630_noupscale",
    rating: 4.6
  }
];

function Hero({name,picture,rating}){
  return (
  <div>
    <h2> I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

Hero.PropTypes ={
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number
}

function App() {
  return (
  <div>
    {heroILike.map(hero => (
      <Hero 
        key={hero.id} 
        name={hero.name} 
        picture={hero.image}
        rating={hero.rating}
        />
    ))}
  </div>
  );
}

export default App;
