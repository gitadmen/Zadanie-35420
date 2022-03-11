$(document).ready(function() {

    $('#btn').click(function() {


        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function(data) {

                $('#dane-programisty').html('')
                $('#dane-programisty').append("Imię: " + data.imie + "<br/>")
                $('#dane-programisty').append("Nazwisko: " + data.nazwisko + "<br/>")
                $('#dane-programisty').append("Zawód: " + data.zawod + "<br/>")
                $('#dane-programisty').append("Firma: " + data.firma + "<br/>")
                console.log(data)

            })

        .fail(function(error) {
            console.error(error);
        })
    })
});