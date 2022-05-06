import './App.css';
import pic1 from './img/recommend1.jpg';
import pic2 from './img/recommend2.jpg';
import pic3 from './img/recommend3.jpg';
import pic4 from './img/recommend4.jpg';
import pic5 from './img/recommend5.jpg';
import pic6 from './img/recommend6.jpg';

function Aside_item(props) {
  return (
    <div className="aside-item">
      <img src={props.pic} alt="logo" className="top-photo"></img>
      <a>{props.name}</a>
    </div>
  );
}

function Aside() {
  const text = "Ангел мой";
  return (
    <div className="Aside">
      <div className="aside-text">Рекомендуемые фильмы</div>
      <div className="aside-row">
        <Aside_item pic={pic1} name='Отель для собак'/>
        <Aside_item pic={pic2} name='3дня на убийство'/>
      </div>
      <div className="aside-row">
        <Aside_item pic={pic3} name='Потяренный в снегах'/>
        <Aside_item pic={pic4} name='Последний рубеж'/>
      </div>
      <div className="aside-row">
        <Aside_item pic={pic5} name={text}/>
        <Aside_item pic={pic6} name='Женщина'/>
      </div>
    </div>
  );
}

export default Aside;