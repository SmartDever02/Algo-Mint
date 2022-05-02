import welcomeBack from '../../../images/home/welcome.svg';
import back from '../../../images/home/smWelcome/back.svg';
import backOver from '../../../images/home/smWelcome/backOver.svg';

const Welcome = () => {
  return (
    <div className='flex justify-center mb-[15vw] lg:mb-[18.75vw]'>
      <div className='w-[82.7%] relative'>
        <img src={welcomeBack} alt='' />
        <img
          src={back}
          alt=''
          className='absolute top-0 mix-blend-soft-light'
        />
        <img
          src={backOver}
          alt=''
          className='absolute top-0 mix-blend-overlay '
        />
        <div className='z-2 absolute top-0 w-full h-full flex flex-col items-center justify-between py-[7vw]'>
          <span className='text-white text-[4.37vw] leading-[4.5vw] font-bold w-[60%] text-center'>
            WELCOME TO THE ALGO LEAGUES
          </span>
          <span className='text-white text-[1.875vw] leading-[1.9vw] font-bold w-[75%] text-center'>
            Join us on epic battle NFT game built on the Algorand Blockchain.
            Where you choose to be a hero or a villain. Players get to play the
            role of any one of the Legends in the making. Where you fight to
            solve the blockworlds finacial crisis and game trilemma. As you
            discover the story that unfoldes.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
