// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function Container() {
//   const [banner, setBanner] = useState(null);

//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const response = await axios.get("https://6861266f8e74864084451241.mockapi.io/Banner");
//         if (response.data.length > 0) {
//           setBanner(response.data[0]); // Pehla item le rahe hain
//         }
//       } catch (error) {
//         console.error("Error fetching banner", error);
//       }
//     };

//     fetchBanner();
//   }, []);

//   return (
//     <div className="header-section-main">
//       <div className="container">
//         <p>{banner ? banner.Heading : "Loading heading..."}</p>
//         <h2>
//           {banner ? banner.Paragraf : "Loading paragraph..."}
//         </h2>
//         <button className="btn1">Shop Now</button>
//         <button className="btn2">Learn More</button>
//       </div>
//     </div>
//   );
// }


// //////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./Slider.css"; // Make sure to create and link this CSS file

export default function Container() {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://6861266f8e74864084451241.mockapi.io/Banner")
      .then((res) => setSlides(res.data))
      .catch((err) => console.error(err));
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goTo = (i) => setIndex(i);

  return (
    <div className="slider-wrapper">
      <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((item, i) => (
          <div className="slide" key={i}>
            <div className="content">
              <h2>{item.Heading}</h2>
              <p>{item.Paragraf}</p>
              <div className="buttons">
                <button className="btn1">Shop Now</button>
                <button className="btn2">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="nav prev" onClick={prevSlide}>‹</button>
      <button className="nav next" onClick={nextSlide}>›</button>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => goTo(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}


