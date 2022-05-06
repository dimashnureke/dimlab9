import './App.css';
import pic1 from './img/rec1.jpg';
import pic2 from './img/rec2.jpg';
import pic3 from './img/rec3.jpg';
import pic4 from './img/rec4.jpg';
import pic5 from './img/rec5.jpg';
import pic6 from './img/rec6.jpg';
import pic7 from './img/rec7.jpg';
import pic8 from './img/rec8.jpg';
import pic9 from './img/rec9.jpg';
import Main_item from './Main_item';

function Main() {
  return (
    <div className="Main">
      <section>
          <div className="Main-nav">
              <a>актеры</a>
              <a>режиссер</a>
              <a>страна</a>
              <a>год</a>
          </div>
          <div className="post">
              <Main_item pic={pic1} name='Семейка Крудс: Семейное древо'/>
              <Main_item pic={pic2} name='Герой'/>
              <Main_item pic={pic3} name='Гундала: Сын молнии'/>
          </div>
          <div className="post">
              <Main_item pic={pic4} name='Оператор'/>
              <Main_item pic={pic5} name='Сериал: Куколка'/>
              <Main_item pic={pic6} name='Наперегонки со смертью'/>
          </div>
          <div className="post">
              <Main_item pic={pic7} name='Сериал: Дом теней'/>
              <Main_item pic={pic8} name='Аполлон 10 1/2'/>
              <Main_item pic={pic9} name='Юные Титаны, вперед!'/>
          </div>
      </section>
    </div>
  );
}

export default Main;