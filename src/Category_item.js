import './App.css';

function Category_item(props) {
  return (
    <div className="category-item">
        <a>{props.name}</a>
    </div>
  );
}

export default Category_item;