let darkMode =  localStorage.getItem('darkmode');
const darkmodetoggle = document.querySelector('#dark-mode-toggle');

//check if darkmode is enabled
// if it's enabled, turn it off
// if it's disabled , turn it on

localStorage.setItem('darkMode',null);

const enabledDarkmode = () =>{
    //add the class darkmode to the body
    document.body.classList.add('darkmode');
    //update darkmode in the localStorage
    localStorage.setItem('darkMode','enabled');
}

const disabledDarkmode = () =>{
    //add the class darkmode to the body
    document.body.classList.remove('darkmode');
    //update darkmode in the localStorage
    localStorage.setItem('darkMode',null);
}

darkmodetoggle.addEventListener("click",()=>{
    darkMode = localStorage.getItem('darkMode'); // Re-check state
    if (darkMode !== 'enabled'){
        enabledDarkmode();
    } else {
        disabledDarkmode();
    }
});