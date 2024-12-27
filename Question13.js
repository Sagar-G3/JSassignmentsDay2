let studentScore = [50, 40, 93, 60, 84, 78, 45, 32, 90, 75];

let count = 0;

for(let i=0; i<studentScore.length; i++){

  if(studentScore[i] < 40){
   studentScore[i]+=20;
  }
  else if(studentScore[i] > 90){
   studentScore[i]=90;
  }
  else if(studentScore[i] >= 50){
    count++
  }
}
console.log(count);
console.log(studentScore);