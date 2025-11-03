import Product from "./Product";

function ProductTab () {
    let options = ["hi-tech", "durable", "fast"]
    
    return (
        <>

        <Product title = "Phone" price = {30000}/>
        <Product title = "laptop" price = {40000}/>
        <Product title = "pen" price = {1}/> 
       
        </>
    );
}

export default ProductTab;