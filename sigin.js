let form=document.querySelector("#forms")
 form.addEventListener("submit",myfun)
//  let emailArr=JSON.parse(localStorage.getItem("email")) || []
  function myfun(e){
 e.preventDefault()
       console.log("shivam")
        let email=form.email.value
        if(email==""){
              document.querySelector("#emails").innerText="fill the email"  
        }
        else{
      //   emailArr.push(email)
        localStorage.setItem("email",email)
        window.location.href="account.html"
        }
  }

 