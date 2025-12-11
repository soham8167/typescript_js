  let userList =[];
  const save = localStorage.getItem("userList")
 if(save){
    userList=JSON.parse(save)

 }
 const handleSubmit =(event)=>{
            event.preventDefault()
            console.log("submitted");
           
            
const form = event.target;

    const name = form.name.value;
    const desc = form.desc.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const checkbox = form.check.checked;
    const profession = form.profession.value;

    let userDetails ={name,email,desc,phone,gender,profession,checkbox}
   
    
            userList.push(userDetails);
            //console.log(userList);
            
            localStorage.setItem("userList", JSON.stringify(userList))
            console.log(userList);
            
 }
 