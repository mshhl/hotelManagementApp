const searchBarInput = document.querySelector(".searchBarInput");
const picAreaContainer = document.querySelector(".picArea");
const linetopcontainer = document.querySelector(".linetop");
const bigImage = document.querySelector(".img-box-1_big");




searchBarInput.addEventListener("input",async function(e){
     try {
        console.log("result reached")
        picAreaContainer.innerHTML = "";
        const inputValue = e.target.value;
        
        if(typeof inputValue == "undefined") return;
        
         fetch(`/suggest?q=${inputValue}`)
         .then(data => data.json())
         .then(results =>{
            if(!results) return;
            console.log(results)
            
               
           
               console.log(results[0].Images)
                const markup1 = `<div class="img-box-1_big" >
                <div class="offerTag">$50 per night</div>
             </div>`;
            //    const markup2 = generateMarkup(results);
                 bigImage.style.backgroundImage =  `url(/uploads/${results[0].Images})`; 
                picAreaContainer.insertAdjacentElement("beforebegin",markup1)
                // linetopcontainer.insertAdjacentElement("afterbegin",markup2);
                // console.log(linetopcontainer)
         
         } )
        
        
    
    //     
    //     console.log(resultjson);
    //     console.log(resultjson[0].Images)
    //     const markup1 = `<div class="img-box-1_big" style = "background-image:url("/uploads/${resultjson[0].Images}")">
    //     <div class="offerTag">$50 per night</div>
    // </div>`
    //    const markup2 = generateMarkup(resultjson);
    //    picAreaContainer.insertAdjacentElement("afterbegin",markup1)
    //    linetopcontainer.insertAdjacentElement("afterbegin",markup2);
    //    console.log(linetopcontainer)
 
     } catch (error) {
        console.log(error);
     }



    })

    function generateMarkup(hotels){
        let markup;
        let start = 2;

        hotels.forEach((hotel,indx )=>{
             markup += ` <div class="img-box-${start}">
                            <div class="offerTag">$50 per night</div>
                        </div>`
                        start++;

        })
        return markup;
       
    //  const markupline2 =  ` <div class="img-box-2">
    //                         <div class="offerTag">$50 per night</div>
    //                     </div>`    
    }

 

// const hotels = [
//     {
//       name: "hotel-0",
//       price: "40",
//     },
//     {
//       name: "hotel-1",
//       price: "40",
//     },
//     {
//       name: "hotel-2",
//       price: "40",
//     },
//     {
//       name: "hotel-3",
//       price: "40",
//     },
//   ];
  
//   const containerEl = document.querySelector(".container");
//   const searchInput = document.querySelector(".search-bar");
  
//   const generateMarkup = function (obj) {
//     const markup = `<div class="hotel-container">
//                       <div class="hotel-name">${obj.name}</div>
//                       <div class="container-tag">$${obj.price}</div>
//                   </div>`;
  
//     return markup;
//   };
  
//   searchInput.addEventListener("input", (e) => {
//     containerEl.innerHTML = "";
//     const query = e.target.value;
//     const results = [];
  
//     hotels.forEach((hotel) => {
//       if (hotel.name.includes(query)) results.push(hotel);
//     });
  
//     results.forEach((hotel) => {
//       const markup = generateMarkup(hotel);
//       containerEl.insertAdjacentHTML("beforeend", markup);
//     });
//   });
  


