var HEADER_TEXT = "Hello World!";
var HEADER_ELEMENT;
var FAKE_DIR = "Home";
var AFTER_TITLE = "Thinker, Gamer, Developer";
var REVEAL_EMAIL = false;
var EMAIL_TIMER = -5;
var EMAIL = "alicemichi.dev@gmail.com";
var ACTIVE = true;

window.onload = function()
{
    HEADER_ELEMENT = document.getElementById("headerContent");
    setInterval(PageTick,25);
    SetTitle("Thinker, Gamer, Developer");

    $.ajax({
        url : "subHtml/home.html",
        success : function(result){
            document.getElementById("mainWindow").innerHTML = result;
        }
    });
}

function PageTick()
{
    if(HEADER_ELEMENT.innerHTML.length != HEADER_TEXT.length)
    {
        var index = (HEADER_ELEMENT.innerHTML.length);
        if(HEADER_TEXT.length > index)
        {
            HEADER_ELEMENT.innerHTML += HEADER_TEXT.charAt(index);           
        }
    }
    else
    {
        if(document.getElementById("hdir").innerHTML != FAKE_DIR);
        {
            document.getElementById("hdir").innerHTML = FAKE_DIR;
            if(HEADER_ELEMENT.innerHTML != AFTER_TITLE)
            {
                setTimeout(function(){SetTitle(AFTER_TITLE);},500);
            }
        }
    }
    if(REVEAL_EMAIL)
    {
        if(EMAIL_TIMER < EMAIL.length)
        {
            EMAIL_TIMER++;
            if(EMAIL_TIMER > -1)
            {
                document.getElementById("fakeCrypt").innerHTML = (EMAIL.substring(0,EMAIL_TIMER) + makeRandom(EMAIL.length - EMAIL_TIMER));
            }
            else
            {
                document.getElementById("fakeCrypt").innerHTML = makeRandom(EMAIL.length);
            }
        }
    }
}

function SetTitle(text)
{
    HEADER_TEXT = text;
    HEADER_ELEMENT.innerHTML = "";
}

function Navigate(loc)
{
    SetTitle("chdir \\" + loc);
    FAKE_DIR = loc;
    
    switch(loc)
    {
        case "Projects":
            AFTER_TITLE = "Always look to create..";
            $.ajax({
                url : "subHtml/projects.html",
                success : function(result){
                    document.getElementById("mainWindow").innerHTML = result;
                }
            });
            break;
        case "Home":
            AFTER_TITLE = "Thinker, Gamer, Developer";
            $.ajax({
                url : "subHtml/home.html",
                success : function(result){
                    document.getElementById("mainWindow").innerHTML = result;
                }
            });
            break;
        case "Contact":
            AFTER_TITLE = "Wanna get in touch?";
            $.ajax({
                url : "subHtml/contact.html",
                success : function(result){
                    document.getElementById("mainWindow").innerHTML = result;
                    REVEAL_EMAIL = false;
                    EMAIL_TIMER = -5;
                    fakeCrypt();
                }
            });
            break;
    }
}

function makeRandom(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*=+';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function Reveal()
 {
     REVEAL_EMAIL = true;
 }

 function fakeCrypt()
 {
    document.getElementById("fakeCrypt").innerHTML = makeRandom(EMAIL.length);
 }