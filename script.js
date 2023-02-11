
 function show_alert() {
   let a = document.getElementById('email').value;
   let b = document.getElementById('password').value;
   let c = document.getElementById('contact').value;
   let d = document.getElementById('address').value;
   

   if (a,b,c,d == "") {
    alert("Please fill up the form!");
    return false;
   } else{ alert("Sign in successful\n"+'Name: '+a+'\n'+'Password: '+b+'\n'+'Contact number: '+ c + '\n'+ 'Address: ' + d)}
}

function show() {
   let email = document.forms["form"]["email"].value;
   let contact = document.forms["form"]["contact"].value;
   let text = document.forms["form"]["text"].value;

   if (email,contact,text == "") {
      alert("Please fill up the form!");
      return false;
     } else{ alert("Thank you! Please wait for our response!")}


}