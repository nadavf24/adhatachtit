(function(window){
function  Main(){
  
}

       
Main.init=function(status,index,type){
           var str = "";
           var buttonaElements = [$("#ba0"),$("#ba1"),$("#ba2"),$("#ba3"),$("#ba4")];
           var buttonbElements = [$("#bb0"),$("#bb1"),$("#bb2"),$("#bb3"),$("#bb4"),$("#bb5"),$("#bb6"),$("#bb7"),$("#bb8"),$("#bb9"),$("#bb10"),$("#bb11"),$("#bb12"),$("#bb13"),$("#bb14"),$("#bb15"),$("#bb16"),$("#bb17"),$("#bb18"),$("#bb19"),$("#bb20"),$("#bb21"),$("#bb22"),$("#bb230"),$("#bb24"),$("#bb25"),$("#bb26"),$("#bb27"),$("#bb28"),$("#bb29"),$("#bb30"),$("#bb31"),$("#bb32"),$("#bb33"),$("#bb34"),$("#bb35"),$("#bb36"),$("#bb37"),$("#bb38"),$("#bb39"),$("#bb40"),$("#bb41"),$("#bb42"),$("#bb43"),$("#bb44"),$("#bb45"),$("#bb46")];
       
           if (status == "main") {
           $("body").empty();
                     
            str = Header.init();
             $("body").html(str);
           $("body").append('<div id="mainContainer"/>');
        
            str = Buttons1.init();
             $("#mainContainer").append(str);
             setAnimation();
            var items = TextButtons1.items;
            var length = items.length;
           
            $("#ba0").click(function(){
                     Main.init("text",0, "game");
            })
           $("#ba1").click(function() {
                      Main.init("text",1, "game");
           });
             $("#ba2").click(function() {
                      Main.init("text",2, "game");
           });
             $("#ba3").click(function() {
                      Main.init("text",3, "game");
           });
            $("#ba4").click(function() {
                      Main.init("text",4, "game");
           }); 
            $("#ba5").click(function() {
                      Main.init("mission",0, "game");
           });
             
           }
           else if (status=="text") {
                    var items;
                    if (type == "game") {
                        items = TextButtons1.items();
                    }else{
                       items = TextButtons2.items();
                    }
            $("body").empty();
            str = Header.init();
             $("body").html(str);
           $("body").append('<div id="mainContainer"/>');
           $("#mainContainer").append('<img class="back-image" id="exitBtn" src="pics/icons/exit.png" alt="back" >');
            $("body").append('<div id="mainContainer"/>');
            $("#mainContainer").append('<div id="divContainer"/>');
            $("#divContainer").append('<text class="title">'+items[index].title+'</text>')
           $("#divContainer").append('<textarea class="label">'+items[index].label+'</textarea>');
            setAnimation();
        
           setTextAraHeight();
           $("#exitBtn").click(function(){
                      console.log("status "+status+" index "+index+" type "+type);
                      if (type == "game" && index != 5) {
                                  Main.init("main",0, "game");   
                              }else{
                                  Main.init("mission",0, "mission");   
                               
                              }
        
           })
           }else if (status=="mission") {    
           $("body").empty();
           str = Header.init();
           $("body").html(str);
           $("body").append('<div id="mainContainer"/>');
           $("#mainContainer").append('<img class="back-image" id="exitBtn1" src="pics/icons/exit.png" alt="back" >')
            str = Buttons2.init();
            setAnimation();
             $("#exitBtn1").click(function(){
                     
                             Main.init("main",0);
        
           })
            $("#mainContainer").append(str);
            
            $("#bb0").click(function() {
                      Main.init("text",0, "mission");
           });
             $("#bb1").click(function() {
                      Main.init("text",1, "mission");
           });
            $("#bb2").click(function() {
                      Main.init("text",2, "mission");
                       });
           $("#bb3").click(function() {
                      Main.init("text",3, "mission");
                       });
           $("#bb4").click(function() {
                      Main.init("text",4, "mission");
           });
            $("#bb5").click(function(){
                     Main.init("text",5, "mission");
            })
           $("#bb6").click(function() {
                      Main.init("text",6, "mission");
           });
             $("#bb7").click(function() {
                      Main.init("text",7, "mission");
           });
             $("#bb8").click(function() {
                      Main.init("text",8, "mission");
           });
            $("#bb9").click(function() {
                      Main.init("text",9, "mission");
           });
              $("#bb10").click(function() {
                      Main.init("text",10, "mission");
           });
                $("#bb11").click(function() {
                      Main.init("text",11, "mission");
           });
                $("#bb12").click(function() {
                      Main.init("text",12, "mission");
           });
                $("#bb13").click(function() {
                      Main.init("text",13, "mission");
           });
                $("#bb14").click(function() {
                      Main.init("text",14, "mission");
           });
                 $("#bb15").click(function(){
                     Main.init("text",15, "mission");
            })
           $("#bb16").click(function() {
                      Main.init("text",16, "mission");
           });
             $("#bb17").click(function() {
                      Main.init("text",17, "mission");
           });
             $("#bb18").click(function() {
                      Main.init("text",18, "mission");
           });
            $("#bb19").click(function() {
                      Main.init("text",19, "mission");
                       });
           
           $("#bb20").click(function() {
                      Main.init("text",20, "mission");
           });
                $("#bb21").click(function() {
                      Main.init("text",21, "mission");
           });
                $("#bb22").click(function() {
                      Main.init("text",22, "mission");
           });
                $("#bb23").click(function() {
                      Main.init("text",23, "mission");
           });
                $("#bb24").click(function() {
                      Main.init("text",24, "mission");
           });
                 $("#bb25").click(function(){
                     Main.init("text",25, "mission");
            })
           $("#bb26").click(function() {
                      Main.init("text",26, "mission");
           });
             $("#bb27").click(function() {
                      Main.init("text",27, "mission");
           });
             $("#bb28").click(function() {
                      Main.init("text",28, "mission");
           });
            $("#bb29").click(function() {
                      Main.init("text",29, "mission");
                       });
            $("#bb30").click(function() {
                      Main.init("text",30, "mission");
           });
                $("#bb31").click(function() {
                      Main.init("text",31, "mission");
           });
                $("#bb32").click(function() {
                      Main.init("text",32, "mission");
           });
                $("#bb33").click(function() {
                      Main.init("text",33, "mission");
           });
                $("#bb34").click(function() {
                      Main.init("text",34, "mission");
           });
                 $("#bb35").click(function(){
                     Main.init("text",35, "mission");
            })
           $("#bb36").click(function() {
                      Main.init("text",36, "mission");
           });
             $("#bb37").click(function() {
                      Main.init("text",37, "mission");
           });
             $("#bb38").click(function() {
                      Main.init("text",38, "mission");
           });
            $("#bb39").click(function() {
                      Main.init("text",39, "mission");
                       });
            $("#bb40").click(function() {
                      Main.init("text",40, "mission");
           });
                $("#bb41").click(function() {
                      Main.init("text",41, "mission");
           });
                $("#bb42").click(function() {
                      Main.init("text",42, "mission");
           });
                $("#bb43").click(function() {
                      Main.init("text",43, "mission");
           });
                $("#bb44").click(function() {
                      Main.init("text",44, "mission");
           });
                 $("#bb45").click(function(){
                     Main.init("text",45, "mission");
            })
           $("#bb46").click(function() {
                      Main.init("text",46, "mission");
           });
           
           }
           function setTextAraHeight(){
           $("textarea").each(function(textarea) {
           $(this).height( $(this)[0].scrollHeight );
           });
           }
           function setAnimation(){
               
              jQuery('#mainContainer').css('opacity', '0');
           $("#mainContainer").animate({ 
                      opacity: '1'
           });
           }
           }
window.Main=Main;
}(window)
)