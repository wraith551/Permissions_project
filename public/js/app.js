const student = document.querySelector('#student')
const teacher = document.querySelector('#teacher')
const principal = document.querySelector('#principal')


student.onClick = function(e){
    console.log('hi')
    e.preventDefault()    
}

principal.onClick = function(){
    console.log('hi')
}