import './App.css';

function Main_item(props) {
  return (
    <div className="post-item">
        <img src={props.pic} alt="logo" className="top-photo"></img>
        <a>{props.name}</a>
    </div>
  );
}

export default Main_item;