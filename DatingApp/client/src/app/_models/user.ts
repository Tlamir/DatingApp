 export interface User {
    username: string;
    token: string;
}
 
let data:number|string =42;
data =10;
data ="10";

interface Car{
    color: string;
    model: string;
    topSpeed?: number;
}

const car1:Car={
    color:'blue',  //Because of the Interface car now we have typesafety
    model:'BMW',
}
const car2: Car={
    color:'red',
    model:'Mercedes',
    topSpeed: 100
}

const multiply=(x:number,y:number) =>{
     x*y;
}