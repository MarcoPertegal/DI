$(document).ready(function () {
    $(document).on('click', '#btnSave', function () {

        var title = $('#title').val();
        var description = $('#description').val();
        var url = $('#slug').val();

        if (title == '') {
            $('#title').addClass('is-invalid');
        }

        if (description == '') {
            $('#description').addClass('is-invalid');
        }

        if (url == '') {
            $('#slug').addClass('is-invalid');
        }

    });


    $(document).on('click', '#createURL', function () {

        var url = $('#slug').val();

        var url1 = url.toLowerCase().replace(' ', '-');//trimp es para quitar espacios en blanco delante y detras

        $('#slug').val(url1);
    });
});