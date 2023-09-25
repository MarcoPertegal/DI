$(document).ready(function () {

    $(document).on('click', '#createURL', function () {

        var url = $('#slug').val();

        url.replace("/", "-");

        return url;

    });

    /*
    $(document).on('load', '#suma', function () {

        var num1 = Math.random;
        var num2 = Math.random;
        return num1 + num2;
    });*/
});