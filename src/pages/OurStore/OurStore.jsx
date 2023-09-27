import React from "react"
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import "../OurStore/OurStore.css"

const OurStore = () => {
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
                      <label className="form-check-label" for="flexCheckDefault">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label" for="flexCheckChecked">
                      Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  
                  <h5 className="sub-title">Color</h5>

                  <h5 className="sub-title">Size</h5>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>

              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>

              </div>
            </div>
            <div className="col-9">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore