let email=localStorage.getItem("email")

let emails=document.querySelector("#email")
emails.innerText=email

let form=document.querySelector("#forms")

       form.addEventListener("submit",myfun)
       
function myfun (e){
        
        e.preventDefault()
        if(form.first.value=="" || form.last.value=="" || form.pass.value==""){
                document.querySelector("#email").innerText="fill the credential"
        }
        else{ let obj={
                first:form.first.value,
                last:form.last.value,
                pass:form.pass.value
        }
          
        
       
     localStorage.setItem("obj",JSON.stringify(obj)) 
     alert("successfull login")
      window.location.href="index.html"

}
       

}