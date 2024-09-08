import React from "react";
import "./Public.css";

const posts = [
  {
    id: 1,
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
    title: "New Gadgets Released",
    description:
      "Lorem ipsum adipisicing elit. Non nobis voluptatibus sed cupiditate blanditiis accusamus illum quidem id provident doloribus?",
    userDetails: "User Details",
  },
  {
    id: 2,
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
    title: "Tech Trends 2024",
    description:
      "Discover the latest trends in technology for 2024. Stay ahead with the most recent innovations and updates.",
    userDetails: "User Details",
  },
  {
    id: 3,
    imageSrc: "https://via.placeholder.com/150", // Placeholder image
    title: "Product Launch Highlights",
    description:
      "Catch up on the highlights from our recent product launch event. Learn about the new features and improvements.",
    userDetails: "User Details",
  }
];

const Public = () => {
  return (
    <div className="outer-container">
      <div className="gridcontainer">
        {posts.map((post) => (
          <div className="griditem" key={post.id}>
            <div className="innergrid">
              <div className="innergriditem innergriditem1">
                <img src={post.imageSrc} alt="Post" />
              </div>
              <div className="innergriditem innergriditem2 text-pink-600 font-bold font-serif">
                {post.title}
              </div>
              <div className="innergriditem innergriditem3">
                {post.description}
              </div>
              <div
                className="innergriditem innergriditem4 text-blue-600 font-medium font-serif cursor-pointer
                    hover:scale-100 hover:text-white hover:bg-blue-400 transform transition-all duration-300 ease-in-out hover:rounded-t-none"
              >
                Read Full Article
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Public;
