const firsthalf = document.querySelector('.firsthalf')
fetch('Assets/firsthalf.html')
.then(res=>res.text())
.then(data=>{
    firsthalf.innerHTML=data
})

const secondhalf = document.querySelector('.secondhalf')
fetch('Assets/secondhalf.html')
.then(res=>res.text())
.then(data=>{
    secondhalf.innerHTML=data
})