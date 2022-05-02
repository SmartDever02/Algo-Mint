import Name from '../../../components/home/MemberName';
import user from '../../../images/home/partner/user.svg';

const TeamMember = (props: any) => {
  return (
    <div className='h-[24.5vw] pb-[10vw] relative flex item-center flex-col'>
      <div className='w-full p-[50%] rounded-[1000px] bg-[#F1F9FF]'></div>
      <div className='w-[80%] mx-auto h-[16.4vw] sm:h-[13vw] avatar absolute top-[1.7vw] left-[11%] flex flex-col items-center justify-center'>
        <img
          src={user}
          alt=''
          className='w-[9.84375vw] scale-[1] sm:scale-[0.9]'
        />
      </div>
      <Name name={props.name} subname={props.subname} />
    </div>
  );
};

export default TeamMember;
