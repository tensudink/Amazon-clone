import {Carousel} from "react-responsive-carousel"
import {img} from "./img/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showInndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })
        }
      </Carousel>
      
    </div>
  )
}

export default CarouselEffect