import '../Styles.css';
import principal from '../principal.jpeg';

function Carousel() {
  return (
    <div className="container pt-4 pb-4">
          <div id="carouselExampleControls" class="carousel slide box-shadow" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={principal} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={principal} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={principal} class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  );
}

export default Carousel;