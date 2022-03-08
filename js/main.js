$(document).ready(function() {

    $('#btn').click(function() {


        $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {

                $('#dane-programisty').html('').append(data + "<br/>")

            })

        .fail(function(error) {
            console.error(error);
        })
    })
});