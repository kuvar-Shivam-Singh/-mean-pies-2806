
      let obj=[
        { price:34,
          image:"https://n.nordstrommedia.com/id/sr3/f4a52d79-b768-43e1-966a-d68f1f59c24e.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        { price:31,
                image:"https://n.nordstrommedia.com/id/sr3/cf6a31ce-de78-41dd-8cc2-803ed750b8ed.jpeg?q=45&dpr=2&h=365.31&w=230"
        },

        {price:21,
                image:"https://n.nordstrommedia.com/id/sr3/8ea981e7-d390-47fa-b27a-60b8cd12f8cb.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        {price:37,
                image:"https://n.nordstrommedia.com/id/sr3/37ac1512-cfcf-4424-9bc9-cccbb044282f.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        {price:21,
                image:"https://n.nordstrommedia.com/id/sr3/f6a9894b-eeab-4430-97ed-2f48ab1d4221.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        {price:11,
                image:"https://n.nordstrommedia.com/id/sr3/0eda0d37-08ee-4b3d-bf0d-57fa7b65d7fc.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        {price:11,
                image:"https://n.nordstrommedia.com/id/sr3/f849480e-c0a0-4629-8440-25caa15f1415.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        {price:71,
                image:"https://n.nordstrommedia.com/id/sr3/0ca03848-e334-42a6-95b9-5f685d073ccc.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        {price:75,
                image:"https://n.nordstrommedia.com/id/sr3/a8ae24ad-8867-47a4-9679-6434c34a55c3.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        {price:74,
                image:"https://n.nordstrommedia.com/id/sr3/f275b487-6e5a-49d3-8076-26a90119c14d.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
        {price:123,
                image:"https://n.nordstrommedia.com/id/sr3/f4a52d79-b768-43e1-966a-d68f1f59c24e.jpeg?q=45&dpr=2&h=365.31&w=230"
        },
       ]

  obj.forEach(function (el,i){
        let divtag=document.createElement("div");
        divtag.setAttribute("class","swiper-slide")
           
        let image=document.createElement("img")
        image.src=el.image
         
        let ptag=document.createElement("p")
         ptag.innerText=el.price
         let span=document.createElement("span")
          span.innerText="@UGG"
         divtag.append(image,ptag,span)

         document.querySelector(".swiper-wrapper").append(divtag)
  });

//   const swiper = new Swiper('.swiper', {
//         // Optional parameters
       
//         loop: true,
      
      
//         autoplay :{
//               delay:4000,
//               disableOnInteraction:false,
//         },
       
//         // Navigation arrows
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
      
        
//       });
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
     