$(document).ready(function () {
    $.ajax({
        url: '';
        type: 'GET'
    }).done(function (resp) {
        var listadoStarWars = resp.results;
        listadoStarWars.forEach(function (starwars) {
            //var template = '<p><h1>' +starwars.name + '</h1></p>';
            var template = `<p><h1>${starwars.name}</h1></p>`;
            $('#lista-pokemon').append(template);
        });
    });
});