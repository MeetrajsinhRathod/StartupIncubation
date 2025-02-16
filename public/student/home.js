//listen for auth status changes
auth.onAuthStateChanged(user=>{

    if(user){

        setupUI(user);

    //admin
    const Dashbtn = document.querySelector('.D')
    const Dashtext = document.querySelector('.D1')


    Dashbtn.addEventListener('click',()=>{  

    db.collection('users').doc(user.uid).get().then(doc => {

        if(doc.data().role == 'ADMIN'){

            window.location = "/admin/admin.html";
        }
        else if(doc.data().role == 'HOD'){

            window.location = "/hod/hod.html";
        }
        else if(doc.data().role == 'FACULTY'){

            window.location = "/faculty/faculty.html";
        }
        else{

            window.location = "sdash.html"
        }
        })
})
Dashtext.addEventListener('click',()=>{  

    db.collection('users').doc(user.uid).get().then(doc => {

        if(doc.data().role == 'ADMIN'){
            window.location = "/admin/admin.html";
        }
        else if(doc.data().role == 'HOD'){
            window.location = "/hod/hod.html";
        }
        else if(doc.data().role == 'FACULTY'){
            window.location = "/faculty/faculty.html";
        }
        else{
            window.location = "sdash.html"
        }
        })
})
    

    
    }
    else{

    setupUI();
    console.log("user logged out.");
    }

})

//log out
const logOut = document.querySelector("#logout");

logOut.addEventListener('click',()=>{

    auth.signOut();
    window.location = "/student/home.html";
})

//
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const applypage = document.querySelectorAll('.applyPage');
const loggedOutres = document.querySelectorAll('.logged-out-res');
const setupUI = (user) =>{
    if(user){

        db.collection('users').doc(user.uid).get().then(doc => {
 
            if(doc.data().role == 'ADMIN'){

                applypage.forEach(item => item.style.display='none');
            }
            else if(doc.data().role == 'HOD'){

                applypage.forEach(item => item.style.display='none');
            }
            else if(doc.data().role == 'FACULTY'){
    
                applypage.forEach(item => item.style.display='none');
            }
            else{
                loggedOutres.forEach(item => item.style.display='none');
                applypage.forEach(item => item.style.display='flex');
            }
            })


        loggedInLinks.forEach(item => item.style.display='flex');
        loggedOutLinks.forEach(item => item.style.display='none');


    }
    else{
        loggedInLinks.forEach(item => item.style.display='none');
        loggedOutLinks.forEach(item => item.style.display='flex');
        applypage.forEach(item => item.style.display='flex');
    }
}





