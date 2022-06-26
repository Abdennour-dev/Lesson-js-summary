//تلخيص دروس الزيرو 
/*
- #007 - Output To Screen
-------------------------------
// window.alert() لاظهار نافذة
// document.write() للاظهار على الصفحة 
// console.log() للاظهار على كونصول المتصفح
##########################################################

- #008 - Console Methods And Styling And WebAPI
------------------------------------------------
 -log : لاظهار اي شيء على كونصول المتصفح
 exp : 
  console.log("hello")
 -error : لاظهار رسالة خطأ
 exp :
  console.error("error")
 -table : لانشاء جدول
 exp : 
  console.table(["abdennour","walid","maroua","nadjiba","fatima"])
 - web api : لقد افردنا له بحثا خاصا في جهة اخرى
 ..styling console
 -directive %c : نجعلها قبل الكلمة التي نود ان نضيف عليها تأثيرا 
 exp :
  console.log("%c hello","color:red;")
##########################################################

- #010 - Data Types And Typeof Operator
-----------------------------------------
Data rypes intro:
typeof : نستعملها لنعرف نوع البيانات
 1-string : حروف
 exp : 
  console.log(typeof "hello")
 2-number : ارقام
 exp:
  console.log(typeof 27)
  console.log(typeof 27.5)
 3-array ==> object : المصفوفة
 exp:
  console.log(typeof [12,08,1995])
 4-object : كائن
 exp:
  console.log(typeof {day:12,month:08,year:1995})
 5-boolean : true & false :صح ام خطأ
 exp:
  console.log(typeof true)
 6-undefined : غير معرف
 exp:
  let test;
  console.log(typeof test)
 7-null : فارغ
 exp:
 var age=null;
  console.log(typeof age) //object 
##########################################################

- #011 - Variables Introduction
-----------------------------------
exp:
1- استدعاء عادي
var user = "abdennour"
console.log(user)

2-id من طرف html استدعاء من ملف 
<h1 id='name'>hello my teacher</h1>
console.log(name) // hello my teacher

3-التعديل على مايظهر
name.innerhtml = "hello my father";
console.log(name) //hello my father

- #012 - Identifiers Name Conventions And Rules
----------------------------------------------------
-nameCamel : طريقة تسمية سنم الجمل
exp:
var myTemplate = "general"
-snake_name : طريقة تسمية الافعى
exp:
var my_template = "general"
##########################################################

- #013 - Var, Let, Const Compare
----------------------------------
 /// redeclare سنجري مقارنة ///
var  : 

1-redeclare (نعم نستطيع)
exp : 
var a = 1;
var a = 2 ;
console.log(a); // 2 

let & const :

1-redeclare (لا نستطيع)
exp : 
let a = 1;
let a = 2 ;
console.log(a);
const a = 1;
const a = 2 ;
console.log(a); // error لا نستطيع 

/// access before declare مقارنة /// 
var  : 

2-access before declare (undefined)
exp : 
console.log(b); //undefined
var b = 1;

let & const :

2-access before declare()
exp : 
-let
console.log(b); //error  يقول لازم ديلير قبل الكونصول
let b = 1;
-const
console.log(b); //error  يقول لازم ديلير قبل الكونصول
const b = 1;

///  variable scope drama مقارنة  ///
var :

3-variable scope drama (window اي متغير يضاف الى )

let & const :

3-variable scope drama ( window لا يمكن ان يضاف الى )

##########################################################
- #014 - String Syntax And Character Escape Sequences
------------------------------------------------------
\ : escape+line continue  " " '' نستخدمه لتفادي ظهور مشاكل
exp : 
 console.log("hello \'my father\'")

\n: escape نستخدمه لتخطي سطر
exp:
 console.log("hello \n world") 
##########################################################

- #015 - Concatenation
<<<<<<< HEAD
exp :
let a = "my name";
let b = "is abdennour";
console.log(a+" "+b) // my name is abdennour

##########################################################
- #016 - Template Literals Template Strings
-----------------------------------------------
exp:
let a = "my name";
let b = "is abdennour";
console.log(`${a} ${b}`) // my name is abdennour

##########################################################
- #018 - Arithmetic Operators
------------------------------------------------------------------
+ addition : exp : 5 + 6 // 11
- subtraction : exp : 11 - 5 // 6
* multiplication : exp : 11 * 9 // 99 
/ division : exp : 15 / 3 // 5
** exponentiation : exp : 5**2 //25
% modulus : exp : 10 % 8 // 2
++ increment [post / pre] 
exp : let num = 15 ;
post ==> num++ //  15  , ستظهر15 مع تخزين 1 المزاد وعند استدعاء المتغير من جديد تصبح نتيجة 16
pre ==> ++num //  16 , مباشرة يضيف واحد الى المتغير 

-- decrement [post / pre]


##########################################################
=======
--------------------------
exp:
let a = "we love"
let b = "javascript"
document.write(a +" "+ b);
##########################################################

- #016 - Template Literals Template Strings
--------------------------------------------
exp:
let a = "we love"
let b = "javascript"
document.write(`${a} ${b}`);
##########################################################

- #018 - Arithmetic Operators
------------------------------
+ : addition ,exp : console.log(10 + 20) //30
- : subtraction ,exp : console.log(15 - 5) //10
* : multiplication ,exp : console.log(5 * 5) //25
/ : division ,exp : console.log(40 / 8) //5
% : modulus ,exp : console.log(10 / 8) //2
** : exponentiation , exp : console.log(2**2) //4
++ : increment [post / pre] ,
exp : a = 10;
 post ==> console.log(a++) //ستظهر النتيجة 10 ولكن عند استدهاء المتغير مرة اخرى تظهر النتيجة 11 اي انها تضيف واحد للمتغير وعند الاستدعاء مرة اخرى تظهر 11
 pre ==> console.log(++a) //تظهر مباشرة 11
-- : decrement [post / pre] ,
exp : b = 5 ;
 post ==> console.log(b--) //تظهر 5 ولكن عند استدعاء مرة اخرى تظهر 4
 pre ==> console.log(--b) //4
##########################################################

- #019 - Unary Plus And Negation Operators_2
----------------------------------------------
- Unary Plus :
normal number :exp: console.log(100) //100
string number :exp: console.log(+"100") //100
string negative number :exp: console.log(+"-100") //-100
string text :exp: console.log(+"abdennour") //nan
float :exp: console.log(+15.5) //15.5
hexadecimal numeral system => 0xff exp: console.log(+0xff) //255
null : exp: console.log(+null) //0
false: exp: console.log(+false) //0
true : exp: console.log(+true) //1
- Unary negation :
normal number :exp: console.log(-100) //-100
string number :exp: console.log(-"100") //-100
string negative number :exp: console.log(-"-100") //+100
string text :exp: console.log(-"abdennour") //nan
float :exp: console.log(-15.5) //-15.5
hexadecimal numeral system => 0xff exp: console.log(-0xff) //-255
null : exp: console.log(-null) //-0
false: exp: console.log(-false) //-0
true : exp: console.log(-true) //-1
##########################################################

- #020 - Type Coercion
------------------------
-exp :
let a ="10";
let b = 20;
let c = true;
console.log(a + b)//30
console.log(a - b)//-10
console.log("" - b)//-20
console.log(false - true)//-1 
##########################################################

- #021 - Assignment Operators
------------------------------
-exp : let a = 10;
a = a + 20; ====> console.log(a += 20)//30
a = a - 20; ====> console.log(a -= 20)//-10
a = a * 20; ====> console.log(a *= 20)//200
##########################################################

- #023 - Number
------------------
-double precision : exp : console.log(1000000)//1000000
-syntactic sugar "_": exp : console.log(1_000_000)//1000000
-e: exp : console.log(1e6)//1000000
-**: exp : console.log(10**6)//1000000
-with decimal: exp : console.log(10*10*10*10*10*10)//1000000
-: exp : console.log(1000000.0)//1000000
-number + bigInt: 
-exp : console.log(number.MAX_SAFE_INTEGERs)//وهذا أأمن رقم باللغة يمكنك استخدامه
-exp : console.log(number.MAX_VALUE)//هذا اعلى رقم باللغة
##########################################################

- #024 - Number Methods_2
---------------------------
-two dos to call a methods , exp : console.log(100..toString());//  عندما نكتب نقطتين نحن نقول له بان العدد صحيح تماما وليس عشري وحوله لنا الى نوع سترينق اي كلمة 
-toString(), exp : console.log((100).toString());// string لتحويله الى 
-toFixed(), exp : console.log((100.5555).toFixed(2));//100.56 يضع عددين بعد الفاصلة مع التدوير 
-parseInt(), exp : console.log(parseInt(("100 abdennour"));//100 integer numberيقوم بتحليل الكلمات واستخراج ال
-parseFloat(), exp : console.log(parseFloat(("100.89 abdennour"));//100.89 يقوم بتحليل العبارة واستخراج العدد العشري
-Number.isInteger(), exp : console.log(Number.isInteger("100"));//false تحلل العبارة هل هي عدد صحيح ام لا
-Number.isInteger(), exp : console.log(Number.isInteger(100.66));//false تحلل العبارة هل هي عدد صحيح ام لا
-Number.isInteger(), exp : console.log(Number.isInteger(100));//true تحلل العبارة هل هي عدد صحيح ام لا
-Number.isNaN(), exp : console.log(Number.isNaN("HI"));//false تحلل العبارة هل هي عدد صحيح ام لا
##########################################################

- #025 - Math Object
---------------------
 -round() exp : console.log(math.round(99.2));//99 قوم بعملية التدوير يعني فوق خمسة او خمسة نصعد مرتبة واذا تحت الخمسة نعود 
 -ceil() exp : console.log(math.ceil(99.2));//تدوير للاعلى 100
 -floor() exp : console.log(math.floor(99.6));//99 تدوير للاسفل 
 -min() exp : console.log(math.min(10,20,100,-100,90));//-100 اقل قيمة
 -min() exp : console.log(math.min(10,20,100,-100,90));//100 اعلى قيمة 
 -pow() exp : console.log(math.pow(5,2));//25 تعمل عمل الأس
 -random() exp : console.log(math.random());// رقم عشوائي
 -trunc() exp : console.log(math.trunc(77.6));//77 ينزع العدد الذي بعد الفاصلة
##########################################################

- #027 - String Methods Part 1
-----------------------------------
 1-access with index , 
 exp : 
 let nm ="abdennour"; console.log(nm[3]);// e  انتقل عبر الاسم عبد النور واختار الحرف الذي يقع في العدد 3 والحساب يبدا من 0
 2-access with chartAt() , 
 exp : 
 let bh ="bouhanna"; console.log(bh.chartAt(3));// h اختيار مكان الاندكس رقم 3 بدا من 0
 3-.lenght, 
  exp :
  let vh ="bouhanna"; console.log(vh.lenght);// 8 لمعرفة عدد الاندكس
 4-trim(),
 exp :
  let th =" bouhanna "; console.log(th.trim());// bouhanna نزع الفراغات في الاول والاخير 
 5-toUpperCase(), 
 exp :
  console.log("abdennour".toUpperCase());// ABDENNOUR جعل الكلمات كبيرة
 6-toLowerCase(), 
 exp :
  console.log("ABDENNOUR".toLowerCase());// abdennour جعل الكلمات الصغيرة
 -chain methods : استخدام كم عنصر في الكود
  exp : 
  console.log(" my name abdennour ".trim().charAt(3).toUpperCase());// N
 7-indexOf() ,
 exp: let a =" elzero web school"
   console.log(a.indexOf("web",0)) // 8 قلت له ابحث عن كلمة ويب بدا من الاندكس 0 حتى تجدها 
 8-lastIndexOf() ,
 exp:console.log(a.lastIndexOf("o")) // 15  سوف يبدأ البحث من الاخير ويحسب من اليسار 
 9-slice() ,
  exp :console.log(a.slice(2)) // zero web school  تستعمل للقطع من الاندكس 2 ماقبله يقطع 
 10-repeat() ,
  exp : console.log(a.repeat(5)) // ستظهر النتيجة 5 مرات متكررة 
 11-split() ,
  exp : console.log(a.split("",6 هذا عدد حدود التقسيم )) // يقوم بتقسيم العبارة حرفا حرفا على شكل مصفوفة 
 12-substring() , 
 exp : console.log(a.substring(2,6)) //elzero  يقوم على تقطيع العبارة 
 12-substr() , 
 exp : console.log(a.substr(0,6)) //elzero
 exp : console.log(a.substr(-5,2)) //ch  تعمل على تقطيع العبارة بالطريقة التي نود وتقبل الحساب من الاخير للاول 
 13-include() ,
 exp : console.log(a.include("web")) //true نستعملها للبحث عن الكلمة في العبارة وتكون الاجابة بصح او خطأ
 14-startsWith() ,
 exp : console.log(a.startswith("z",2)) //true قلت له ابحثلي اذا كان الاندكس 2 يبدا بحرف زاد
 15-endsWith() ,
 exp : console.log(a.endsWith("l")) //true سالته هل العبار الخاصة بي تنتهي بالحرف اللي اعطيتك قال لي نعم
 ##########################################################

 - #031 - Comparison Operators
 ------------------------------
 في هذا الشطر نحن نقارن القيمة 
 Equal  ==  : exp console.log("10" == 10 )//true  
 Not equal != : exp console.log("10"  != 10 )//false 

هنا نقارن القيمة ونوع البيانات
 Identical === : exp console.log("10" === 10 )//false 
 Not identical !== : exp console.log("10" !== 10 )//true

هنا نقارن بطريقة عادية 
 > Larger than : exp console.log("10" > 10 )//false
 >= Larger than or equal : exp console.log("10" >= 10 )//true
هنا نقارن بطريقة عادية 
 < Smaler than : exp console.log("10" < 12 )//true
 <= Smaler than or equal : exp console.log("10" <= 10 )//true
 ##########################################################

- #032 - Logical Operators
---------------------------
Not ! : معناها ليس
exp : console.log(true)//true - not - console.log(!true)//false
And &&  : معناها و
exp : console.log(10 == "10" && 10 < 15)//true

Or || : معناها أو 
exp : console.log(10 == "10" || 10 < 15)//true
##########################################################

- #033 - If Conditions
-----------------------------
if( هنا نكتب الشرط ){

هنا ما يحصل اذا حصل الشرط

}else if( هنا الشرط الثاني ){

اذا لم يتحقق الشرط الاول
يتحقق حاصل الشرط الثاني

}else{

هنا ما سيحصل اذا لم يتحقق كل من الشرطين الاولين

}
exp : 
let price = 100, discount = true , discountamount = 30 , country = "algeria" ;
if(discount == true){
  price -= discountamount;
}else if (country = "algeria"){
 price -= 50;
}else{
  price -= 10;
}
console.log(price)// 70 ظهرت هذه النتيجة لان الشرط الاول تحقق 
##########################################################

- #034 - Nested If Condition
-----------------------------------
سنأخذ نفس شروط الاول
exp :
let price = 100, discount = true , discountamount = 30 , country = "algeria" , student = true;
if(country =="algeria"){
  if(student == true){
  price -=  price -= discountamount +50;
  }else{
     price -= discountamount + 10;
  }
}
console.log(price)//80 تحقق شرط الطالب وتم انقاص 80 بالمئة من الثمن 
##########################################################

- #035 - Conditional Ternary Operator
---------------------------------------
// condition ? if true : if false 
سنقوم باخذ مثال عن الكتابة المختصرة للشروط 
exp : 
let nm ="abdennour" , gn = "male" , ag =27 ; 
gn ==="male" ? console.log(`hello mrs ${nm}`); :console.log(`hello miss`);

*/  


