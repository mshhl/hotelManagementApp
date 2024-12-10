const otpInput = document.querySelector(".otpInput");
const submitBtn = document.querySelector(".submitBtn");
const errorMessage = document.querySelector(".errorMessage");
const form = document.querySelector("form");


submitBtn.addEventListener("click",function(e){
    const otpValue = otpInput.value;
    if(otpValue.length > 4 || otpValue.length < 4){
        e.preventDefault()
        errorMessage.innerHTML = "otp should have only 4 digits";
        errorMessage.style.display = "block";
    }else{
        errorMessage.style.display = "none";
        form.submit();
    }
})


otpInput.addEventListener('keydown', function(event) {
  // Allow numbers and backspace
  if (isNaN(event.key) && event.key !== 'Backspace') {
    otpInput.value = "";
    errorMessage.innerHTML = "Only numbers";
    errorMessage.style.display = "block";
    return;
  }else{

    errorMessage.style.display = "none";
    return
  }
});


