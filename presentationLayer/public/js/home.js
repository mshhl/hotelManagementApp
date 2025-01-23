const hotelContainer = document.querySelector(".hotel-container");
const inputSearch = document.querySelector(".searchInput");
// const searchBtn = document.querySelector(".searchbtn");
const notFoundText = document.querySelector(".not-found-text");
const hotel_1 = document.querySelector(".hotel-1");
const hotel = document.querySelector(".hotel");
const pagination = document.querySelector(".pagination");




// const setIndicationArray = [];
// const indicationArray = [];

// const defaultMarkup = async function(){
//   try {
//     const fetchResults = await fetchDefault();
//     renderResultDefault(fetchResults)
//   } catch (error) {
//     console.log(error.message);

//   }
// }
// const fetchDefault = async function(){
//   const response = await fetch("/defaultquery?page=1&limit=5");
//   const responseJson = await response.json();
//   return responseJson; 
// }

// function generateSearchMarkup(obj,index){
//   setIndicationArray.push(obj.HotelName)
//   if(index === 0){
    
//     return (`<div class="hotel-1">
//     <img class="image" src="uploads/${obj?.Images}">
//       <div class="offerTag">50% offer</div>
//       <div class="title">
//       <div class="hotelname">${obj?.HotelName}</div>
//       <div class="address">${obj?.Address}</div>
      
//       </div>
     
//     </div>`)
//   }else{
//     return (`<div class="hotel">
//       <div class="offerTag"> 50% per night</div>
//        <img src="uploads/${obj?.Images}" class="image" alt="Girl in a jacket">
//        <div class="title">
//       <div class="hotelname">${obj?.HotelName}</div>
//       <div class="address">${obj?.Address}</div>
      
//       </div>
//   </div>`);
//   }
  

  

// }
// function generateDefault(obj,index){
//   if(index === 0){
    
//     return (`<div class="hotel-1">
//     <img class="image" src="uploads/${obj?.Images}">
//       <div class="offerTag">50% offer</div>
//       <div class="title">
//       <div class="hotelname">${obj?.HotelName}</div>
//       <div class="address">${obj?.Address}</div>
      
//       </div>
     
//     </div>`)
//   }else{
//     return (`<div class="hotel">
//       <div class="offerTag"> 50% per night</div>
//        <img src="uploads/${obj?.Images}" class="image" alt="Girl in a jacket">
//        <div class="title">
//       <div class="hotelname">${obj?.HotelName}</div>
//       <div class="address">${obj?.Address}</div>
      
//       </div>
//   </div>`);
// }
// }

// const search = async function(e){
//     try {
      
     
//       console.log("entered to search function")
//         const query = e.target.value;
//         console.log(query);
//         if(!query) {
        
//           defaultMarkup();
//           return;

//         };
//         const fetchResult = await fetchData(query);
//         renderResult(query,fetchResult);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// async function fetchData(query){
//     try {
//         const response = await fetch(`/suggest?q=${query}&page=1&limit=5`);
//         const responseJson = await response.json();
//         return responseJson;

//     } catch (error) {
//         console.log(error);
//     }
// }
// function handleExceptions(query,results){
//    try {
//     if(!query.length){
      
//       return;
//     }
//     if(!results.length){
//       hotelContainer.style.display = "none";
//       notFoundText.textContent = "No result found";
//     } 

//    } catch (error) {
//     console.log(error.message);
//    }

// }

// function renderResultDefault(results){
//   try {
//     results?.forEach((obj,index) =>{
      
      
//       const html = generateDefault(obj,index);
//       console.log(html);
      
//       hotelContainer.insertAdjacentHTML("beforeend",html);
    
      
//     })
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// function renderResult(query,results){
//     handleExceptions(query,results);

//   //  hotelContainer.style.display = "block";
//     results?.forEach((hotel,index) =>{
     
//       // if(setIndicationArray.includes(hotel.HotelName) ) return;
      
//         notFoundText.textContent = "";
//         const html = generateSearchMarkup(hotel,index);
  
//         console.log(html)
//         hotelContainer.insertAdjacentHTML("beforeend",html);
        
        
//     })
// }
     


// inputSearch.addEventListener("input",search)
// window.addEventListener("load",defaultMarkup)

 async function search(e){
  try {
    hotelContainer.innerHTML = ""
    const query = e.target.value.toLowerCase().trim();
    if(!query){
      notFoundText.textContent = "";
      return;
    } 
    
    const result = await fetchData(query);
    if(!result.length) {
      notFoundText.textContent = "No Result Found";
    }else{
      notFoundText.textContent = "";
    }
   
    renderResult(result);

  } catch (error) {
    console.log(error.message);
  }
}
async function fetchData(query){
  try {
    const result = await fetch(`/suggest?q=${query}&page=1&limit=5`)
    const resultjson = await result.json();
    return resultjson;
  } catch (error) {
    console.log(error.message);

  }
}

// create markup 
function generateMarkup(hotel,index){
  try {
    if(index === 0) return (`<div class="hotel-1">
      <img src="uploads/${hotel?.Images}" class="image">
        <div class="offerTag">50% offer</div>
          <div class="title">
           <div class="hotelName">${hotel?.HotelName}</div>
           <div class="place">${hotel?.Address}</div>

          </div>
      </div>`


    )
    return (
      `<div class="hotel">
      <img src="uploads/${hotel?.Images}" class="image">
        <div class="offerTag">50% offer</div>
          <div class="title">
           <div class="hotelName">${hotel?.HotelName}</div>
           <div class="place">${hotel?.Address}</div>

          </div>
      </div>`
    )
  } catch (error) {
    console.log(error.message);
  }
}
function renderResult(hotels){
  try {
    hotels.forEach((hotel,index) =>{
      const html = generateMarkup(hotel,index);
      hotelContainer.insertAdjacentHTML("beforeend",html);
    })
  } catch (error) {
    console.log(error.message);
  }
}

async function defaultSearch(e){
  try {
    const results = await fetchDataDefault()
    if(!results.length){
      notFoundText.textContent = "No Result Found";
      return;
    } 
    renderResult(results);
  } catch (error) {
    console.log(error.message);
  }
}
async function fetchDataDefault(){
   try {
    const response = await fetch(`/defaultquery?page=1&limit=5`);
    const responsejson = await response.json();
    return responsejson;
   } catch (error) {
    console.log(error.message);
    
   }
}
async function fetchPagination(page){
  try {
    hotelContainer.innerHTML = "";
    const results = await fetch(`/defaultquery?page=${page}&limit=5`) ;
    if(!results.length){
      notFoundText.textContent = "No Result Found";
      return;
    }
   const children = pagination.querySelectorAll(".child");
   children.forEach(child =>{
    child.addEventListener("click",function(){
      children.forEach(c =>{
        c.classList.remove("active");
      })
      children.forEach(c =>{
        c.classList.add("inactive");

      })
      this.classList.remove("inactive");
      this.classList.add("active");
    })
   })
    renderResult(results)
  } catch (error) {
    console.log(error.message);
  }
}


inputSearch.addEventListener("input",search);
window.addEventListener("load",defaultSearch);
