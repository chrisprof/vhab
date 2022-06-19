if(localStorage.getItem('days'))
{
    window.location.href="/profile"
}

function submitForm(){
    let day = new Date().getDate()
    
    localStorage.setItem('name',document.getElementById('person-name').value)
    localStorage.setItem('drug',document.getElementById('drug-name').value)
    localStorage.setItem('doses','['+document.getElementById('drug-dose').value+']')
    localStorage.setItem('days',1)
    localStorage.setItem('today',day)
}