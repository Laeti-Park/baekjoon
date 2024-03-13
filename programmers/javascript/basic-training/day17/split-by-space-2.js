// https://school.programmers.co.kr/learn/courses/30/lessons/181868

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myString = '';

rl.on('line', (line) => {
  myString = line;
  rl.close();
}).on('close', () => {
  const answer = solution(strArr);
  console.log(answer);
});

const solution = myString => {
  return myString.replace(/ +/g, ' ')
    .split(' ')
    .filter(str => str !== '');
};