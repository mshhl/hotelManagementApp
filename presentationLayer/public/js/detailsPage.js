const navList = document.querySelector(".nav-list");
const authenticationBtn = document.querySelector(".logoutButton");


function defaultView(e){
    try {
    
     
        const cookie = testCookie("jwt")
       const markup = generateAuthenticationBtnMarkup(cookie)
        
       insertInnerHtml(markup);
    } catch (error) {
        console.log(error.message);
    }
}
function insertInnerHtml(markup){
    try {
        authenticationBtn.innerHTML = markup;
    } catch (error) {
        console.log(error.message);
    }
}
function generateAuthenticationBtnMarkup(jwt){
    try {
        if(jwt){
          return `<a href="/logout">Logout</a>`
        }
        return `<a href="/">Login</a>`
        
    } catch (error) {
        console.log(error.message);
    }
}
function testCookie(name){
    try {
        let result 
        let finalResult
       const parts = document.cookie.split(";");
        // if(parts.length == 2) return parts.pop().split(";").shift();
       for(let i = 0;i<parts.length;i++){
          result = [...parts[i].split("=")]
       }
       
       for(let i = 0;i<result.length;i++){
        if(result[i] == name){
            finalResult = result[i+1];
            break;
        }
       }
       return finalResult;

       
        
       
      
       
       
        
    } catch (error) {
        console.log(error.message);
    }
}





window.addEventListener("load",defaultView)