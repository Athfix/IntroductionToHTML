

$("document").ready(function(){
    var men=true;
    $("#menu").click(function(){
        if(men==true){
            $("#nav li").attr("style","margin-left:10px");
        }
        else{
            $("#nav li").attr("style","margin-left:-180px");
        }
        men=!men;
    })

    var fSi=true;
    $("#nav li:nth-child(1)").click(function(){
        if(fSi==true){
           $("#fs").attr("style","display:block");
           $("#bg").attr("style","display:none");
           bGr=true;
        }
        else{
            $("#fs").attr("style","display:none");
        }
        fSi=!fSi;
    })


    var bGr=true;
    $("#nav li:nth-child(2)").click(function(){
        if(bGr==true){
           $("#bg").attr("style","display:block");
           $("#fs").attr("style","display:none");
           fSi=true;
        }
        else{
            $("#bg").attr("style","display:none");
        }
        bGr=!bGr;
    })
 

var nFs=document.querySelector("body");
    $("#fs li:nth-child(1)").click(function(){
      nFs.style.fontSize="16px";
    })
    $("#fs li:nth-child(2)").click(function(){
        nFs.style.fontSize="18px";
    })
    $("#fs li:nth-child(3)").click(function(){
        nFs.style.fontSize="20px";
    })

    $("#bg li:nth-child(2)").click(function(){
        nFs.style.backgroundColor=document.querySelector("#block").style.backgroundColor="black";
        nFs.style.color=document.querySelector("#block").style.color="white";
        $("#nav li, #fs li").attr("style","color:black");
        document.querySelector("img").style.boxShadow="none";
    })

    $("#bg li:nth-child(1)").click(function(){
        nFs.style.backgroundColor=document.querySelector("#block").style.backgroundColor="white";
        nFs.style.color=document.querySelector("#block").style.color="black";
        document.querySelector("img").style.boxShadow="1px 1px 19px lightgrey";
    })

})