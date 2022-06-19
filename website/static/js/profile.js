let dayCount = document.getElementById('clean-days')
let drug = document.getElementById('drug')
let todaysdose = document.getElementById('todays-dose')
let namep = document.getElementById('name')
let htmlpercentagedecrease= document.getElementById('percentage-loss')
let doselist = JSON.parse(localStorage.getItem('doses'))
let multiplier=30

function updateRender()
{
    if(localStorage.getItem('days'))
    {
        let day = new Date().getDate()
        console.log('hi' + day)
        dayCount.innerHTML=localStorage.getItem('days')
        drug.innerHTML = localStorage.getItem('drug')
        todaysdose.innerHTML=doselist[doselist.length-1]+'mg'
        namep.innerHTML = localStorage.getItem('name')
        if(localStorage.getItem('today')!=day){
            doselist.push(doselist[doselist.length-1]/2^(localStorage.getItem('days')/multiplier))
            localStorage.setItem('days', Number(localStorage.getItem('days')) + (day - localStorage.getItem('today')))
            localStorage.setItem('today',day)
            dayCount.innerHTML=localStorage.getItem('days')
            localStorage.setItem('doses','['+doselist+']')
            todaysdose.innerHTML=doselist[doselist.length-1]+'mg'
        }
    }

    else{
        window.location.href='/'
    }
}

updateRender()

let graph = document.getElementById('dosageGraph')

let days = []
let percentageDecrease = Math.floor(doselist[doselist.length-1]/doselist[0]*100)+'%'

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
            data: doselist
        }]
    }
})