import { useState } from "react"

function ProductCard (prop) {
    const [cartCount, setCartCount] = useState(0);
    return(
        <div className="Card">
            <h3>{prop.name}</h3>
            <p>Category: {prop.category}</p>
            <p>Price : ₦{prop.price.toLocaleString()}</p>

            <button className={cartCount > 0 ? "added-btn" : "add-btn"} onClick={() => setCartCount(cartCount + 1)}>
               
                {cartCount === 0 ? 
                "Add to cart" : `Added ${cartCount} times`}
                </button>
        </div>

    )
}
export default ProductCard