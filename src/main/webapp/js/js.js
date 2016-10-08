/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
//    $("#documentation").on("click",function(){
//        $("#content").html("");
//    });
    
    $("#home").on("click",function(){
        $("#content").html("");
    });
    
    
    
    
    $("#documentation").on("click",function(){
        $.ajax({
            context: this,
            dataType : "html",
            url : "doc.html",
            success : function(results) {
                $("#content").html(results);
            }
        });
    }); 
    
});