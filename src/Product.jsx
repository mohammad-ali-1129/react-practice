import './Product.css';
function Product({title,price,features}){
    let styles = {backgroundColor : price > 30000 ? "yellow " : ""} 
    return (
        <div className="Product"  style = {styles}>
            <h3>{title} </h3>
            <h5>Price: {price} </h5>
            {price > 30000 && <p>Discount : 5% </p>}
        </div>
    );
}
export default Product;