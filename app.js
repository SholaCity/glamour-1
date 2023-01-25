
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 5500,
//         disableOnInteraction: false,
//       },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
    
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//   });


// document.addEventListener('DOMContentLoaded', function () {
    
//     //    // loader
//     const loader = document.querySelector(".loader");
    
//        setTimeout(() => {
//           loader.className += ' hide-loader';
//        }, 3000);
//     });


    
// navigation bar
const navBtn = document.querySelector(".nav-btn");
navBtn.addEventListener('click', (e) => {
    e.target.classList.toggle("active")
    const nav_item = document.querySelector('.mb-nav-item');
    nav_item.classList.toggle('show-nav')
})


  // accordion content
  const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item, index) => {
      let header = item.querySelector("header");
      header.addEventListener("click", () =>{
          item.classList.toggle("open");
  
          let description = item.querySelector(".description");
          if(item.classList.contains("open")){
              description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
              item.querySelector("i").classList.replace("fa-plus", "fa-minus");
          }else{
              description.style.height = "0px";
              item.querySelector("i").classList.replace("fa-minus", "fa-plus");
          }
          removeOpen(index); //calling the funtion and also passing the index number of the clicked header
      })
  })
  
  function removeOpen(index1){
      accordionContent.forEach((item2, index2) => {
          if(index1 != index2){
              item2.classList.remove("open");
  
              let des = item2.querySelector(".description");
              des.style.height = "0px";
              item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
          }
      })
  }

//   gallery

const pageBtn = document.querySelectorAll(".pages div");
const galleries = document.querySelectorAll(".row");

console.log(pageBtn);

pageBtn.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        if (e.target.tagName == "DIV") {
            console.log(galleries);
            const targetGallery = document.querySelector(e.target.dataset.target);
            console.log(targetGallery);
            galleries.forEach((gallery) => {
                if (gallery == targetGallery) {
                    gallery.classList.add("active-page");
                    } else {
                    gallery.classList.remove("active-page");
                    }
            })
            
        }
    })
});

// animation on scroll

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))



