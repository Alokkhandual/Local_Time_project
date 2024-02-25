const clock=document.querySelector('#clock')

clock.addEventListener('click',function(){
    setInterval(function(){
        let date=new Date();
        clock.innerHTML=date.toLocaleTimeString()
    },1000)
})