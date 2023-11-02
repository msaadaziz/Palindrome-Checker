

const button = document.querySelector("#btn");

const inputText =document.querySelector("#input-text");

const result = document.querySelector("#result")


button.addEventListener("click", () => {

     const text = inputText.value.trim();


     if (text.length == 0 ) {
          alert("Please enter some text!");
         
     }

     const cleanText = text.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

     const isPalindrome = cleanText === cleanText.split("").reverse("").join("");


     const message = isPalindrome
      ? `<span>Yes.</span>  The word "${text}" is a Palindrome!`
      : `<span>Nope.</span>  The word "${text}" is not a Palindrome!`; 
  
 result.innerHTML = message;
 result.classList.remove("error", "success");
 setTimeout(() => {
     result.classList.add(isPalindrome ? "success" : "error");
 } ,10);


});