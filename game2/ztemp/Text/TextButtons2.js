(function(window){
function  TextButtons2(){
  
}
TextButtons2.items = function(){
   var array = [];
   var obj = {};
   obj.title="עד התחתית";//1
   obj.label = "שולף הקלף שותה את כל מה שיש לו בכוס הבירה עד סופה (רצוי לעודד אותו בקריאות &quot;צ&apos;אג&quot;).";
   array.push(obj);
    obj = {};
   obj.title="כולם שותים";//2
   obj.label = "כלל משתתפי המשחק לוקחים לגימה  מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="שלוש שניות צ&apos;אג";//3
   obj.label = "שולף הקלף לוקח לגימה גדולה מהבירה, במשך 3 שניות (רצוי לעודד אותו בקריאות צ&apos;אג).";
   array.push(obj);
   obj = {};
   obj.title="חַלֵק 3";//4
   obj.label = "שולף הקלף בוחר שלושה משתתפים שיישתו צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="חַלֵק 5";//5
   obj.label = "שולף הקלף בוחר חמישה משתתפים שיישתו לגימה מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="We dem boys";//6
   obj.label = "כל הבניםְ שותים לגימה מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="?Who runs the world";//7
   obj.label = "כל הבנות שותות לגימה מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="Freestyle rap";//8
   obj.label = "על שולף הקלף לבצע קטע ראפ באורך דקה על נושא שייבחר על ידי שאר המשתתפים. אם הוא אינו מסוגל לבצע את המשימה עליו לשתות את כל הבירה שנשארה לו ולהעביר את הקלף למשתתף אחר.";
   array.push(obj);
   obj = {};
   obj.title="כן-לא-שחור-לבן";//9
   obj.label = "חל איסור על שולף הקלף לומר את המילים &quot;כן&quot;, &quot;לא&quot;, &quot;שחור&quot;, &quot;לבן&quot; עד סוף המשחק. אם מתמודד אחר תופס אותו אומר את אחת המילים הללו, עליו ללגום מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="Duty free";//10
   obj.label = "כל משתתפי המשחק לוגמים מהבירה ככמות הפעמים שהיו בחו&quot;ל השנה. אם אף אחד לא היה בחו&quot;ל –  כולם שותים צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="Bone breaker";//11
   obj.label = "כל משתתפי המשחק לוגמים בירה ככמות הפעמים ששברו עצם בגוף.";
   array.push(obj);
   obj = {};
  obj.title="עץ או פלי";//12
   obj.label = "ממציאים משימה לשולף הקלף ומטילים מטבע. יוצא פלי - על שולף הקלף לבצע את המשימה.";
   array.push(obj);
   obj = {};
   obj.title="פדיחה";//13
   obj.label = "כל אחד ממשתתפי המשחק מספר פדיחה שקרתה לו, ולאחר הצבעה - בעל הפדיחה הכי פחות מפדחת שותה צ&apos;ייסר. במצב של תיקו – שני המשתתפים שותים צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="אמת או שקר";//14
   obj.label = "שולף הקלף מספר שני סיפורים על עצמו, אחד אמיתי ואחד שקרי. על שאר המשתתפים לנחש איזה סיפור אמיתי ואיזה שקרי. כל משתתף שטעה שותה צ&apos;ייסר. על כל משתתף שצדק, שולף הקלף שותה לגימה מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="הכי צעיר";//15
   obj.label = "המשתתף הכי צעיר שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="התרנגול השיכור";//16
   obj.label = "שולף הקלף בוחר חיה שעל כלל המשתתפים לחקות. המשתתף עם החיקוי הגרוע ביותר על-פי דעת הרוב שותה צ&apos;ייסר. במצב של תיקו – שני המשתתפים שותים";
   array.push(obj);
   obj = {};
   obj.title="שתה ושלוף";//17
   obj.label = "שולף הקלף שותה צ&apos;ייסר ושולף קלף נוסף.";
   array.push(obj);
   obj = {};
   obj.title="אבן, נייר ומספריים";//18
   obj.label = "שולף הקלף בוחר משתתף נוסף מולו יתחרה בקרב אבן, נייר ומספריים. המתמודד שהפסיד בקרב שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="יום האהבה";//19
   obj.label = "משתתפים שנמצאים במערכת יחסים לוגמים מהבירה. אם שני משתתפים נמצאים במערכת יחסים אחד עם השני – הם שותים צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="קרב אגודלים";//20
   obj.label = "שולף הקלף בוחר מול מי יתחרה בקרב אגודלים. המפסיד שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="שיפ-מה";//21
   obj.label = "על כל משתתפי המשחק להסתיר את שיניהם עם השפתיים. שולף הקלף מתחיל סבב עם כיוון השעון עם האימרה &quot;שיפ&quot;. משתתף שרוצה לשנות כיוון הסבב יעשה זאת על ידי האימרה &quot;שיפ מההה&quot;, והטיית ראשו לכיוון השני. המשתתף ששיניו נחשפות ראשונות שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
    obj.title="שלוק מגבוה";//22
   obj.label = "על שולף הקלף להטות את ראשו לאחור בזמן שמשתתף נוסף שופך לפיו בירה מגובה של 20 סנטימטר לפחות.";
   array.push(obj);
   obj = {};
   obj.title="צ&apos;ייסר מהפופיק";//23
   obj.label = "שולף הקלף שותה צ&apos;ייסר ישירות מהפופיק של משתתף שיבחר.";
   array.push(obj);
   obj = {};
   obj.title="תחרות מצמוצים";//24
   obj.label = "שולף הקלף בוחר משתתף נוסף מולו הוא יתמודד בתחרות מצמוצים. המפסיד שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="מדוזה";//25
   obj.label = "כל משתתפי המשחק מרכינים את ראשם ומרימים אותו לפי ספירה. כל מי שעיניו מצטלבות עם עיניו של משתתף אחר צריך לצעוק &quot;מדוזה&quot;. משתתף שצעקו עליו שותה צ&apos;ייסר. ";
   array.push(obj);
   obj = {};
   obj.title="קטגוריות";//26
   obj.label = "שולף הקלף בוחר קטגוריה מסוימת ומתחיל בעצמו סבב בו כל משתתף מציין סוג מאותה קטגוריה (אין לחזור על אותו סוג). המשתתף הראשון שנתקע (חושב יותר משלוש שניות) שותה צ&apos;ייסר. (לדוג&apos; מכוניות: מאזדה, טויוטה, שברולט...)";
   array.push(obj);
   obj = {};
   obj.title="משחק החרוזים";//27
   obj.label = "שולף הקלף בוחר מילה מסוימת ומתחיל בעצמו סבב בו כל משתתף מציין מילה המתחרזת (אין לחזור על אותה מילה). המשתתף הראשון שנתקע בלי חרוז (חושב יותר מחמש שניות) שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="מפני שיבה תקום";//28
   obj.label = "המשתתף הכי מבוגר בגיל שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="No phone";//29
   obj.label = "אסור לשולף הקלף לגעת בטלפון עד סוף המשחק. במידה ונגע, עליו לקחת לגימה מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="הראשון שהגיע";//30
   obj.label = "הראשון שהגיע (לא כולל בעל הבית) עושה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="האחרון שהגיע";//31
   obj.label = "האחרון שהגיע שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
      obj.title="נחש תצבע";//32
   obj.label = "שולף הקלף מנחש את צבע התחתונים של שאר משתתפי המשחק. משתתף שניחשו נכונה את צבע תחתוניו שותה צ&apos;ייסר. על כל משתתף שטעו לגביו, שולף הקלף לוגם מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="אחרון שנוגע באף";//33
   obj.label = "מרגע הכרזת הקלף האחרון שנוגע באפו שלו שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="שנה כיוון";//34
   obj.label = "משנים את כיוון שליפת הקלפים.";
   array.push(obj);
   obj = {};
   obj.title="משחק הצבעים";//35
   obj.label = "שולף הקלף בוחר צבע ומרגע שהכריז על הצבע שבחר על כלל המשתתפים לגעת בחפץ/ משטח בצבע זה. האחרון שנוגע שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="Battle rap";//36
   obj.label = "שולף הקלף בוחר משתתף נוסף מולו יתמודד בתחרות שירת ראפ, המפסיד (על פי דעת הרוב) שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="על חשבון הבית";//37
   obj.label = "בעל הבית שותה צ&apos;ייסר וממציא חוק (עדיפות לחוק הכולל שתיה).";
   array.push(obj);
   obj = {};
   obj.title="הפלמינגו השיכור";//38
   obj.label = "שולף הקלף בוחר משתתף נוסף לבצע מולו קרב עמידה על רגל אחת בעיניים עצומות. המפסיד בקרב שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="חוק חדש";//39
   obj.label = "על שולף הקלף להמציא חוק נוסף בנוסף לחוקי המשחק הקיימים.";
   array.push(obj);
   obj = {};
   obj.title="שם אחר";//40
   obj.label = "בוחרים לשולף הקלף שם השונה משמו ובמשך כל המשחק, על כלל המשתתפים לפנות אליו בשמו החדש בלבד. משתתף אשר לא פנה לשולף הקלף בשמו החדש לוגם מהבירה.";
   array.push(obj);
   obj = {};
   obj.title="צ&apos;ייסר בלי ידיים";//41
   obj.label = "מניחים כוס צ&apos;ייסר מלאה על השולחן ועל שולף הקלף לשתות אותו ללא שימוש בידיים";
   array.push(obj);
   obj = {};
     obj.title="יום הרווקים";//42
   obj.label = "כל הרווקים שותים צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="shoham-bomb";//43
   obj.label = "שולף הקלף שותה צ&apos;ייסר ומיד אחר כך שותה את כל הבירה שלו (רצוי לעודד אותו בקריאות צ&apos;אג).";
   array.push(obj);
   obj = {};
   obj.title="תחרות הורדת ידיים";//44
   obj.label = "על שולף הקלף לבחור משתתף מולו יתחרה בתחרות הורדת ידיים. המפסיד בתחרות שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="קווקווה דלה עומה";//45
   obj.label = "כלל משתתפי המשחק יושבים במעגל ומשחקים במשחק &quot;קווקווה דלה עומה&quot;. המשתתף שמפסיד במשחק שותה צ&apos;ייסר.";
   array.push(obj);
   obj = {};
   obj.title="צ&apos;אג או חובה";//46
   obj.label = "משתתפי המשחק בוחרים משימה לשולף הקלף. אם ברצונו לוותר על המשימה, עליו לשתות כוס בירה מלאה.";
   array.push(obj);
  
    return array;
}

window.TextButtons2=TextButtons2;
}(window)
)