import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../resources/style/nft-carousel.css';

//import carousel images;
import images from '../../helpers/getPartnerImages';

const PartnerCarousel = () => {
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='w-[100vw] mx-auto absolute top-[9.8vw] left-0'>
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img alt='' src={image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PartnerCarousel;
