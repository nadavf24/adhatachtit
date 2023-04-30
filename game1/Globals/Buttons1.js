(function(window){
function  Buttons1(){
  
}
Buttons1.init=function(){
          var str="";
          var items = TextButtons1.items();
             var length = items.length;
            str+='<div id="buttons1-container">';
            for(var i = 0; i < length; i++){
                        var item = items[i];
                        var title = item.title;
                        var label = item.label;
                        str+='<h1 id = "ba'+i+'" class="button1">'+item.title+'</h1>';       
            }
          
            str+='</div>';
             str+='</div>';
          
            return str;
}
window.Buttons1=Buttons1;
}(window)
)