const Carousel = ({ sliders }) => {
  return (
    <div
      id="carouselAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <a href={sliders.slider1.url}>
            <img
              src={sliders.slider1.image}
              class="d-block w-100"
              alt="slider1"
            />
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <a href={sliders.slider2.url}>
            <img
              src={sliders.slider2.image}
              class="d-block w-100"
              alt="slider2"
            />
          </a>
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <a href={sliders.slider3.url}>
            <img
              src={sliders.slider3.image}
              class="d-block w-100"
              alt="slider3"
            />
          </a>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
