function homeWindow()
{
    $.ajax({
        url : "subHtml/aliceExplorer.html",
        success : function(result){
            document.getElementById("anchor").innerHTML = result;
            SetTitle("aliceexplorer.exe");
            AFTER_TITLE = "Thinker, Gamer, Developer";
        }
    });
}

function snakeWindow()
{
    $.ajax({
        url : "subHtml/snake.html",
        success : function(result){
            document.getElementById("anchor").innerHTML = result;
            StartSnake();
            SetTitle("snake.exe");
            AFTER_TITLE = "Sneaky sneaky snake..";
        }
    });
}