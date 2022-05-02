export default function getPoints(T: any) {
  var d = '';
  for (let i = 0; i < T.length; i++) {
    d += T[i].x + ',' + T[i].y;
    if (i < T.length - 1) d += ' ';
  }
  return d;
}
