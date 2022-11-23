 x = 0 ;
var click = 0;
var count = 0;

function createMessage(){
    x = x+2;
    document.getElementById("id1").innerHTML= x ;
    document.getElementById("id1").style.color = 'pink'  ;

}

function decrease(){

    click++ 
    var random = Math.random()
    var ran = Math.floor(random*10);
    
    

    if (ran == 5 || ran == 7 ) {

        count++
        var per = Math.floor ((count/click)*100);
        document.getElementById('id1').style.background = "red"
        document.getElementById('id2').innerHTML = "Hitted  " + count + 
        " times" + ' from ' + click + " clicks and its, " + per + " %" ;


    } else {
        document.getElementById('id1').style.background = "gray"
    }
    

    document.getElementById("id1").innerHTML= ran ;
    document.getElementById("id1").style.color = 'cyan'  ;


}

