let arr = ["Complete project timeline", "Finalize team assignments", "Review", "approve project budget", "Prepare project status report"];

arr.shift("Complete project timeline");
arr.unshift("Project Planning", "Team Formation");
arr[5]= "Budgeting";

console.log(arr);