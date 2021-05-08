//gắn vào button
function Count(time,slideName) {
    setTimeout(
        function changeSlide() {
            window.open(slideName,"_self")
        }
    ,time)    
}
