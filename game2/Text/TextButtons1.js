(function(window){
function  TextButtons1(){
  
}
TextButtons1.items = function(){
     var array = [];
   var obj = {};
   var str = "";
    obj.title="הכנות למשחק";//1
    str+= "קפצו לחנות הקרובה לביתכם והצטיידו בשתייה חריפה וגם בבירה/ יין";
   str+="\n";
    str+="\n";
    str+="כמות מומלצת לאדם:";
     str+="\n";
    str+="\n";
    str+="ליטר בירה/יין +5 צ&apos;ייסרים";
    obj.label = str;
   array.push(obj);
    obj = {};
   str = "";
    obj.title="שחקנים";//2
    str = "3-8 שחקנים";
    str+="\n";
    str+="\n";
    str+="גיל 18-99";
    str+="\n";
    str+="\n";
     str += "***על כל משתתף לקחת אחריות על כמות האלכוהול שהוא צורך.";
   obj.label = str;
   array.push(obj);
   obj = {};
   str = "";
    obj.title="לפני המשחק";//3
     str = "לפני תחילת המשחק יש לבחור משתתף שישמש כברמן ומשתתף שישמש כמנחה.";
    str+="\n";
    str+="\n";
    str+="תפקיד הברמן הוא לוודא שהכוסות של כולם מלאות ושתמיד יש צ&apos;ייסרים מוכנים לשתייה.";
    str+="\n";
    str+="\n";
    str+="תפקיד המנחה הוא להסביר את משמעות הקלפים,";
    str+="\n";
    str+="\n";
    str+="לכן, כדאי שהמנחה יהיה כזה שכבר שיחק את המשחק בעבר.";
    str+="\n";
    str+="\n";
    str+="אך אל דאגה, גם אם זהו משחקם הראשון של כלל המשתתפים,";
    str+="\n";
    str+="\n";
    str+="בקובץ זה מצורפות הוראות לכל המשימות במשחק."; 
   obj.label = str;
   array.push(obj);
   obj = {};
   str = "";
    obj.title="מהלך המשחק";//4
   str = "כל שחקן בתורו, לפי כיוון השעון, שולף קלף מהחפיסה וקורא אותו בקול. המנחה מסביר את משמעות הקלף, והמשתתפים פועלים על פי ההסבר.";
    str+="\n";
    str+="\n";
    str+="ממשיכים כך עד שנגמרת החבילה, או עד שכולם שיכורים דיים.";
    str+="\n";
    str+="\n";
    str+="*יש לערבב את הקלפים טרם תחילת המשחק";
   obj.label = str;
   array.push(obj);//5
   obj = {};
   str = "";
    obj.title="דף משימות";
     str+="לידיעת המנחה: בצד הימני העליון של כל קלף כתוב מספר, המציין את מקומו ברשימת הקלפים. כמו כן גם סימן של בירה/צ&apos;ייסר המסמל את המשקה אותו שותים בעקבות הקלף.";
   obj.label = str;
   array.push(obj);
   obj = {};
   str = "";
    obj.title="ה מ ש י מ ו ת";//6
    obj.label = "";
    array.push(obj);
    
    return array;
}

window.TextButtons1=TextButtons1;
}(window)
)