import './App.css';

function Header_item(props) {
  return (
    <div className="header-item">
        <img src={props.pic} alt="logo" className="top-photo"></img>
        <a>{props.name}</a>
    </div>
  );
}

export default Header_item;