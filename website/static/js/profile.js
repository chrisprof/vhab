let dayCount = document.getElementById('clean-days')
let drug = document.get

function updateRender()
{
    if(localStorage.getItem('days'))
    {
        dayCount.innerHTML=localStorage.getItem('days')
    }
    else{
        window.location.href='/'
    }
}