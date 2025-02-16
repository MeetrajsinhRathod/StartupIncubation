//to show news on startups page

db.collection('news').get().then(snapshot => {
    setupNews(snapshot.docs);
})

const newsDetails = document.querySelector('.Ndetails');

const setupNews = (data) => {

    let html = ``;
    let i = 1;
    data.forEach(doc => {
        
        const form = doc.data();
        const li = `
        <div class="startups_box">
                <div class="startups_icon">${i}</div>
                <div class="startups_content">
                    <h3>${form.Title}</h3>
                    <p>${form.Content}</p>
                </div>
            </div>`;
        html += li;
        newsDetails.innerHTML = html;
        i++;
    })
    

}