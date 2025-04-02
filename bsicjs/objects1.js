// const tinderusre = new tinderusre() singleton 
const tinderuser = {}
tinderuser.id="1234abc",
tinderuser.name="vikky",
tinderuser.islogged=true
//console.log(tinderuser)
/* output
{ id: '1234abc', name: 'vikky', islogged: false }
*/
const regularuser=
{
  email:"abc@gmail.com",
  fullname:{
  username:{
    fisrtname:"vikky",
    lastname:"kumar"
  }
  }
}
/*
console.log(regularuser)
console.log(regularuser.fullname)
console.log(regularuser.fullname.username)
console.log(regularuser.fullname.username.fisrtname)
console.log(regularuser.fullname.username.lastname)

************************************** ouput ********************************
{
  email: 'abc@gmail.com',
  fullname: { username: { fisrtname: 'vikky', lastname: 'kumar' } }
}
{ username: { fisrtname: 'vikky', lastname: 'kumar' } }
{ fisrtname: 'vikky', lastname: 'kumar' }
vikky
undefined
*/
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3 = { obj1 , obj2 }
//console.log(obj3)
//ouput:  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


const obj4=Object.assign({},obj1 ,obj2 )
//console.log(obj4)
//ouput:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj5={...obj1 , ...obj2}
//console.log(obj5)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("islogged"))


