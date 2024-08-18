
import './Cart.css'


function Cart(props){
    

    let cartItem = props.data

    return(
      
        <>
        <div id="cartList">
            <h2 id="cartHeader">Cart</h2>
            <div id = "cartLabels">
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>

            </div>
           
        <ul id="cartUl">
        
            {cartItem.map((product) =>{
                return <><li key={product.ProductID}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>               
                </li>
                </>
            })}  
        </ul> 
        </div>
        </>
    )


}

export default Cart