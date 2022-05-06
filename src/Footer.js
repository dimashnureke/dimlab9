import './App.css';
import pic1 from './img/recommend1.jpg';
import pic2 from './img/recommend2.jpg';
import pic3 from './img/recommend3.jpg';
import pic4 from './img/recommend4.jpg';
import pic5 from './img/recommend5.jpg';
import pic6 from './img/recommend6.jpg';
import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div className="Footer">
        <a>ГидОнлайн - Твой гид в мире кино! © gidonline.io</a>
        <a className="footer-text">Контакты</a>
      </div>
    );
  }
}


export default Footer;