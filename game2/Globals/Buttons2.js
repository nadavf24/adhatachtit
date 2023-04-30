(function(window){
function  Buttons2(){
  
}
Buttons2.init=function(){
          var str="";
          var items = TextButtons2.items();
             var length = items.length;
            str+='<div id="buttons2-container">';
            for(var i = 0; i < length; i++){
                     str+='<div class="btn-containr">';
                        var item = i+1;    
                        str+='<button id = "bb'+i+'" class="button2">'+item+'</button>';
                        str+='</div>';
            }
          
            str+='</div>';
             str+='</div>';
          
            return str;
}
window.Buttons2=Buttons2;
}(window)
)