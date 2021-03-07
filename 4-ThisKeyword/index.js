const clock = {
    time:0,
    stopWatch:function (){
        setInterval(function (){
            console.log(this.time++);
        },1000);
    }
}
clock.stopWatch()