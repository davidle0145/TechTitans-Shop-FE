import React from "react"
import { Link } from "react-router-dom"
import "../BlogCard/BlogCard.css"

const BlogCard = () => {
  return (
    <>
        <div className="blog-card">
            <div className="card-image">
                <img className="img-fluid w-100" src="images/blog-1.jpg" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">26 Sep, 2023</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime at voluptates doloribus omnis sapiente vero.
                </p>
                <Link className="button" to="/">
                    Read More
                </Link>
            </div>
        </div>
    </>
  )
}

export default BlogCard