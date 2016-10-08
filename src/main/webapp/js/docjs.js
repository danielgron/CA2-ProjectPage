/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    
    
    
    
    $("#REST-APIh").on("click",function(){
        $("#REST-API").html("<h3 id='REST-APIh'><a href='#'>Rest API</a></h3>");
        $("#testing").html("<h3 id='testingh'><a href='#'>Testing</a></h3>");
        $("#github").html("<h3 id='githubh'><a href='#'>gitHub repositories</a></h3>");
        $("#whodidwhat").html("<h3 id='whodidwhath'><a href='#'>Who did what</a></h3>");
        $("#script").html('<script src="js/docjs.js" type="text/javascript"></script>');
        $.ajax({
            context: this,
            dataType : "html",
            url : "rest.html",
            success : function(results) {
                $("#REST-API").html(results);
            }
        });
    });
    
    $("#testingh").on("click",function(){
        $("#REST-API").html("<h3 id='REST-APIh'><a href='#'>Rest API</a></h3>");
        $("#testing").html("<h3 id='testingh'><a href='#'>Testing</a></h3>");
        $("#github").html("<h3 id='githubh'><a href='#'>gitHub repositories</a></h3>");
        $("#whodidwhat").html("<h3 id='whodidwhath'><a href='#'>Who did what</a></h3>");
        $("#script").html('<script src="js/docjs.js" type="text/javascript"></script>');
        $.ajax({
            context: this,
            dataType : "html",
            url : "testing.html",
            success : function(results) {
                $("#testing").html(results);
            }
        });
    });
    
    $("#whodidwhath").on("click",function(){
        $("#REST-API").html("<h3 id='REST-APIh'><a href='#'>Rest API</a></h3>");
        $("#testing").html("<h3 id='testingh'><a href='#'>Testing</a></h3>");
        $("#github").html("<h3 id='githubh'><a href='#'>gitHub repositories</a></h3>");
        $("#whodidwhat").html("<h3 id='whodidwhath'><a href='#'>Who did what</a></h3>");
        $("#script").html('<script src="js/docjs.js" type="text/javascript"></script>');
        $.ajax({
            context: this,
            dataType : "html",
            url : "whodidwhat.html",
            success : function(results) {
                $("#whodidwhat").html(results);
            }
        });
    });
    
    $("#githubh").on("click",function(){
        $("#REST-API").html("<h3 id='REST-APIh'><a href='#'>Rest API</a></h3>");
        $("#testing").html("<h3 id='testingh'><a href='#'>Testing</a></h3>");
        $("#github").html("<h3 id='githubh'><a href='#'>gitHub repositories</a></h3>");
        $("#whodidwhat").html("<h3 id='whodidwhath'><a href='#'>Who did what</a></h3>");
        $("#script").html('<script src="js/docjs.js" type="text/javascript"></script>');
        $.ajax({
            context: this,
            dataType : "html",
            url : "github.html",
            success : function(results) {
                $("#github").html(results);
            }
        });
    });
});
