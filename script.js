
const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signInButton.addEventListener('click',function(){
    signUpForm.style.display="none";
    signInForm.style.display="block";
})
signUpButton.addEventListener('click', function(){
    signUpForm.style.display="block";
    signInForm.style.display="none";
})

            function myFunction(){
                var email=document.getElementById("email").value;
                var password=document.getElementById("password").value;
                if(email=="root" && password=="root")
				{
                   window.location.assign("page_2.html")
                }
                else{
                    alert("Invalid Inforomation");
                }
            }
