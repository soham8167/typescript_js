interface UserForm {
    name: string,
    desc: string,
    email:string,
    phone: number,
    gender: "male" | "female",
    check: boolean,
    profession: string
}

let formData: UserForm={
    name: "",
    desc: "",
    email:"",
    phone: 0,
    gender: "male",
    check: false,
    profession: ""
}

let userList : FormData[]=[];