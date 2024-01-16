const date1 = new Date('1/9/2024');
const date2 = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
document.getElementById("daycount").innerHTML = diffDays + " days";
