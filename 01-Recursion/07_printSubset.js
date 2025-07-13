function printSubset(ip, op = []) {
  if (ip.length == 0) {
    console.log(op);
    return 1;
  }
  const op1 = [...op];
  const op2 = [...op];
  op2.push(ip[0]);
  ip.shift();
  return printSubset([...ip], op1) + printSubset([...ip], op2);
}
str = "abc";
ip = str.split("");
console.log(printSubset(ip));
