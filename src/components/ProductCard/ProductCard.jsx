import React from "react"
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from "react-router-dom"
import "../ProductCard/ProductCard.css"

const ProductCard = (props) => {
    const location = useLocation()
    const {grid} = props
  return (
    <>
        <div className={`${location.pathname == "/store" ? `gr-${grid}`  : "col-3"}`}>
            <Link className="product-card position-relative">
                <div className="product-image">
                    <img className="img-fluid" src="images/watch.jpg" alt="product-image" />
                    <img className="img-fluid" src="images/catbanner-02.jpg" alt="product-image" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product-title">
                        Kids headdphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, labore?</p>
                    <p className="price">$ 100.00</p>
                </div>
                <div className="wishlish-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src="images/prodcompare.svg" alt="cross" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="add-car" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ProductCard