import Image from "next/image";
import React from 'react';

// export default function Home() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// Home.jsx

// import React from "react";
// import Header from "//components/layout/Header";
// import Footer from "//components/layout/Footer";
// import Hero from "//components/Hero";
// import Categories from "//components/Hero";

// const Home = () => {
//   return (
//     <div>
//       {/* Header Component */}
//       <Header />

//       {/* Hero Section */}
//       <Hero />

//       {/* Categories Section */}
//       <Categories />

//       {/* Footer Component */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;



function BlogSection() {
  const blogs = [
    {
      id: 1,
      img: "/b1.png",
      author: "Uzair",
      date: "21 August, 2024",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875", // Blue color for title
    },
    {
      id: 2,
      img: "/b2.png",
      author: "Uzair",
      date: "21 August, 2024",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#FB2E86", // Pink color for title and "Read More"
    },
    {
      id: 3,
      img: "/b3.png",
      author: "Uzair",
      date: "21 August, 2024",
      title: "Top Essential Trends in 2020",
      description: "More off this less hello samlande lied much over tightly circa horse taped mightly.",
      titleColor: "#151875", // Blue color for title
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <h2 className="text-center text-[#151875] text-3xl font-bold mb-12">Latest Blog</h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col items-start">
            {/* Blog Image */}
            <div className="w-full h-[300px] relative rounded-lg shadow-md bg-white p-2">
              <Image
                src={blog.img}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Author and Date */}
            <div className="flex items-center space-x-2 mt-4">
              {/* Pen Icon */}
              <Image src="/vector1.png" alt="Pen" width={16} height={20} />
              <span className="text-[#151875] font-medium">{blog.author}</span>
              {/* Calendar Icon */}
              <Image src="/vector2.png" alt="Calendar" width={16} height={20} />
              <span className="text-[#151875] font-medium">{blog.date}</span>
            </div>

            {/* Blog Title */}
            <h3 className="font-bold text-lg mt-4" style={{ color: blog.titleColor }}>
              {blog.title}
            </h3>

            {/* Blog Description */}
            <p className="text-gray-600 mt-2">{blog.description}</p>

            {/* Read More */}
            <button
              className="underline text-sm font-medium mt-4"
              style={{ color: blog.titleColor }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;