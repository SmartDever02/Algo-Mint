import { useEffect, useState } from 'react';
import HomeLayout from '../../components/layout/home';
//import components
import AlgoCoin from './normal/AlgoCoin';
import SmAlgo from './sm/smAlgoCoin';
// import images
import BigWelcome from './normal/BigWelcome';
import Collabration from './normal/Collabration';

//import carouse images
import images from '../../helpers/getCarouselImages';
import TheTeam from './normal/TheTeam';
import Join from './normal/JoinPanel';
import Welcome from './normal/Welcome';
import AlgoBack from './normal/AlgoBack';

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth - 9.5);

  const resizeHanlder = () => {
    const width = window.innerWidth - 9.5;
    setWidth(width);
  };
  useEffect(() => {
    window.onresize = resizeHanlder;
  });
  return (
    <HomeLayout width={width}>
      <AlgoBack />
      <Welcome />
      {/* <Carousel items={images} activeIndex={0} direction={''} /> */}
      {window.innerWidth >= 768 ? (
        <AlgoCoin width={((width - 15) * 5) / 6} />
      ) : (
        <SmAlgo />
      )}
      <BigWelcome />
      <Collabration />
      <TheTeam width={width} />
      <Join width={width * 0.87} />
    </HomeLayout>
  );
};
export default Home;
