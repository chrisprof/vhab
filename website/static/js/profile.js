let dayCount = document.getElementById('clean-days')
let drug = document.getElementById('drug')
let todaysdose = document.getElementById('todays-dose')
let name = document.getElementById('name')
let htmlpercentagedecrease= document.getElementById('percentage-loss')


function updateRender()
{
    if(localStorage.getItem('days'))
    {
        dayCount.innerHTML=localStorage.getItem('days')
        drug.innerHTML = localStorage.getItem('drug')

    }

    else{
        window.location.href='/'
    }
}

let graph = document.getElementById('dosageGraph')

localStorage.setItem('days',1)

localStorage.setItem('doses','[2]')

let days = []
let doses = JSON.parse(localStorage.getItem('doses'))
let percentageDecrease = +Math.floor(doses[doses.length-1]/doses[0]*100)+'%'

htmlpercentagedecrease.innerHTML=percentageDecrease

for(var i = 0; i<Number(localStorage.getItem('days')); i++)
{
    days.push(i+1)
}

let myGraph = new Chart(graph, {
    type:'line',
    data: {
        labels: days,
        datasets: [{
            label:'dosage',
            backgroundColor: '#5F7A61',
            pointBorderWidth: 15,
            data: doses
        }]
    }
})