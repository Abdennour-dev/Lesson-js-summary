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
gn ==="male"  الشرط
? console.log(`hello mrs ${nm}`); حاصل الشرط
:console.log(`hello miss`); اذا لم يتحقق الشرط يحصل هذا 
##########################################################

- #036 - Nullish Coalescing Operator And Logical Or
----------------------------------------------------
1-Nullish Coalescing Operator 
exp : Null + Undefined الشرط
let price = null ;
console.log(`the price is ${price ?? 200}`)// 0     في وجود القيمة المشروطة ومع استعمال رمزي الاستفهام ستظهر النتيجة 0 

2-Logical Or
exp: Null + Undefined + Any Falsy Value الشرط
let price = 0 ;
console.log(`the price is ${price || 200}`)// 200      في وجود القيمية المشروطة ومع استعمال رمز ال أو ستظهر نتيجة 200  
##########################################################

- #038 - Switch Statement
----------------------------
switch(expression){
  case1 : 
  // code block
  break ;
  case2 : 
  // code block
  break ;
  case3 : 
  // code block
  break ;
  default :
}

exp : 
let day = 2 ; //سيظهر لنا يوم الاثنين
let day = 3 ; // multiple match سيظهر لنا يوم الاثنين وهذه الطريقة الاكثر من اسدعاء 
let day = 6 ; // ستظهر رسالة هذا يوم غير معروف لان 6 غير موجودة داخل السويتش 
switch(day){
  case 0: 
  console.log("السبت")
  break ;
  case 1: 
  console.log("الاحد")
  break ;
  case 2: 
  case 3: 
  console.log("الاثنين")
  break ;
  default:
     console.log("هذا يوم غير معروف")
}
##########################################################

- #040 - Array Big Introduction  تعريف جيد عن المصفوفة
------------------------------------
1- creat arrays 2 methods  new Array() + []:
exp : 
const cars = ["Saab", "Volvo", "BMW"];
const cars = new Array("Saab", "Volvo", "BMW");

2-access arrays elements :
exp : 
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[2])//BMW     ستظهر هذه النتيجة لاننا استجعينا الاندكس رقم 2 
console.log(cars[2][1])//M    استدعينا اندكس 2 والحرف الثاني الموجود في الاندكس 1 

3-nested arrays :
exp:
const cars = ["Saab", "Volvo", "BMW" , ["renault","toyota"]];
console.log(cars[3][1])//toyota     استدعينا الاندكس 3 ومنه الاندكس 1 لتظهر النتيجة طويوطا 

4-change arrays elements :
exp:
var cars = ["Saab", "Volvo", "BMW" , ["renault","toyota"]];
cars[1] = "Audi";
console.log(cars)//"Saab", "Audi", "BMW" , ["renault","toyota"]

5-check for array array.isarray() :
exp: 
var cars = ["Saab", "Volvo", "BMW" , ["renault","toyota"]];
console.log(Array.isArray(cars))//true
##########################################################

- #041 - Using Length With Array التعامل مع طول المصفوفة
----------------------------------
-length : exp : 
let my_freind = ["a","b","c","d"] ;
console.log(my_freind.length)// 4
console.log(my_freind.length - 2)// ["a","b"] استخدام خاصية معرفة طول المصفوفة لاظهار عدد معين من المصفوفات 
##########################################################

- #042 - Add And Remove From Array حذف واضافة البيانات الى المصفوفة
------------------------------------
-Arrays Methods [adding and removing]
1- unshift ("","") : اضافة عبارة الى البداية
exp: 
let arry = ["abdennour","anes","islem","soundous"]
 arry.unshift("chahra","mohammed","djamel","walid","maroua","amira","fatima","asma","nadjiba","amina")
console.log(arry)//  ستضاف المصفوفة الجديدة الى المصفوفة الاولى من الجهة الامامية
2- push("","") :اضافة عبارة للاخير
3- shift() : حذف اول عبارة من المصفوفة
4- pop() : حذف آخر عبارة من المصفوفة 
##########################################################

- #043 - Searching Array
--------------------------
-Arrays Methods [Searching] البحث عن البيانات 
1-indexOf(من إلى ,العبارة التي تبحث عنها)
exp :
let listNames = ["walid","abdennour","fatima","nadjiba","walid"];
console.log(listNames.indexOf("walid"))// 1   1 نستخدمها للبحث من اليسار لليمين سيقول لنا ان كلمة وليد تقع في الاندكس رقم  
2-lastIndexOf(search element , from index )
exp :
console.log(listNames.lastIndexOf("walid"))//3 هذه تبحث من اليمين لليسار
3-includes(valueToFind , fromIndex)[ES7]
exp :
console.log(listNames.includes("bouchra"))// false بحثنا عن اسم بشرى فالمصفوفة فلم يجدها فظهرت رسالة خطأ 
##########################################################

- #044 - Sorting Arrays
--------------------------
-Array methods [Sort] ترتيب البيانات 
1-sort(Function )
exp: let list = ["fatima", 9 , "nadjiba",5 , 8 ,"maroua", 4 ,"walid","abdennour"] ;
console.log(list.sort())// سيقوم بترتيب االمصفوفة ابجديا

2-reverse()
exp:
console.log(list.reverse())// سيقوم بعكس الاماكن في المصفوفة ما كان في اليمين يصبح في اليسار والعكس بالعكس
##########################################################

- #045 - Slicing Array 
-----------------------
-Array methods [Slicing] التقطيع في المصفوفات
1-slice( البداية start , end not including end لا يدخل آخر عنصر )
exp: let myl=["abdennour","younes","anes","islem","soundous"]
console.log(myl.slice())// سياخذا كامل المصفوفة ويظهرها
console.log(myl.slice(2))//["anes","islem","soundous"]   سيظهر هذه النتيجة بدأ من الاندكس  2 
  تقوم بانشاء مصفوفة جديدة اي انها لا تؤثر على المصفوفة الأم slice() ملاحظة 

2-splice("ما هي العناصر التي تود ان تضيفها","عدد العناصر التي تود ان تحذفها","رقم الاندكس الذي تود ان تعدل عليه")
exp : 
console.log(myl.splice(0,2,"amin","fateh"))//["amin","fateh","anes","islem","soundous"]
##########################################################

- #046 - Joining Arrays 
-------------------------
-Array methods [Joining] الجمع في المصفوفات
1-concat(array , array) => return a new array
exp: 
let a =[1 , 2, 3 ,4] , b=["volvo","toyota"] , c =["abdennour","walid"];
let ELL = a.concat(b,c,"nadjiba",["fatima","maroua"]);
consloe.log(ELL)// سيقوم بجمع جميع المصفوفات في مصفوفة واحدة

2-join(separator تضع هنا اي رمز تود ان تفصل به ) نستعملها لجمع او اصاق جميع البيانات ببعضها في المصفوفة
exp: 
consloe.log(ELL.join( " " ))//   ويضع فراغا بين كل عنصر موجود في المصفوفة ولك الحرية بأي شيء تود ان تفصل  string  سيحول كل المصفوفة الى 

##########################################################

****************يتبع*****************
- #071 - Higher Order Functions - Map
----------------------------------------
Higher Order Functions
> is a function that accepts functions as parameters and/or returns a function.
- - Map
method creates a new array
populated with the results of calling a provided function on every element
in the calling array.
Syntax map(callBackFunction(Element, Index, Array){}, thisArg)
- Element => The current element being processed in the array.
- Index = > The index of the current element being processed in the array.
- Array = > The Current Array
Notes
- Map Return A New Array
Examples
- Anonymous Function
- Named Function

##########################################################

- #072 - Higher Order Functions - Map Practice
------------------------------------------------
-MAP :
- swap cases
- inverted numbers
- ignore numbers value
map مثال عملي على 
1)example :
المطلوب ارجاع الحروف الكبيرة الى صغيرة 

let swappingCases = "elZERo" ;

let sw = swappingCases.split("").map(function (ele){
// Condition ? True : False
return ele === ele.toUpperCase()? ele.toLowerCase (): ele.toUpperCase() ;
}.join("");
console.log(sw);// ELzerO   ونكون قد حللنا المشكل 

2)example :
جعل كل رقم موجب سالب والعكس صحيح 
let invertedNumbers = [1, -10, -20, 15, 190, -39] ;
let inv = invertedNumbers.map(function(ele){
  returne -ele;
});
console.log(inv);// [-1, 10, 20, -15, -190, 39]  ونكون قد حللنا المشكل 

3)example :
اظهار العبارة دون ارقام
let ignoreNumbers = "Elzl23er4o";
let ign = ignoreNumbers.split("").map(function(ele){
return isNaN(parseInt(ele))? ele : "";
}.join(""));
console.log(ign)// Elzero ويتم حل المشكل والنتيجة هاهي


##########################################################

- #073 - Higher Order Functions - Filter
------------------------------------------
- - Filter
method creates a new array
- with all elements that pass the test implemented by the provided function.
Syntax filter (callBackFunction ( Element, Index, Array ) { }, thisArg)
- Element => The current element being processed in the array *
- - Index = > The index of the current element being processed in the array.
Array => The Current Array

1)-- example :

// اجمعلي كل رقم بنفسو 
let numbers = [11, 20, 2, 5, 17, 10];

 مثال نبين فيه الفرق بين استعمال  
 map and filter

 // Test Map vs Filter

let addMap = numbers.map(function (el) {
return el + el;
};
console.log(addMap); // [22, 40, 4, 10, 34, 20] قامت بجمع كل عدد بنفسه

let addFilter = numbers.filter(function (el) {
return el + el;
};
console.log(addFilter) ; // [11, 20, 2, 5, 17, 10]  بقيت كما هي وانما قامت بتست فقط 

2)-- example :

// Get Friends With Name Starts With A - A أعطني الاسماء التي تبدأ بحرف

let friends = [ Ahmed , "Sameh", "Sayed ", "Asmaa", "Amgad ", "Israa"];

let filterdFriends = friends,filter (function(el){
return el.startsWith("A")? true : false;
});
console.log(filterdFriends) ;

3)-- example :

// Get Even Numbers Only , أعطني الارقام الزوجية فقط 

let numbers = [11, 20, 2, 5, 17, 10] ;
let evenNumbers = numbers.filter(function (el){
return el % 2 === 0 ;
};
console.log(evenNumbers) ;

##########################################################

- #074 - Higher Order Functions - Filter Practice
---------------------------------------------------
1) example :

// Filter Words More Than 4 Characters : انزع الكلمات التي يفوق عدد حروفها 4

let sentence = " I Love Foood Code Too Playing Much ";
let smallWords = sentence.split(" ").filter(function(ele){
return ele.length <= 4;
}).join("");

console.log(smallWords) ;

2) example : 

// Filter Strings + Multiply : اظهر الارقام من العبارة واضرب كل رقم في نفسه 

let mix = "A13BS2ZX";
let mixedContent = mix.split("").filter(function (ele) {
return !isNaN(parseInt(ele));
}).map(function (ele) {
return ele * ele;
}).join("");

console.log(mixedcontent) ;

##########################################################

****************يتبع*****************


- #086 - What Is DOM And Select Elements
-----------------------------------------
DOM : document object model
****************************************
code html:
 <title>my title</title>
 <body>
 <div id='my-c'>you welcome</div>
 <p>hello my friends</p>
 <p>my class</p>
 <p>my shop</p>
 <span class='myspan'>april month</span>
 <header class="hd"></header>
 <form>
 <input name="addition" value="1"/>
 <input name="addition2" value="2"/>
 </form>
 <form>
 <input name="addition3" value="3"/>
 <input name="addition4" value="4"/>
 </form>
 <a href="#">01</a>
 <a href="#">02</a>
 <a href="#3">03</a>
</body>
******************************************
1-- Find element by id :
     exp : 
       let myId = document.getElementById("my-c");
       
2-- Find element by tage name :
     exp : 
       let myTg = document.getElementsByTagName("p");

3-- Find element by class :
     exp : 
       let myCls = document.getElementByClassName("myspan");

4-- Find element by css selectors :(internet explorer 8 غير مدعومة في )
     exp : 
       let myQuery = document.getElementByquerySelector(".hd");       
       let myallQuery = document.getElementByquerySelectorAll(".hd");       لاستدعاء جميع الوسوم التي تحمل نفس الكلاص
 
5-- title , body , forms , links: 
     exp:
       - document.title //
       - document.body //
       - document.forms[0].addition.value // يمكن ان نعامل ما نستدعيه حتى بطريقة المصفوفات والاندكس
       - document.links[2].href // #3 ستظهر نتيجة الرابط كما هو موضح
##########################################################

- #087 - Get Set Elements Content And Attributes
--------------------------------------------------
****************************************
code html:
<div class="js">javascript <span>div</span></div>
<img srv="" alt="" />
<a href="#" class="links">google</a>

******************************************
DOM [Get / Set elements content and attributes]
1-- innerHTML :
2-- textContent :
exp: 
let myElement = document.getElementByquerySelector(".js");       لاستدعاء جميع الوسوم التي تحمل نفس الكلاص
 
                                                                       سوف نقوم بتغيير محتوى الكلاص الذي استدعيناه   
                                                                      سنغير محتوى
                                                                       html
myElement.innerHTML ="salam alikoum<h1>abdennour</h1> " ;// 
                                                                    سنقوم بتغيير محتوى النص وليس اكواد
                                                                    html
myElement.textContent ="salam alikoum<h1>abdennour</h1> " ;//   

3-- change attributes directly
-images : التعديل على صورة والتعامل معها

document.images[0].src = "myfiles/img/header.png";
document.images[0].alt = "header image";
document.images[0].title = "header image";
document.images[0].id = "header image";

4-- change attributes with methods
   --- getAttribute
   --- setAttribute
   exp:
   let mylinks = document.querySelector(".links");
      console.log(mylinks.getAttribute("class"))
      console.log(mylinks.getAttribute("href")) استدعاء الاتربيوت
      console.log(mylinks.setAttribute("href","https://google.fr"))مع انشاء اتربييوت اضافة رابط الى هذا اتربييوت
      console.log(mylinks.setAttribute("title","hi") // اضفنا اتربيوت وهو عنوان كان غير موجود
##########################################################

- #088 - Check Attributes And Examples
----------------------------------------
****************************************
code html:
<div>div</div>
<p class="para" title="paragraph" data-src="testing">paragraph</p>

*****************************************
DOM [Check Attributes]
1-Element.attributes , -Element.hasAttributes:
exp:
console.log(document.getElementsByTagName("p")[0].attributes)// p ستظهر لنا جميع عناصر الاتربييوت الموجودة في عنصر المستدعى 
2-Element.hasAttribute :
exp : 
let myP = document.getElementsByTagName("p")[0]
if(myP.hasAttribute("data-src")){اشترطنا اذا موجود هذا الاتربييوت ولا ولا 
  console.log("FOUND") ستظهر هذه النتيجة اذن هو موجود 
}else{
  console.log("NOT FOUND")
}
-Element.removeAttribute
exp : 
let myP = document.getElementsByTagName("p")[0]
if(myP.hasAttribute("data-src")){اشترطنا اذا موجود هذا الاتربييوت ولا ولا 
removeAttribute(" ")
}else{
  console.log("NOT FOUND")
}
##########################################################

- #089 - Create And Append Elements
-------------------------------------
DOM [Creat Elements]:
 -createElements
 -createComment
 -createTextNode
 -createAttribute
 -appendChild
   نستعمل مثالا عمليا نفهم فيه هذه الاكواد
        قمنا بانشاء هذا الكود باكواد الجافاسكربت
  **************************
<div class="product" data-custom="" data-test="testing"><!--This is div-->Product one</div>

********************************
let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product one");
let myComment = document.createComment("This is div");

myElement.className ="product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test","testing");

// append comment to element
myElement.appendChild(myComment);

// append text to element
myElement.appendChild(myText);

// append element to body
document.body.appendChild(myElement)
##########################################################

- #090 - Product With Title And Description Practice
-----------------------------------------------------
DOM [Creat Elements]:
 --practice product with headeing and paragraph
  
   مثال آخر جيد 

  let myMainElement = document.createElement("div");
  let myHeading = document.createElement("h2");
  let myParagraph = document.createElement("p");

  let myHeadingText = document.createTextNode("Product Title");
  let myParagraphText = document.createTextNode("Product Description");

  //Add heading text 
  myHeading.appendChild(myHeadingText);

  //Add heading to main element
  myMainElement.appendChild(myHeading);

  //Add paragraph text
  myParagraph.appendChild(myParagraphText);

  //Add paragraph to main element
  myMainElement.appendChild(myParagraphText);

  myMainElement.className = "product";
  
  document.body.appendChild(myMainElement);
  ##########################################################

 - #091 - Deal With Children's
 --------------------------------
******************************
code html :
<div>
hello div
<p> hello p </p>
<span>hello span</span>
<!-- comment -->
hello 
</div>

**********************************
 -children
 -childNodes
 -firstChild
 -lastChild
 -firstElementChild
 -lastElementChild
 سنضع بعض الامثلة عليها مع شرح خفيف

 let myElement = document.querySelector("div")
 console.log(myElement); كاملا div تظهرالوسم 
 console.log(myElement.children);تظهر العناصر التي بداخل الديف
 console.log(myElement.children[0]);يأتي باول عنصر
 console.log(myElement.childNodes);ياتي بكل ما هو بادخل الديف
 console.log(myElement.childNodes[0]);ياتيك باول شيء داخل الديف
 console.log(myElement.firstChild);او طفل كان شيء ام عنصر
 console.log(myElement.lastChild);آخر شيء
 console.log(myElement.firstElementChild);اول عنصر
 console.log(myElement.lastElementChild);آخر عنصر
##########################################################

- #092 - DOM Events
DOM [Events]:
-Use events on html 
*********************************
code html
مثال 
<button id="btn" onclick ="consol.log("clicked")">click here</button>

*********************************
-Use events on js 
1-onclick : لعمل حدث بعد الكليك
exp: 
let myBtn = document.getElementById("btn");
 myBtn.onclick = function(){
   console.log("clicked");
 }
2-oncontextmenu : عند الضغط على يمين الفأرة 
3-onmouseenter : عندما تمر الفارة عليه
4-onmouseleave : عند مرور الفارة عليه ثم انسحابها

5-onload
6-onscroll : عند هبوطك في صفحة طويلة يمكنك استخدامها
7-onresize : عندك تغييرك لحجم في الصفحة
 
8-onfocus : عند تركيزك مثلا على انبووت
9-onblur
10-onsubmit  تستعمل في ارسال البيانات 


*/





