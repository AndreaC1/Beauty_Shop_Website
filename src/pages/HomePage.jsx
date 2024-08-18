import './HomePage.css'

function HomePage() {




    return (
        <>

            <div id="imageContainer">
                <img id="store" src="images\pexels-delbeautybox-211032-705255.jpg" alt="" />
                <h1 id="name">Salon Rose</h1>
                <h2 id="description">Hair Salon and Beauty Products</h2>

            </div>
            <div id="discountsContainer">
                <h2 id="discountsHeader">Discount Items</h2>
                <h3>50% off mascara and lipstick</h3>
                <ul>

                    <div id="discounts">
                        <img src="images\pexels-828860-2637820.jpg" alt="mascara" />
                        <img src="images\pexels-valeriya-850801.jpg" alt="" />
                    </div>

                </ul>
            </div>
        </>
    )
}


export default HomePage