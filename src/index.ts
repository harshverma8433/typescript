
let a : number = 12;

let b : string = "Harsh Verma";

let c : boolean = true;


console.log(a);
console.log(b);
console.log(c);


let num = <number>124;
console.log(num);


let str_num : number | string

str_num = "aa"




// what type a function return
const func = (n:number , m:number):number => {
    return (n*m);
}


// defined the type of variables and what type a function return
type func1 = (n:number , m:number) => number

const funcname:func1 = (n , m) => {
    return n*m;

}


// Arrays
const arr : number[] = [2,3,5,6 ]

const arr1 : Array<string | number> = ["s" , 3]

//  Objects

type Obj = {
    height : number,
    weight : number,
    gender ?: boolean
} 

const obj : Obj = {
    height:34,
    weight:33,
    gender:false
}

const obj2 : Obj = {
    height:34,
    weight:33
}

interface newobj {
    haircolor:string,
    eyecolor:string,
    gender ?: string
}

interface newobj1 extends newobj{
    height:number
} 

const object:newobj1 = {
    height:32,
    haircolor:"blue",
    eyecolor:"red"
}

// optional parameter

type typefunc3 = (n:number,m:number,l?:number) => number;

const func4 : typefunc3 = (n,m,l) => {
    if(l === undefined){
        return n*m;
    }
    return n*m*l;
}

console.log(func4(3,4));
console.log(func4(3,4,5) );


// Default parameter

type typefunc4 = (n:number,m:number,l?:number) => number;

const func5 : typefunc4 = (n,m,l=10) => {

    return n*m*l;
}

console.log(func5(3,4));
console.log(func5(3,4,5) );


// rest operator

type typefunc5 = (...m:number[]) => number[];

const func6:typefunc5 = (...m) => { 
    return m;
}



// function with objects

interface productType  {
    name : string,
    price:number,
    image:string,
    readonly id : number
}

type typeofProducts = (product:productType) => void;

const getProduct:typeofProducts = (products) => {
    // products.id = 2345 // cannot assign because it is only readable not changeable

    console.log(products.name);
    
}

const p ={
    name:"mac",
    price:2345656,
    image:"image.jpg",
    id : 44533
}

getProduct(p);


// Never type
const errorHandler = ():never => {
    throw new Error() // throw return never 
}
