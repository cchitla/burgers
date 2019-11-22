$(document).ready(function () {

    $(".devour-btn").on("click", function (event) {
        event.preventDefault();

        burgerDevour = $(this).attr("data-id");

        $.ajax("/api/burger/" + burgerDevour, {
            type: "PUT",
        }).then(function () {
            
        });
        location.reload();
    });
    
});