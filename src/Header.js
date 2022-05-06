import './App.css';
import pic from './img/logo.png';
import pic1 from './img/film1.jpg';
import pic2 from './img/film2.jpg';
import pic3 from './img/film3.jpg';
import pic4 from './img/film4.jpg';
import pic5 from './img/film5.jpg';
import pic6 from './img/film6.jpg';
import pic7 from './img/film7.jpg';
import Category_item from './Category_item';
import Header_item from './header-item';
import category from './categories.json';

function Header() {
  return (
    <div className="Header">
      <header className='Header1'>
          <img src={pic} alt="logo"></img>
          <div className="header1-nav">
              <div className="header-find">
                  <input className="header-finder"></input>
                  <div className="header-button">Поиск</div>
              </div>
              <div className="header-nav">
                  <a>Новинки</a>
                  <a>Премьеры</a>
                  <a>Навигатор</a>
                  <a>Случайный</a>
              </div>
          </div>
      </header>
      <header className='Header2'>
          <div className="top">
            <Header_item pic={pic1} name='Наемник'/>
            <Header_item pic={pic2} name='Падение Луны'/>
            <Header_item pic={pic3} name='Четверг'/>
            <Header_item pic={pic4} name='Смерть на Ниле'/>
            <Header_item pic={pic5} name='Исчезнувший'/>
            <Header_item pic={pic6} name='Человек-паук: Нет пути домой'/>
            <Header_item pic={pic7} name='Якраснею'/>
          </div>
          {
            Object.keys(category).map(key => {
              return <div className='category'>
                {
                  category[key].map(cate=>{
                    return <Category_item name={cate.name}/>
                  })
                }
              </div>
            })
          }
          {/* <div className="category">
              <Category_item name='ВЕСТЕРН'/>
              <Category_item name='БИОГРАФИЯ'/>
              <Category_item name='БОЕВИК'/>
              <Category_item name='ВОЕННЫЙ'/>
              <Category_item name='ДЕТЕКТИВ'/>
              <Category_item name='ДРАМА'/>
              <Category_item name='ДОКУМЕНТ'/>
          </div>
          <div className="category">
              <Category_item name='ИСТОРИЯ'/>
              <Category_item name='КОМЕДИЯ'/>
              <Category_item name='КРИМИНАЛ'/>
              <Category_item name='МЕЛОДРАМА'/>
              <Category_item name='МУЗЫКА'/>
              <Category_item name='МУЛЬТФИЛЬМ'/>
              <Category_item name='ПРИКЛЮЧЕНИЯ'/>
          </div>
          <div className="category">
              <Category_item name='СЕМЕЙНЫЙ'/>
              <Category_item name='СЕРИАЛЫ'/>
              <Category_item name='СПОРТ'/>
              <Category_item name='ТРИЛЛЕР'/>
              <Category_item name='УЖАСЫ'/>
              <Category_item name='ФЭНТЕЗИ'/>
              <Category_item name='ФАНТАСТИКА'/>
          </div> */}
      </header>
    </div>
  );
}

export default Header;