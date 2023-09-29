import React from "react"
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import {AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineInfoCircle} from "react-icons/ai"
import "../Contact/Contact.css"

const Contact = () => {
  return (
    <>
      <Meta title={"Blogs"}/>
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7668.128206055818!2d108.20484199566846!3d16.06216299858353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b39940d225%3A0xa282c73bb88e89df!2sTh%E1%BA%A1c%20Gi%C3%A1n%2C%20Thanh%20Kh%C3%AA%20District%2C%20Da%20Nang%20550000%2C%20Vietnam!5e0!3m2!1sen!2s!4v1695975765510!5m2!1sen!2s"
              className="border-0 w-100" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder="Phone Number"/>
                    </div>
                    <div>
                      <textarea className="form-control w-100" name="" id="" cols="30" rows="4" placeholder="Comments"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div className="information">
                    <ul className="ps-0">
                      <li className="mb-4 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5"/>
                        <address className="mb-0">No. 150 Nguyen Van Linh, Nam Duong, Hai Chau, Da Nang 550000</address>
                      </li>
                      <li className="mb-4 d-flex gap-15 align-items-center">
                        <AiOutlinePhone className="fs-5"/>
                        <a href="tel:+84 364857009">+84 364857009</a>
                      </li>
                      <li className="mb-4 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:ledat10b8@gmail.com">techtitans328@gmail.com</a>
                      </li>
                      <li className="mb-4 d-flex gap-15 align-items-center">
                        <AiOutlineInfoCircle className="fs-5"/>
                        <p className="mb-0">Monday - Friday, 09 AM - 08 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact