window.addEventListener('load', function(){
    
    var touch_surface = document.getElementById('game_unordered_list')[0].children,
        startX,
        startY,
        dist,
        threshold = 150,
        allowed_time = 200,
        elapsed_time,
        start_time;
        
    function handle_swipe(swipe_right){
        if (swipe_right){
            console.log('congrats you swiped right!'); 
        }else {
            console.log('not quiet what we wanted');
        }
    }
    
    touch_surface.addEventListener('touchstart',function(event){
        var touch_object = event.changedTouches[0];
            dist = 0;
            startX = touch_object.pageX
            startY = touch_object.pageY
            start_time = new Date().getTime();
        event.preventDefault();
    }, false);
    
    touch_surface.addEventListener('touchmove', function(event){
        event.preventDefault();
    }, false);
    
    touch_surface.addEventListener('touchend', function(event){
        var touch_object = event.changedTouches[0];
            dist = touch_object.pageX - startX;
            elapsed_time = new Date().getTime() - start_time;
        var swipe_item_right =(elapsed_time <= allowed_time && dist >= threshold && Math.abs(touch_object.pageY - startY) <= 100);
        handle_swipe(swipe_item_right);
        event.preventDefault();
    }, false);
    
} false);