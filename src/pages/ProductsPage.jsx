import { useEffect, useState } from "react";
import Cart from "./Cart"
import './ProductsPage.css'

const imgPaths = import.meta.glob("../../images/*")

const images = Object.keys(imgPaths);
function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [cartTotal, setcartTotal] = useState(0);
    const [cartWidth, setCartWidth] = useState(0);

    useEffect(() => {

        fetch(`http://localhost:5557/api/products`)

            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch(console.error);
    }, [])

    const addToCart = (itemName, itemPrice, productID) => {
        let newItem = {
            id: productID,
            name: itemName,
            price: itemPrice,
            quantity: 1
        }

        if (cartItem.length > 0) {

            for (let i = 0; i < cartItem.length; i++) {
                if (cartItem[i].id == newItem.id) {
                    const arrayCopy = [...cartItem];
                    arrayCopy[i].quantity++;
                    setCartItem(arrayCopy);
                    return;
                }
            }
            setCartItem([...cartItem, newItem]);
        } else {
            setCartItem([newItem]);
        }

    }

    function displayImage(productName) {
        switch (productName) {
            case "Lipstick":
                return images[10];
            case "Eyeliner":
                return images[0];
            case "Mascara":
                return images[1];
            case "Foundation":
                return images[3];
            case "Eyeshadow":
                return images[7];
            case "Concealer":
                return images[2];
            case "Eyelash Curler":
                return images[5];
            case "Nail Polish":
                return images[8];
            case "Nail File":
                return images[6];
        }
    }


    function clearCart() {
        setCartItem([]);
        setcartTotal(0);
    }

    function hideCart() {
        setCartWidth(0)
    }

    function viewCart() {
        setCartWidth(425)
    }

    function calculateTotal(cartItem) {
        let total = 0;
        for (let i = 0; i < cartItem.length; i++) {
            total += cartItem[i].price * cartItem[i].quantity
        }
        setcartTotal(cartTotal + total)
    }

    return (

        <>

            <div id="cartContainer" style={{ width: cartWidth }} >
                <Cart data={cartItem} />
                <div id="cartTotal">
                    <button onClick={() => calculateTotal(cartItem)}> total </button>
                    <p>{cartTotal}</p>
                </div>

                <button onClick={() => {
                    clearCart();
                }} >Clear Cart</button>
                <button onClick={() => {
                    hideCart();
                }} >Hide Cart</button>

            </div>
            <button id="viewCartBtn" onClick={() => {
                viewCart()
            }}
            >View Cart</button>
            <div id="products">
                <h1 id="productHeading">Products</h1>
            </div>

            <div id="productsContainer">
                <ul>

                    {products.map((product) => {
                        return <li key={product.ProductID}>
                            <div className="productInfo">
                                <h2>{product.Name}</h2>
                                <p>{product.Price}</p>
                                <img src={displayImage(product.Name)} />
                                <button onClick={() => addToCart(product.Name, product.Price, product.ProductID)}>Add to Cart</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>

        </>
    )
}

export default ProductsPage