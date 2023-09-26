$(document).ready(function () {
    $(document).on('click', '#btnSave', function () {

        var title = $('#title').val();
        var description = $('#description').val();
        var url = $('#slug').val();
        var robot = $('#robot-check').val();

        if (title == '') {
            $('#title').addClass('is-invalid');
        }

        if (description == '') {
            $('#description').addClass('is-invalid');
        }

        if (url == '') {
            $('#slug').addClass('is-invalid');
        }

        if (robot == '' || checkSuma() == false) {
            isValidForm = false;
            $('#robot-check').addClass('is-invalid');
        }

        if (isValidForm == true) {
            alert('Perfecto, vamos a publicar tu noticia!');
        } else {
            $('#robot-check').val('');
            generateRandomSum();
        }

    });


    $(document).on('click', '#createURL', function () {
        var url = $('#slug').val();
        urlArray = url.toLowerCase().split(' ');
        result = urlArray.join("-");
        $('#slug').val(result);
    });

    function generateRandomSum() {
        var n1 = between(0, 10);
        var n2 = between(0, 10);
        $('#n1').text(n1);
        $('#n2').text(n2);
    }

    function checkSuma() {
        return parseInt($('#robot-check').val()) == n1 + n2 ? true : false;
    }

    function between(min, max) {
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }
});