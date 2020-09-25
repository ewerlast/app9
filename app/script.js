// document.querySelector('#test').onkeypress = function (e) {
//     console.log(e.keyCode);
//     console.log(e.shiftKey);
//     if (e.keyCode < 97 || e.keyCode > 122) {
//         console.log('Недопустимые символы');
//     }
//     else {
//         this.value += e.key;
//     }
//     // e.altKey false
//     // e.charCode 97
//     // e.code "KeyA"
//     // e.ctrlKey false
//     // e.key: "a"
//     // e.keyCode: 97
//     // e.shiftKey: false
//     return false;
// }
/*let left = 0;

// document.onkeypress = function (e) {
//     console.log(e.keyCode);
//     let sq = document.querySelector('.sq');
//     if (e.keyCode == 100) {
//         left = left + 10;
//         sq.style.marginLeft = left + 'px';
//     }
//     if (e.keyCode == 97) {
//         left = left - 10;
//         sq.style.marginLeft = left + 'px';
//     }
// }

document.onkeypress = function () {
    console.log('keypress');
}
document.onkeydown = function () {
    console.log('keydown');
}

document.onkeyup = function () {
    console.log('keyup');
}*/


/*                  my cod                        */

                        /* Задача 1.
 Создайте input в который пользователь может вводить текст на латинице. Используя события клавиатуры перехватывайте введенный символ - если пользователь ввел маленькую (строчную) букву, выводите ее. Если большую (пропись) - удаляйте. Ограничте возможность введения только буквами. */

 document.querySelector('#dz1').onkeypress = function(e){
     console.log(e.keyCode);
   
     if (e.keyCode > 64 && e.keyCode < 89 || e.keyCode > 47 && e.keyCode  < 58) {
              console.log('Недопустимые символы');
              return false;
             }
           
      }


                        /* Задача 2. 
 Создайте один блок внутри другого. На внутренний блок добавьте возможность сдвига блока вправо, влево, вверх, вниз с помощью клавиш стрелок. Бонус - добавьте на пробел возможность поворота фигуры вокруг оси на 45 градусов.*/
let square = document.querySelector('.square');
let line = document.querySelector('.iline');
let right = 0;
let left = 0;
let topSquare = 0;
let bootomSquare = 0;
let rot = 25;

/* добавил чуть чуть радости */
let colorSquar = function(){
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
} 




function run(){

    document.onkeydown = function(e){
/* ввожу границы блока  */
        let lineStop = line.getBoundingClientRect();
        console.log( lineStop.left);
        let squareStop = square.getBoundingClientRect();
    
        if(squareStop.left < lineStop.left|| squareStop.right > lineStop.right ||
            
            squareStop.top < lineStop.top || squareStop.bottom > lineStop.bottom){
                line.style.border ='5px solid #eb0e0e';
                return false;          
        }
        
/* выполнение движения блока*/
        else{
                if(e.keyCode == 39){
                    right = right + 10;
                    square.style.marginLeft = right + 'px';
                
                }
                if(e.keyCode == 37){
                    right = right - 10;
                    square.style.marginLeft = right + 'px';
                }
                if(e.keyCode == 40){
                    bootomSquare = bootomSquare + 10;
                    square.style.marginTop = bootomSquare + 'px';
                }
                if(e.keyCode == 38){
                    bootomSquare = bootomSquare - 10;
                    square.style.marginTop = bootomSquare + 'px';
                }
            }   
                
                
  /* по заданию 45 градусов. Я сделал 25 градусов. так симпатишнее))) */          
                document.onkeypress = function(e){
                if(e.keyCode == 32){
                rot = rot + 45;
       
                square.style.transform = `rotate(${rot}deg)`;

                square.style.backgroundColor = `${colorSquar()}`;
            
            }
        }
        
    }
}
   
   
    run();
    

/* Задача 3.
 Напишите программу которая при нажатии кнопки клавиатуры меняет символ на произвольный.*/  
 
 let text =  document.querySelector('#random-text');
 
 text.onkeydown = function(){
    let rondomNumber = String.fromCharCode(Math.floor(Math.random() * 100));
    text.value = text.value.replace('',rondomNumber);
    return false;
 }
 
 
 /*Задача 4. 
 
 Напишите программу шутку которая меняет введенный символ q на w, w на e и т.д. Т.е. выполняет сдвиг на одну клавишу влево на клавиатуре. Последние символы строк меняет так: ] на q, \ на a, / на z. Возможно для решения потребуется массив. */
 
 let smileText = document.querySelector('#smile-text');
 let arr ={q:"w",w:'e',e:"r",r:"t",t:"y",y:"u",u:"i",i:"o",o:"p",p:"a",a:"s",
            s:"d",d:"f",f:"g",h:"J",j:"k",k:"l",z:"x",x:"c",c:"v",v:"b",b:"n",n:"m",m:"q"}

    
     smileText.onkeydown = function(e){
        let b = String.fromCharCode(e.keyCode).toLowerCase();
        smileText.value = smileText.value.replace('', arr[b]);
        return false;
        
     }
      