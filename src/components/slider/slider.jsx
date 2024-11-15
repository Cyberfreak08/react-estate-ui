// import { useState } from "react";
// import "./slider.scss";

// const Slider = ({ images }) => {
//   const [imageIndex, setImageIndex] = useState(null);
//   const changeSlide = (direction) => {
//     if (direction === "left") {
//       if (imageIndex === 0) {
//         setImageIndex(images.length - 1);
//       } else {
//         setImageIndex(imageIndex - 1);
//       }
//     } else {
//       if (imageIndex === images.length - 1) {
//         setImageIndex(0);
//       } else {
//         setImageIndex(imageIndex + 1);
//       }
//     }
//   };
//   return (
//     <div className="slider">
//       {imageIndex !== null && (
//         <div className="fullSlider">
//           <div className="arrow" onClick={() => changeSlide("left")}>
//             <img src="/arrow.png" alt="" />
//           </div>
//           <div className="imgContainer">
//             <img src={images[imageIndex]} alt="" />
//           </div>
//           <div className="arrow" onClick={() => changeSlide("right")}>
//             <img className="right" src="/arrow.png" alt="" />
//           </div>
//           <div className="close" onClick={() => setImageIndex(null)}>
//             X
//           </div>
//         </div>
//       )}
//       <div className="bigImage" onClick={() => setImageIndex(0)}>
//         <img src={images[0]} alt="" />
//       </div>
//       <div className="smallImages">
//         {images.slice(1).map((image, index) => (
//           <img
//             src={image}
//             alt=""
//             key={index}
//             onClick={() => setImageIndex(index + 1)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;


import { useState } from "react";
import "./slider.scss";

const Slider = ({ images, onToggle }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0); // Default to the first image

  const openFullScreen = () => {
    setIsFullScreen(true);
    if (onToggle) onToggle(true); // Notify parent to hide other elements
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
    if (onToggle) onToggle(false); // Notify parent to show other elements
  };

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };

  return (
    <div className="slider">
      {isFullScreen && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="Left Arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt={`Slide ${imageIndex}`} />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img className="right" src="/arrow.png" alt="Right Arrow" />
          </div>
          <div className="close" onClick={closeFullScreen}>
            X
          </div>
        </div>
      )}
      {!isFullScreen && (
        <>
          <div className="bigImage" onClick={() => { setImageIndex(0); openFullScreen(); }}>
            <img src={images[0]} alt="Main Thumbnail" />
          </div>
          <div className="smallImages">
            {images.slice(1).map((image, index) => (
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                key={index}
                onClick={() => {
                  setImageIndex(index + 1);
                  openFullScreen();
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
