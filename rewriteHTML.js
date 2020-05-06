var text= 'default値';    

function setText(){  
    //set challenger name
    text = document.getElementById("wantSeeText").value;
    //StartSlide()
    if(document.getElementById("wantSeeText").value ==""){
        return document.getElementById('displayText').innerHTML 
        = (text + " ←何も入れなければこのように表示されます。");
    }else{
        return document.getElementById('displayText').innerHTML 
        = (text + "このように表示されます");
    }
};

function reset(){
    document.getElementById('displayText').innerHTML = "ここのh2が変換されます"
};
