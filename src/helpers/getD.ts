export default function getD(T: any) {
  var d = 'M';
  for (let i = 0; i < T.length; i++) {
    d += T[i].x + ' ' + T[i].y;
    if (i === T.length - 1) {
      d += ' Z';
    } else {
      d += ' L';
    }
  }
  return d;
}
