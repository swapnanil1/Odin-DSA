let stepCount = 0;
function tower(s, h, d, n) {
  if (n === 1) {
    stepCount++;
    console.log(`Moved Disk 1 from ${s} to ${d} : step count = ${stepCount}`);
    return;
  }

  tower(s, d, h, n - 1);
  stepCount++;
  console.log(`Moved Disk ${n} from ${s} to ${d} : step count = ${stepCount}`);
  tower(h, s, d, n - 1);
}
tower("A", "B", "C", 3);

//  JavaScript uses pass-by-value for primitive types so passing stepCount via
// fn call is passing by copy of value not the reference to stepCount itself
// this is why my first approch won't work

// function tower(s, h, d, n, stepCount = 0) {
//   if (n == 1) {
//     console.log(
//       `Moved Disk ${n} from source to destination : step count =${stepCount}`
//     );
//     return;
//   }
//   tower(s, d, h, n - 1, stepCount + 1);
//   console.log(`Moved Disk ${n} from source to helper : step count =${stepCount}`);
//   tower(h, s, d, n - 1, stepCount + 1);
// }
