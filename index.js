const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const mainBtn = document.getElementById("main-btn")
const txtOne = document.getElementById("txt-one")
const txtTwo = document.getElementById("txt-two")
const mainHead = document.getElementById("main-head")
const mainText = document.getElementById("main-text")
const lightBtn = document.getElementById("light-btn")

const passwordLength = 15

mainBtn.addEventListener("click", generateRandomPassword)

function getRandomCharacter(){
  const randomChar = Math.floor(Math.random() * characters.length)
  return characters[randomChar]
  
}

function generateRandomPassword() {
  let passwordOne = "" //these hold the empty strings
  let passwordTwo = ""
  for (let i = 0; i < passwordLength; i++){ //this loop gets the RandomCharacter from the array and assigns it to the strings
    passwordOne += getRandomCharacter()
    passwordTwo += getRandomCharacter()
  }
  txtOne.textContent = passwordOne;
  txtTwo.textContent = passwordTwo; // this displays the password to the div
}

txtOne.addEventListener("click", () => copyToClipboard(txtOne.textContent));
txtTwo.addEventListener("click", () => copyToClipboard(txtTwo.textContent));

function copyToClipboard(text) {
  if (!text) return;
  
  navigator.clipboard.writeText(text).then(() => {
    alert("Password copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

lightBtn.addEventListener("click", function() {  //change colour theme of the page by clicking the button
  document.body.classList.toggle("colored");

  if(document.body.classList.contains("colored")) {
    lightBtn.textContent = "Change to dark theme"
  } else {
    lightBtn.textContent = "Change to light theme"
  }
});

// lightBtn.addEventListener("click", changeTheme)
// lightBtn.addEventListener("dblclick", changeDarkTheme)
// function changeTheme(){                     //this would change theme with one click of the button
//   mainHead.style.color = "#111827"
//   mainText.style.color = "#6B7280"
//   document.body.style.backgroundColor = "#ECFDF5";
//   lightBtn.textContent = "change to dark theme"
// }

// function changeDarkTheme(){                 //this would change theme with double-click of the button
//   mainHead.style.color = "#F9FAFB"
//   mainText.style.color = "#D5D4D8"
//   document.body.style.backgroundColor = "#111827";
//   lightBtn.textContent = "change to light theme"
// }


// set password length, copy on click 
// txtOne.addEventListener("click", function copyToClipboard(txtOne.textContent){
  
// })
// txtTwo.addEventListener("click", function copyToClipboard(){
//   txtTwo.textContent
// })