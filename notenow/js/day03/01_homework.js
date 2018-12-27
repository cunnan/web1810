//4年一闰，100年不闰，400年再闰
var year=2400;
//能被4整除，并且不能被100整除，或者能被400整除
//console.log(year%4==0 && year%100!=0 || year%400==0);
year%4==0 && year%100!=0 || year%400==0 ? console.log('是闰年') : console.log('不是闰年');