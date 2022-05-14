

//Email pattern.........

let txt1 ="gname121@gmail.com";

let pattern1 = /^[a-z0-9\._]*@[a-z0-9]*\.[a-z]{2,5}$/ ;

console.log(pattern1.test(txt1));

//Username pattern..............


let txt2 ="Ayesha789" ;

let pattern2 = /^[a-zA-Z0-9]{5,12}$/;

console.log(pattern2.test(txt2));


//Bangladeshi phone number pattern.............

let txt3 ="01717700819";

let pattern3 = /^(01| 8801 |\+8801)[0-9]{9}$/ ;

console.log(pattern3.test(txt3));

//Password pattern.......................

let txt4 ="paSSwoRd456";

let pattern4=/^[a-zA-Z0-9]{8,20}$/ ;

console.log(pattern4.test(txt4));

//Zipcode pattern.......................

let txt5 ="1640";

let pattern5 =/^[0-9]{4}$/ ;

console.log(pattern5.test(txt5));
