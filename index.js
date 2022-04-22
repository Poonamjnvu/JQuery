
//Q1.

$("button").click (function(){
    $("p").hide()
})
$("#show").click(function(){
    $("p").show()
})


//Q2.

$("#enable").click (function(){
    $.ajax({
        url : "https://jsonplaceholder.typicode.com/todos/12",
        type : "GET",
        success : function(data){

            document.getElementById("heading").innerText = data.title;
        }
    })
})
