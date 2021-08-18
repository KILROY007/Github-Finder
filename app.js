const searchbox = document.querySelector('.userSearch');

const github=new Github;

const ui=new UI;

// adding event listener
searchbox.addEventListener('keyup',(e) =>{
    // getting user name
    const userName=e.target.value;

    if(userName !==''){
        // Show Profile
        github.getUser(userName)
            .then(data=>{
                if(data.profile.message==='Not Found'){
                    // alert
                    console.log('Not Found');
                }
                else{
                    // show profile
                    ui.showProfile(data.profile)
                }
            })
    }
    else{
        // clear everything
        ui.clearProfile();
    }
});