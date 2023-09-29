import React, { useState } from "react"
import ReactStars from "react-rating-stars-component"
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import ProductCard from "../../components/ProductCard/ProductCard"
import "../OurStore/OurStore.css"

const OurStore = () => {
  const [grid, setGrid] = useState(3)
  return (
    <>
      <Meta title={"Our Store"}/>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Categories</h3>
                <div className="filter-categories">
                  <ul className="ps-0">
                    <li>Laptop</li>
                    <li>SmartPhone</li>
                    <li>SmartWatch</li>
                    <li>Headphones</li>
                    <li>Camera</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                      Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="To" />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Color</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-1" />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-2" />
                      <label className="form-check-label" htmlFor="color-2">
                        M (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speaker</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img className="img-fluid" src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>
                          Kids headdphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                      <p className="price">$ 100.00</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img className="img-fluid" src="images/watch.jpg" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>
                          Kids headdphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                      <p className="price">$ 100.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{"width": "100px"}}>Sort By:</p>
                    <select className="form-control form-select" name="" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-asc">A-Z</option>
                      <option value="title-des">Z-A</option>
                      <option value="price-asc">High</option>
                      <option value="price-des">Low</option>
                      <option value="created-asc">New</option>
                      <option value="created-des">Old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img className="d-block img-fluid" src="images/gr4.svg" alt="grid" onClick={() => {setGrid(3)}}/>
                      <img className="d-block img-fluid" src="images/gr3.svg" alt="grid" onClick={() => {setGrid(4)}}/>
                      <img className="d-block img-fluid" src="images/gr2.svg" alt="grid" onClick={() => {setGrid(6)}}/>
                      <img className="d-block img-fluid" src="images/gr.svg" alt="grid" onClick={() => {setGrid(12)}}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex flex-wrap gap-10">
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore