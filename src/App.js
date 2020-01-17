import React from 'react';

function MyHero({name,picture}){
  return (
  <div>
    <h2> I like {name}</h2>
    <img src={picture}/>
  </div>
  );
}

const avengers = [
  {
    name: "CaptainAmerica",
    image:
    "https://post-phinf.pstatic.net/MjAxODExMTJfMTc5/MDAxNTQxOTk3NDg5MDc5.STSux1X9dhsqS0dlaP-aAiufnuiJAe1412w6_ADiJ7cg.IjR41oa7NkvZ_F9tOpeOyhwD3EO5GN9JMQDfQBZr020g.JPEG/Captain-America-New-Costume-in-Avengers-4.jpg?type=w1200"
  },
  {
    name:"Iron-man",
    image:"http://mblogthumb1.phinf.naver.net/MjAxODA1MTFfODEg/MDAxNTI2MDEwNzcxODMw.CBS3g3lf7tBbrf0HMEXI8euEfwfinEL2BSNVQRrMdAwg.v8mbKosv_xESPhQvwhgrKEh2hobxgR--Rc_fdHODt_8g.JPEG.dongyoon87/Iron-Man-Will-Die-in-Avengers-4.jpg?type=w800"
  },
  {
    name:"Thor",
    image:"https://i.ytimg.com/vi/d72hyEhxXgA/maxresdefault.jpg"
  },
  {
    name:"Hulk",
    image:"https://img.huffingtonpost.com/asset/5d7f3e61230000580554f916.jpeg?cache=vsNYzmVNEQ&ops=scalefit_630_noupscale"
  }
];

function App() {
  return (
  <div>
    {avengers.map(hero => (
      <MyHero name={hero.name} picture={hero.image}/>
    ))}
  </div>
  );
}

export default App;
