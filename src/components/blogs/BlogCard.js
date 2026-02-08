import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./BlogsCard.scss";

export default function BlogCard({ blog }) {
  const GetDescBullets = ({ descBullets }) =>
    descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;

  return (
    <div>
      <Fade left duration={1000}>
        <div className="blog-card">
          {/* SAME ROLE AS education-card-right */}
          <div className="blog-card-right">
            <h5 className="blog-title">{blog.title}</h5>

            <p className="blog-platform">
              {blog.platform} • {blog.date}
            </p>

            <div className="blog-desc-bullets">
              <ul>
                <GetDescBullets descBullets={blog.descBullets} />
              </ul>
            </div>

            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-read-more"
            >
              Read on Medium →
            </a>
          </div>
        </div>
      </Fade>

      <Slide left duration={2000}>
        <div className="blog-card-border"></div>
      </Slide>
    </div>
  );
}
