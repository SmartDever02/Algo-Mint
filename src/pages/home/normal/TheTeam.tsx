import LightOver from '../../../components/home/ShiningPanel';
import TeamMember from './TeamMember';

const TheTeam = ({ width }: any) => {
  return (
    <div className='relative w-full h-[72.1875vw]'>
      <div
        className='mt-[20vw] w-full bg-white mix-blend-soft-light'
        style={{ height: width > 640 ? '115%' : '150vw' }}
      ></div>
      <LightOver width={width} ratio={width > 640 ? 0.73 : 1.4} />
      <div className='pt-[5vw] px-[22vw] sm:px-[12vw] w-full h-full absolute top-0'>
        <div className='w-full pt-[3vw] sm:pt-[1vw] text-white font-bold text-[3.333vw] text-center uppercase mb-[3.525vw]'>
          the team
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-[15vw] sm:gap-[10.25vw] pt-[1vw]'>
          <TeamMember name='Full Name' subname='Full Name' />
          <TeamMember name='Full Name' subname='Full Name' />
          <TeamMember name='Full Name' subname='Full Name' />
          <TeamMember name='Full Name' subname='Full Name' />
          <TeamMember name='Full Name' subname='Full Name' />
          <TeamMember name='Full Name' subname='Full Name' />
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
