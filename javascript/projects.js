

function LoadList(type)
{
    var html = `<div id = "projlist" class = "projectList">`;
    document.getElementById("mainWindow").innerHTML = `${html}<div class="projectButton><p>No projects in this category yet..</p></div></div>`;
    $.ajax({
        url: `subHtml/${type}projects/proj.json`,
        dataType: "json",
        success: function(response)
        {
            for (var key in response)
            {
                if (response.hasOwnProperty(key)) {
                    html += `<div class = "projectButton" onclick = "LoadContent('${response[key].html}')">${response[key].icon}<p>${response[key].title}</p></div>`;
                }
            }
            html += "</div>";
            document.getElementById("mainWindow").innerHTML = html;
            
            if(document.getElementById("projlist").innerHTML.length < 1)
            {
                let xhtml = `<div id = "projlist" class = "projectList">`;
                document.getElementById("mainWindow").innerHTML = `${xhtml}<div class="projectButton"><p>No projects in this category yet..</p></div></div>`;
            }
        }
      });
}

function LoadContent(path)
{
    $.ajax({
        url : path,
        success : function(result){
            document.getElementById("mainWindow").innerHTML = result;
        }
    });
}