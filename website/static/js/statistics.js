let deathGraph = document.getElementById('drugDeaths')

let myGraph = new Chart(deathGraph, {
    type: 'bar',
    data: {
        labels: ['2016','2017','2018','2019','2020','2021','2022'],
        datasets: [{
            label:'deaths yearly(drugs)',
            backgroundColor: '#5F7A61',
            data: [70000,72800,75712,78740,81890,85165,88572]
        }]
    }
})

let lifeExpect = document.getElementById('lifeExpect')
let lifeexpectarr = [78.84,78.69,78.54,78.54,78.64,78.79]

let lifeGraph = new Chart(lifeExpect, {
    type: 'line',
    data: {
        labels: ['2014','2015','2016','2017','2018','2019'],
        datasets: [{
            label:'life expectancy(USA)',
            backgroundColor: '#5F7A61',
            data: lifeexpectarr
        }]
    }
})

let badwork = document.getElementById('badWork')


let badWorkGraph = new Chart(badwork, {
    type: 'doughnut',
    data: {
        labels: ['Drugs','Other Causes'],
        datasets: [{
            label:'causes for bad work performance',
            backgroundColor: ['#5F7A61', '#7FC8A9'],
            data: [60,40]
        }]
    }
})


let carCrash = document.getElementById('carcrash')


let carcrashgraph = new Chart(carCrash, {
    type: 'doughnut',
    data: {
        labels: ['Drugs','Other Causes'],
        datasets: [{
            label:'causes for bad work performance',
            backgroundColor: ['#444941', '#5F7A61'],
            data: [50,50]
        }]
    }
})

let suicide = document.getElementById('suicides')


let suicidegraph = new Chart(suicide, {
    type: 'doughnut',
    data: {
        labels: ['Drugs','Other Causes'],
        datasets: [{
            label:'causes for bad work performance',
            backgroundColor: ['#6CC4A1', '#4CACBC'],
            data: [50,50]
        }]
    }
})