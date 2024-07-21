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
    "https://i.pinimg.com/564x/57/ab/e3/57abe3d06a6c9c6de5f5f51397b831c9.jpg",
    "https://i.pinimg.com/564x/61/8e/4a/618e4a34df21cf4e7451ee2447566920.jpg",
    "https://i.pinimg.com/564x/6a/bf/06/6abf06d47414154754c82d1de6289ddd.jpg",
    "https://i.pinimg.com/564x/e8/e8/f8/e8e8f8b710d6b2d2330ddab1c23ac3f5.jpg",
    "https://i.pinimg.com/564x/2f/92/16/2f921649e520354add34cac9af4e4fc4.jpg",
    "https://i.pinimg.com/564x/e3/fd/69/e3fd697514de07578d5e3d2b1ca51d79.jpg",
    "https://i.pinimg.com/564x/6d/0d/1f/6d0d1f681f8b073bf1ef9a57db01b10c.jpg",
  ];

  return (
    <div>
      <Carousel responsive={responsive} infinite={true}>
      {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carrusel item ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
