


const swiper = new Swiper('.swiper', {
        
        loop: true,
      
        autoplay :{
              delay:4000,
              disableOnInteraction:false,
        },
      
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
       
      });
     

      let obj2=[
        {image:"https://n.nordstrommedia.com/id/d2b7b15c-812b-4f42-9cc3-0bc5aae10c44.jpeg?h=1224&w=1224"},
        {image:"https://n.nordstrommedia.com/id/f2cd2569-6a6a-48bd-94f3-5e23446c742b.jpeg?h=1224&w=1224"},
        {image:"https://n.nordstrommedia.com/id/78ef1064-b6a3-4ca5-ad0c-31f4ecc8a375.jpeg?h=1224&w=1224"},
        {image:"https://n.nordstrommedia.com/id/c7fc8cfb-d60c-4857-b5a9-84444f153002.jpeg?h=1224&w=1224"},
        {image:"https://n.nordstrommedia.com/id/07026e87-5c96-4cc4-b838-7d4c70649d75.jpeg?h=1224&w=1224"},
        {image:"https://n.nordstrommedia.com/id/14714a45-7cba-4537-a4c1-42f5e41eb9fc.jpeg?h=1224&w=1224"},
        {image:"https://n.nordstrommedia.com/id/d17a50f3-170b-47a2-8ae0-5d0e649a132b.jpeg?h=1224&w=1224"},
        {image:"https://n.nordstrommedia.com/id/68c2b9c4-eacb-4afe-8712-d162faa8c445.jpeg?h=1224&w=1224"},
        {image:"https://n.nordstrommedia.com/id/ebbf4947-33a4-450c-867c-6e5a1015da66.jpeg?h=1224&w=1224"},
        
      ]
      

      let obj4=[
        {image:"https://n.nordstrommedia.com/id/687fe380-cca1-433f-bd11-7bd35fa9b2fa.jpeg?h=555&w=804"},
        {image:"https://n.nordstrommedia.com/id/af5188b4-06b3-41d0-9c93-bff368ebcbfd.jpeg?h=555&w=804"}
      ]
      let obj5=[
        {image:"https://n.nordstrommedia.com/id/sr3/d9384f01-4802-415a-8f7a-bfd053821be4.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/8b28c8b3-4082-4bda-ae5f-b99e7d5c6525.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/f4c8c06d-9352-4453-ad3b-9b9ce8450389.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/f4c8c06d-9352-4453-ad3b-9b9ce8450389.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/572019d0-d413-4d86-a607-58b3b73e1754.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/bc133e47-37f2-4822-8edc-136273ae1f80.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/23fbb755-55ab-423d-ad3d-88e1b0c83b7e.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/b536b364-ce6d-443e-ae94-7dc715f7f350.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/83bc2d64-7132-4051-ab54-fe0b97939488.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/00135c24-82f2-449d-827f-f90c5f2a5ccc.jpeg?q=45&dpr=2&h=365.31&w=230"},
        {image:"https://n.nordstrommedia.com/id/sr3/326eb703-cf88-467b-a000-3eadaee81f94.jpeg?q=45&dpr=2&h=365.31&w=230"},
 
      ]
   let button=document.querySelector(".bottom-top")
   button.addEventListener("click",topfun)
    function topfun (){
      document.documentElement.scrollTop = 0;
    }
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       button.style.display = "block";
      } else {
      button.style.display = "none";
      }
    }
let date=JSON.parse(localStorage.getItem("obj"))
console.log(date)
let namess=document.querySelector(".dropbtn>span");
let names=document.querySelector("#name");



names.innerText=date.first

if(names.innerText==date.first){
  names.style.backgroundColor="white"
  names.style.border="none"
}

namess.innerText="Hi"+"  "+date.first

let form=document.querySelector("#form")
 form.addEventListener("submit",myfun)
 let print=document.querySelector(".shivom");
function myfun(e){
 e.preventDefault()
 let email=form.email.value
 if(email==""){
    print.innerText="Enter the email address like this: name@email.com"


    
 }
 else{
  print.innerText="Stay tuned for the latest updates on new arrivals, special offers and more - all delivered straight to your inbox. "
 }
    
        
  }




  

