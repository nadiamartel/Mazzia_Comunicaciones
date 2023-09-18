const Carousel = ({ sliders }) => {
  return (
    <div
      id="carouselAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <a href={sliders.slider1.url}>
            <img
              src={sliders.slider1.image}
              className="d-block w-100"
              alt="slider1"
            />
          </a>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <a href={sliders.slider2.url}>
            <img
              src={sliders.slider2.image}
              className="d-block w-100"
              alt="slider2"
            />
          </a>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <a href={sliders.slider3.url}>
            <img
              src={sliders.slider3.image}
              className="d-block w-100"
              alt="slider3"
            />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
