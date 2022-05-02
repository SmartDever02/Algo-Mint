import getD from '../../helpers/getD';

const LightOver = ({ width, ratio, mode }: any) => {
  console.log(width);
  const points = [
    { y: 10, x: 0 },
    { y: width * ratio, x: 0 },
    { y: width * 0.157, x: width },
    { y: 10, x: width },
    { y: 10, x: width * 0.88 },
    { y: mode === 'MD_LAST' ? 15 : 30, x: width * 0.85 },
    { y: mode === 'MD_LAST' ? 15 : 30, x: width * 0.251 },
    { y: mode === 'MD_LAST' ? 15 : 15, x: width * 0.22 },
    { y: mode === 'MD_LAST' ? 10 : 15, x: width * 0.188 },
    { y: 15, x: width * 0.188 - 15 },
    { y: 15, x: 30 },
  ];
  const d = getD(points);
  return (
    <div
      className={
        mode === 'MD_LAST'
          ? 'absolute top-0 pl-[0.3vw] pt-[2.55vw]'
          : 'absolute top-0 pl-[0.3vw] pt-[1.55vw] '
      }
    >
      <svg
        width={width}
        height={width * ratio}
        style={{ mixBlendMode: 'overlay', opacity: 0.5 }}
      >
        <path d={d} fill='white' />
      </svg>
    </div>
  );
};

interface propsType {
  className: any;
}

export default LightOver;
