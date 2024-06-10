import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Carrusel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    "https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_640.jpg",
    "https://cdn.pixabay.com/photo/2020/09/30/12/18/books-5615562_640.jpg",
    "https://cdn.pixabay.com/photo/2016/11/20/08/58/books-1842261_640.jpg",
    "https://cdn.pixabay.com/photo/2019/06/29/05/42/books-4305459_640.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/02/26/library-1866844_640.jpg",
  ];

  return (
    <div>
      <Carousel responsive={responsive}>
      {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carrusel item ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
