document.addEventListener('load', function(){
    var game_ul = document.getElementById(game_ul);
    var game_list = game_ul.children;
    var start_x = 0;
    var dist = 0;
    
    game_ul.addEventListener('touchstart', function(event){
        var touch_object = event.changedTouches[0];
        start_x = parseInt(touch_object.clientX);
        game_list.innerHTML = 'Status: touchstart<br> ClientX: ' + start_x + 'px';
        event.preventDefault();
    }, false)
    
    game_ul.addEventListener('touchmove', function(event){
        var touch_object = event.changedTouches[0];
        var dist = parseInt(touch_object,ClientX) - start_x;
        game_list.innerHTML = 'Status: touchmove<br> Horizontal distance traveled: ' + dist + 'px';
        event.preventDefault();
    }, false)
    
    game_ul.addEventListener('touchend', function(event) {
        var touch_object = event.changeTouches[0];
        game_list.innerHTML = 'Status: touchend<br> Resting x coordinate: ' + touch_object.clientX + 'px';
        event.preventDefault();
    }, false)
}, false);


/* for(var i = game_list.length - 1; i >= 0; i--){
        if(game_list.option[i].selected){
            game_list.remove(i);
            }
        }
    });*/
    
    var function_loop_mouse_enter = function(){
for (var i= 0;i<game_list_item.length;i++){
    game_list_item[i].addEventListener('mouseenter', function(){
      for (var i = 2; game_list_item.length - 2; i++) {
      if (game_list_item[i].children.length>0){
          game_list_item[i].removeChild(game_list_item[i].children[0])
      }
  };
});
}
};

function_loop_mouse_enter();