(function(window){
function  Header(){
  
}
Header.init=function(){
            var str="";
            str+='<div id="header-container">';
            str+='<img class="logo-image"  src="pics/icons/logo.png" alt="adhtachtit" >';
            str+='</div>';  
            return str;
}
window.Header=Header;
}(window)
)