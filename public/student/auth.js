//sign up
const signupForm = document.querySelector("#signup-form");

if(signupForm){
    signupForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        //get user info

        const userName = signupForm['username'].value;
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;
        const department = signupForm['signup-department'].value;

        //check whether entered id is an university id or not

        var a = document.getElementById("signup-email").value.indexOf("@");
        
        var b =  document.getElementById("signup-email").value.length;
        
        var substr = document.getElementById("signup-email").value.slice(a,b);
    
        var id = "@charusat.edu.in";      
        
        if(id == substr){

            //if id is correct then account will be created
            auth.createUserWithEmailAndPassword(email,password).then(cred =>{

                return db.collection('users').doc(cred.user.uid).set({
                    username : signupForm['username'].value,
                    department : signupForm['signup-department'].value,
                    role : 'STUDENT',
                })


            }).then(()=>{
                signupForm.reset();
                window.location = "home.html";
            })
        }
        else{
            alert("You can only use university email id !");
            signupForm.reset();
        }
})
}





//login

const loginForm = document.querySelector("#login-form");
if(loginForm){
    loginForm.addEventListener('submit',(e)=>{

        e.preventDefault();
    
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;
    
    
        auth.signInWithEmailAndPassword(email,password).then(cred => {
            
            loginForm.reset();
            window.location = "home.html";
        }).catch(err=>{
            console.log(err);
            alert("Entered email id or password is incorrect!");
        })
        
    })
}




