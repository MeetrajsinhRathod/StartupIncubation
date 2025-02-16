//listen for auth status changes
auth.onAuthStateChanged(user=>{

    if(user){

    const details = document.querySelector('.userDetails')

        //to show users information on dashboard
        db.collection('users').doc(user.uid).get().then(doc => {

        let html = `<div class="form-group">
        <i class="fas fa-user"></i>
        <p class="myInput" id="unamedisplayf">${doc.data().username}</p>
        </div>
    <div class="form-group">
        <i class="fas fa-envelope"></i>
        <p class="myInput"  id="emaildisplayf" > ${user.email} </p>
    </div>
    <div class="form-group">
        <i class="fas fa-building"></i>
        <p class="myInput"  id="departmentdisplayf" > ${doc.data().department} </p>
    </div>
    `;
            details.innerHTML = html; 
        })


        // to show form detail in table
        db.collection('forms').onSnapshot(snapshot => {
            setupForm(snapshot.docs);
        })
        
        const formDetails = document.querySelector('.Fdetails');


        const setupForm = (data) => {
        
            var key;
            let html = ``;
            data.forEach(doc => {
                const form = doc.data();

                //to show only logged in user forms
                if(user.email == form.Email){ 
                key = doc.id;
                const li = `
                <tr>
                    <td>${form.TitleOfResearchGrant} </td>
                    <td>${form.Department}</td>
                    <td>${form.Status}</td>
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





