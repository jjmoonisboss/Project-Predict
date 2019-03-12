$("#name").click(function(){
    var input;
    input = $("input").val();
     $("#userName").text("Hiya " + input + "! ");
    
});

$("#old").click(function(){
   var year;
    year = $(".userAns").val();
     console.log (parseInt(year));
     $("#age").text("You're " + year + " years old! ");
  
});

$("#month").click(function(){
     var t;
       t = $(".monthAns").val();
         if (t === 'janurary' || t==='jan' ){
             $("#seasons").text("You were born in " + t + "! ");}
           else if (t === 'feburary' || t==='feb' ||  t==='f'){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'march' || t==='mar' ||  t==='m'){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'april' || t==='apr' ||  t==='a'){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t==='may' ){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'june' || t==='jun'|| t==='j' ){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'july' || t==='jul' ||  t==='ju'){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'august' || t==='aug' ||  t==='a'){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'september' || t==='sep' ||  t==='s'){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'october' || t==='oct' ||  t==='o'){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'november' || t==='nov' ||  t==='n'){
             $("#seasons").text("You were born in " + t + "! ");}
             else if (t === 'december' || t==='dec' ||  t==='d'){
             $("#seasons").text("You were born in " + t + "! ");}
         else{
              $("#seasons").text("That's not a month silly.");
             }
});

$("#time").click(function(){
     var clock;
       clock = $(".days").val();
         
         
 if(clock === '1' || clock==='21'||clock=== '31' ){
     clock = clock + 'st';
     } else if(clock === '2' || clock === '22'){
        clock = clock + 'nd';
    } else if(clock === '3'  || clock === '23'){
        clock = clock + 'rd';
    }else if(clock==='4'||clock==='5'||clock==='6'||clock==='7'||clock==='8'||clock==='9'||clock==='10'||clock==='11'||clock==='12'||clock==='13'||clock==='14'||clock==='15'||clock==='16'||clock==='17'||clock==='18'||clock==='19'||clock==='20'||clock==='24'||clock==='25'||clock==='26'||clock==='27'||clock==='28'||clock==='29'||clock==='30'){
         clock = clock + 'th';}
    else{
       
        }
    $("#day").text("You were born on the " + clock + ".");
    
      
});

var monthAns;
monthAns = 'march';

var days;
days = '24';


     
if(monthAns ==='march' && days==='21'|| monthAns ==='march' &&  days==='22'|| monthAns ==='march' &&  days==='23'|| monthAns ==='march' &&  days=== '24'||monthAns ==='march' &&  days==='25'||monthAns ==='march' &&  days==='26'||monthAns ==='march' &&  days==='27'|| monthAns ==='march' && days==='28'||monthAns ==='march' &&  days==='29'||monthAns ==='march' &&  days==='30'||monthAns ==='march' &&  days==='31'|| monthAns ==='april' && days ==='1'||monthAns ==='april' && days ==='2'||monthAns ==='april' && days ==='3'||monthAns ==='april' && days ==='4'||monthAns ==='april' && days ==='5'||monthAns ==='april' && days ==='6'||monthAns ==='april' && days ==='7'||monthAns ==='april' && days ==='8'||monthAns ==='april' && days ==='9'||monthAns ==='april' && days ==='10'||monthAns ==='april' && days ==='11'||monthAns ==='april' && days ==='12'||monthAns ==='april' && days ==='13'||monthAns ==='april' && days ==='14'||monthAns ==='april' && days ==='15'||monthAns ==='april' && days ==='16'||monthAns ==='april' && days ==='17'||monthAns ==='april' && days ==='18'||monthAns ==='april' && days ==='19'){
    
    $("#final").click(function(){
     
     var zodiac;
     zodiac  = $(monthAns + " " +  days).val();
      $("#answer").text("You were born on march 24th " + " you are a(n) " + "Aries");
     
});
    
 
    
     
}
else{
    $("#answer").text("Enter zodiac sign here.");
    }


         


/* $("#final").click(function(){ alert(userName + " you are a(n) " + zodiac){

}); 
*/
