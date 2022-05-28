/*const myclousers= (x,y) =>{
    return{
        multiply(){z=x*y; return z },
        division(){z=x/y ; return z},
        adding(){z=x+y ; return z},
        subtract(){z=x-y; return z}
    }
}

const a= myclousers(5,4)
console.log(a.adding())
console.log(a.subtract())
console.log(a.division())
console.log(a.multiply())*/

/*const checkdata= (val1,val2, cb) =>{
    if(val1>=val2) cb("that is a  great number", false)
    else cb(false, "less number")
}

checkdata(5,20,(success,err)=>{
    if(success) console.log("sussess :",success);
    else console.log("error:",err );
})
*/
/*console.log(1)
setTimeout(()=>{console.log(2)},1000)
setTimeout(()=>{console.log(3)},500)
console.log(4)*/

//console.log("hello")
// function x(){
//     return function(){
//         return function(){
//             console.log("hello")
//         }    
//     }
// }
// x()()()

//clousers
// const myClouser = (x) =>{
//     //let x = 5
//     return {
//         x,
//         upWord(){ x+=1; return x},
//         backWord() { x-=1; return x},
//         show(){return x}
//     }
// }
// const a = myClouser(5) //{x:5, upWord:function, back(), show()}
// console.log(a);
// console.log(a.upWord()); // global x = 6  {x:5, upWord:function, back(), show()}
// console.log(a.x); //x=5
// console.log(a.show())
// const b1 = myClouser(13)
// const user = (name, age, job) => {
//     return{
//         increaseAge(){ age+=1 },
//         showData(){ console.log(name, age, job);}
//     }
// }
// const maged = user(maged, 23, "developer")
// maged.showData()
// maged.increaseAge()
// maged.showData()

//callback
// const checkData = (val, cb) =>{ // success err
//     if(typeof val=="number")  cb("tamam", false)
//     else cb(false, 'msh tman')
// }

// checkData(50, (success, err)=>{
//     if(success) console.log("success->",success);
//     else console.log("err->",err);
//     //console.log("success->",success, "& err-> ", err);
// })

// console.log(1)
// setTimeout(()=>{console.log(2)}, 1000)
// setTimeout(()=>{console.log(3)}, 500)
// console.log(4)

//promises
/*
const myPro =(val)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(val>5) resolve("hello")
            else reject("fe moshkela")
        },1500)
    })
}
//then catch
// myPro(4)
// .then(data => {
//     console.log(data)
// })
// .catch(e=>{
//     console.log(e)
// })
// console.log("test")
// console.log(myPro(4))

//async await
let a = async () => {
    try{
        const x = await myPro(50)
        const y = await myPro(x)
        console.log(x)    
    }
    catch(e){
        console.log(e)
    }
}
a()*/