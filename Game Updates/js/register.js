function openModal() {
// alert("error");
    var myInput = document.getElementById("passwordFirst");
    var confirmMyInput = document.getElementById("passwordConfirm");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");    
    var match = document.getElementById("match");


		// When the user starts to type something inside the password field
        myInput.onkeyup = function() {
         
             
             /* TODO: Question 1.1: Starts here */
             var lowerCaseLetters = /[a-z]/g; // : Fill in the regular experssion for lowerCaseLetters
             var upperCaseLetters = /[A-Z]/g; // : Fill in the regular experssion for upperCaseLetters
             var numbers = /[0-9]/g; // : Fill in the regular experssion for digits
             var minLength = 8; // : Change the minimum length to what what it needs to be in the question 

             
     
           
     
             //Check for lowercase
             if(myInput.value.match(lowerCaseLetters)) {   
                // alert("error lowercase");  
                 letter.classList.remove("invalid"); 
                 letter.classList.add("valid"); 
             } else {
                 letter.classList.remove("valid"); 
                 letter.classList.add("invalid"); 
             }
     
             //Check for uppercase      
             if(myInput.value.match(upperCaseLetters)) { 
                // alert("error uppercase");   
                 capital.classList.remove("invalid"); 
                 capital.classList.add("valid");
             } else {
                 capital.classList.remove("valid");
                 capital.classList.add("invalid");
             }
     
             //Check for numbers       
             if(myInput.value.match(numbers)) { 
                // alert("error numbers");   
                 number.classList.remove("invalid"); 
                 number.classList.add("valid"); 
             } else {
                 number.classList.remove("valid"); 
                 number.classList.add("invalid");
             }
     
         //Check for length
             if(myInput.value.length >= minLength) {
                // alert("error length");   
                 length.classList.remove("invalid");
                 length.classList.add("valid");
             } else {
                 length.classList.remove("valid");
                 length.classList.add("invalid");
             }
           
         }
  
         confirmMyInput.onkeyup = function() {
                     //Check that password and confirm password match
                     var passEqualsConfPass = (myInput.value===confirmMyInput.value?true:false); // TODO: Change this to the condition that needs to be checked so that the text entered in password equals the text in confirm password
                     if(passEqualsConfPass) { 
                        
                         match.classList.remove("invalid"); 
                         match.classList.add("valid"); 
                     } else {
                         match.classList.remove("valid"); 
                         match.classList.add("invalid"); 
                     }        
   
     
                     // Disable or Enable the button based on the elements in classList
                     enableButton(letter, capital, number, length, match);
         }
     }
     
     
     function enableButton(letter, capital, number, length, match) {
        // TODO: Clear this function for students to implement
        // var button = document.getElementById('my_submit_button');  
        var button = document.getElementById('my_submit_button');
    
        var condition = letter.attributes[1].value === "valid";
        condition = condition && capital.attributes[1].value == "valid";
        condition = condition && number.attributes[1].value == "valid";
        condition = condition && length.attributes[1].value == "valid";
        condition = condition && match.attributes[1].value == "valid";
        if(condition) {   
            button.disabled = false;
        }
    
        // TODO: Replace false with the correct condition
    }
     
     
     function onClickFunction() {
         alert("Hey! I'm all green! Well done.")
     }