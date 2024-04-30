// //Infer types (Implicit Types)

// // let userName = "Nandhu"
// // let subscriber = 30_000;

// //Defining Types (Explixit Types)

// let userName: string = "Nandhu"
// let subscriber: number =  3000

// let isSubscribed: boolean = true;
// let skills: string[] = ["A","B","C","D"]
// let count: number[] = [1,2,3,4,5]

// let userDetails:{name:string, age:number} = {
//     name:"Nandhu",
//     age:21
// }

// userDetails.age = 22

//Interface

// interface Details {
//     name:string;
//     age:number;
//     salary:number;
//     getName: ()=> void
// }

// // let userDetails:{name:string, age:number, salary:number} = {
// let userDetails:Details = {
//     name:"Nandhu",
//     age:21,
//     salary: 100000,
//     getName(){
//         console.log(this.name)
//     }
// }

// let adminDeatils:Details = {
//    name:"Admin",
//    age:27,
//    salary:1000,
//    getName() {
//        console.log(this.name)
//    },
// }

// Type

// type Details = {
//     name: string;
//     age:number;
//     salary:number;
//     getName: ()=> void
// }

// let adminDeatils: Details = {
//    name:"Admin",
//    age:27,
//    salary:1000,
//    getName() {
//        console.log(this.name)
//    },
// }

//Union

// type Details = {
//     name: string;
//     age:number | string;
//     salary:number;
//     getName: ()=> void
// }

// let adminDeatils: Details = {
//     name:"Admin",
//     age:"Non disclosable",
//     salary:1000,
//     getName() {
//         console.log(this.name)
//     },
//  }

//  let gean: ( string|number|boolean )[] = ["A","B","C","D",1,2,3,4,5,false]

//Optional 

// type Details = {
//     name: string;
//     age:number | string;
//     salary:number;
//     getName: ()=> void
// }

// let adminDeatils: Details = {
//     name:"Admin",
//     age:"Non disclosable",
//     salary:1000,
//     getName() {
//         console.log(this.name)
//     },
    
// }

//Function 
// type Details = {
//     name: string;
//     age:number | string;
//     salary:number;
//     getName: ()=> void
// }

// let adminDeatils: Details = {
//     name:"Admin",
//     age:"Non disclosable",
//     salary:1000,
//     getName() {
//         console.log(this.name)
//     },
    
// }

// function getUserName({name , age}: {name: string ; age:number}){
//     return name
// }


// getUserName({
//     name:"Nandhu",
//     age:21
// })

// function getUserName (adminDeatils : Details): string {
//     return adminDeatils.name
// }

// const newValue = getUserName (adminDeatils)



// Named Types

// type StatusType = "pending" | "completed" | "failed"

// let currentStatus:StatusType = "completed"

// type ToggleSwitch = "on" | "off" ; 

// let toggleSwitch: ToggleSwitch = "off" //we initialized a toggle button as OFF


//Some Complex topic 

// function add(num1 : any, num2: any):any {
//     return num1 + num2
// }

// add(2,2)
// add("3","3")

//This is function overLoading 

// function add(num1:number, num2:number):number ;
// function add(num1:string, num2:string):string ;
// function add(num1 : any, num2: any):any {
//     return num1 + num2
// }

// add(2,2)
// add("3","3")


//To solve th function overLoading we use Generics 
// the function which hawe this  <>  is called generics function (<T>)

// function getAge<T> (age:T): T {
//     return age
// }

// getAge<string>("20")
// getAge<number>(20)
// getAge<boolean>(true)

// type UserDetail = {
//      name: string,
//      age: number
// }

// type AdminDetail = {
//     firstName: string,
//     role:string,
// }

// const userDetails: UserDetail = {
//     name:"Nandhu",
//     age: 21,
// }

// const adminDeatils: AdminDetail = {
//      firstName:"Nandhu",
//      role: "admin",
// }


// function getDetails <T>(details:T): T{
//     return details
// }

// const userValue = getDetails<UserDetail>(userDetails)
// const adminValue = getDetails<AdminDetail>(adminDeatils)

// userValue.age
// adminValue.role



// to avoid DRY
// type UserDetail = {
//     name: string,
//     age: number
// }

// type AdminDetail = {
//    name: string,
//    age:number,
//    role:string,
// }

//Don't need to write like this we can write like  > 

// type AdminDetail = UserDetail & {
//     role:string
// }

// In interface 

// interface AdminDetail extends UserDetail {
//     role:string
// }


// Interace only take objects but type takes both object and values
