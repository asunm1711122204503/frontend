//variables
//local global bock
//primitive and non primitive
//number boolean string symbol undefined null
//non primitive -> array objects
let a =symbol("varun");
let k = 13;
let k1 = 15;
console.log(b);

//array
let a = [ 14, 23, 34, 45, 56, "varun"];
console.log(a[56]);
a[2] = 36;
a[6] = 67;
a[16] = 78;
console.log(a);
console.log(a.length);

//shallow copy
let c = b;
c[1] = 18;
b[1] = 18;
console.log(b[1]);
console.log(c[1]);

//object key value pair -> maths -> 90
let obj = { name:"js", class:"frontend",marks:[45,55,66] };
object.seal(obj);
object.freeze(obj);
let obj1 = obj;
obj["name"] = "updated";
obj1["name"] = "obj1 changes"
obj[null]="testing"
console.log(obj[null]);
console.log(obj["name"]);
console.log(object.key(obj));
console.log(object.value(obj));


