//listen for auth status changes
const hod = document.querySelector('.formh');
const hodremove = document.querySelector('#removeh');
const faculty = document.querySelector('.formf');
const facultyremove = document.querySelector('#removef');
const news = document.querySelector('.forma');
const newsremove = document.querySelector('#removea');

auth.onAuthStateChanged(user=>{

    if(user){

        db.collection('users').doc(user.uid).get().then(doc => {

            if(doc.data().role == 'HOD'){
                alert('Only admin can access this page!')
                window.location = "/student/home.html";
            }
            else if(doc.data().role == 'FACULTY'){
        
                alert('Only admin can access this page!')
                window.location = "/student/home.html";
            }
            else if(doc.data().role == 'STUDENT'){
        
                alert('Only admin can access this page!')
                window.location = "/student/home.html";
            }
            else{
        
            }
            })
    
            // to show form detail in table
        db.collection('forms').get().then(snapshot => {
            setupForm(snapshot.docs);
        })
        
        const formDetails = document.querySelector('.Fdetails');

        const setupForm = (data) => {
        
            let html = ``;
            data.forEach(doc => {
                
                const form = doc.data();
                if(form.Status == 'Approved by hod'){
                key = doc.id;
                const li = `
                <tr>
                    <td>${form.TitleOfResearchGrant} </td>
                    <td>${form.Department}</td>
                    <td>${form.FullName}</td>
                    <td><button class="readmore" value="${key}" onclick="dosomething(this.value)"><b>Read More</b></button></td>
                </tr>`;
                html += li;
                formDetails.innerHTML = html;
           
                let rmbtn = document.querySelectorAll('.readmore');


                function dosomething(val){
                    console.log(val);
                }
                rmbtn.forEach(item => item.addEventListener('click',()=>{
                    dosomething(item.value);
                    localStorage.setItem("myKey", item.value);
                    window.location = `/student/readmore.html`;

                }));
            }
            })
            


        
        }


    }
    else{

    }

})
        //to add hod
        hod.addEventListener('submit',(e)=>{
            e.preventDefault();
            
            const usernameH  = hod['usernameh'].value;
            const emailH = hod['emailh'].value;
            const departmentH = hod['departmenth'].value;
            const passwordH = hod['passwordh'].value;

            var config = {apiKey: "AIzaSyBOc0r3Th6azEmwTIIIeVhjs20fXps0Bxg",
                          authDomain: "startupmanagementsystem.firebaseapp.com",
                          databaseURL: "https://databaseName.firebaseio.com"};
            var secondaryApp = firebase.initializeApp(config, "Secondary");

            secondaryApp.auth().createUserWithEmailAndPassword(emailH, passwordH).then(cred =>{

                return db.collection('users').doc(cred.user.uid).set({
                    username : usernameH,
                    department : departmentH,
                    role : 'HOD',
                }).then(()=>{
                    secondaryApp.auth().signOut();
                    hod.reset();
                    alert("HOD has been added !");
                    window.location = "/admin/admin.html";

                })

            })

        });


            //to remove hod
            hodremove.addEventListener('click',(e)=>{
                e.preventDefault();
                
                const usernameH  = hod['usernameh'].value;
                const emailH = hod['emailh'].value;
                const departmentH = hod['departmenth'].value;
                const passwordH = hod['passwordh'].value;
    
    
                var config = {apiKey: "AIzaSyBOc0r3Th6azEmwTIIIeVhjs20fXps0Bxg",
                              authDomain: "startupmanagementsystem.firebaseapp.com",
                              databaseURL: "https://databaseName.firebaseio.com"};
                var secondaryApp = firebase.initializeApp(config, "Secondary");
    
                secondaryApp.auth().signInWithEmailAndPassword(emailH, passwordH).then(()=>{

                    secondaryApp.auth().onAuthStateChanged(user2=>{

                        if(user2){
                        
                            user2.delete();
                            hod.reset();
                            alert("HOD has been removed !");
                            window.location = "/admin/admin.html";
                        }
                        else{
                    
                        }
                    
                    })
    
                    }).catch(err=>{
                        console.log(err);
                        alert("Entered email id or password is incorrect!");
                    })
            });


            // to add faculty
            faculty.addEventListener('submit',(e)=>{
                e.preventDefault();
                
                const usernameF  = faculty['usernamef'].value;
                const emailF = faculty['emailf'].value;
                const departmentF = faculty['departmentf'].value;
                const passwordF = faculty['passwordf'].value;
    
    
                var config = {apiKey: "AIzaSyBOc0r3Th6azEmwTIIIeVhjs20fXps0Bxg",
                              authDomain: "startupmanagementsystem.firebaseapp.com",
                              databaseURL: "https://databaseName.firebaseio.com"};
                var secondaryApp = firebase.initializeApp(config, "Secondary");
    
                secondaryApp.auth().createUserWithEmailAndPassword(emailF, passwordF).then(cred =>{
    
                    return db.collection('users').doc(cred.user.uid).set({
                        username : usernameF,
                        department : departmentF,
                        role : 'FACULTY',
                    }).then(()=>{
                        secondaryApp.auth().signOut();
                        faculty.reset();
                        alert("Faculty has been added !");
                        window.location = "/admin/admin.html";
    
                    })
    
                }).catch(err=>{
                    console.log(err);
                    alert("Entered email id or password is incorrect!");
                })

            }); 

            //to remove faculty
            facultyremove.addEventListener('click',(e)=>{
                e.preventDefault();
                
                const usernameF  = faculty['usernamef'].value;
                const emailF = faculty['emailf'].value;
                const departmentF = faculty['departmentf'].value;
                const passwordF = faculty['passwordf'].value;
    
    
                var config = {apiKey: "AIzaSyBOc0r3Th6azEmwTIIIeVhjs20fXps0Bxg",
                              authDomain: "startupmanagementsystem.firebaseapp.com",
                              databaseURL: "https://databaseName.firebaseio.com"};
                var secondaryApp = firebase.initializeApp(config, "Secondary");
    
                secondaryApp.auth().signInWithEmailAndPassword(emailF, passwordF).then(()=>{

                    secondaryApp.auth().onAuthStateChanged(user2=>{

                        if(user2){
                        
                            user2.delete();
                            faculty.reset();
                            alert("Faculty has been removed !");
                            window.location = "/admin/admin.html";
                        }
                        else{
                    
                        }
                    
                    })
    
                    })
            });

            // to add news
            news.addEventListener('submit',(e)=>{
                e.preventDefault();
                
                const title  = news['titlea'].value;
                const content = news['contenta'].value;

                        db.collection('news').doc().set({
                        Title : title,
                        Content : content,
                    }).then(()=>{
                        news.reset();
                        alert("Article has been added !");
                        window.location = "/admin/admin.html";
    
                    })
    
               

            }); 

        
