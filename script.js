let tablinks = document.getElementsByClassName('tab-links');
let aboutcontents = document.getElementsByClassName('about-content');
let msg = document.getElementById('message')

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
       }
   for(aboutcontent of aboutcontents){
    aboutcontent.classList.remove('active-tab')
   }
    document.getElementById(tabname).classList.add('active-tab')
}

let sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = '0'
}
function closemenu(){
    sidemenu.style.right = '-200px'
}
// --------------------------- Sendmail ----------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0r2IS87nacaccSg_S10zoVOJ9eBWovEuBo1hZ6d2A7VL7X6D_seCsGs0OmgFuCGry_A/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML= 'message sent successfully'
        setTimeout(()=>{
            msg.innerHTML=''
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})