$(document).ready(function () {
    $.ajax({
        url: 'https://swapi.dev/api/people',
        type: 'GET'
    }).done(function (resp) {//resp es la variable que devuele el resultado de la consulta
        var listadoStarWars = resp.results;//results sirve para extraer el resultado de la consulta y guardarlo
        listadoStarWars.forEach(function (personaje, index) {//index es un contador
            //var template = '<p><h1>' +starwars.name + '</h1></p>';
            //var template = `<p><h1>${starwars.name}</h1></p>`;
            var i = index + 1;
            var template = `
                <div class="col-md-3 col-lg-4 mt-5 mb-5">
                    <div class="card bg-dark text-center" data-bs-toggle="modal" data-bs-target="#Modal1"
                        style="width: 18rem;" type="button">
                        <img class="card-img-top" src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg"
                            alt="Card image cap">
                        <div class="card-body pb-1">
                            <h5 class="card-title fw-bold text-warning">${personaje.name}</h5>
                        </div>
                        <div class="card-body text-light mx-auto">
                            <div class="d-flex mb-3">
                                <div style="margin-right: 12px;">
                                    <i class="bi bi-rulers"></i>
                                </div>
                                <p class="card-text">${personaje.height} cm</p>
                            </div>
                            <div class="d-flex mb-3">
                                <div style="margin-right: 12px;">
                                    <i class="bi bi-feather"></i>
                                </div>
                                <p class="card-text">${personaje.mass} kg</p>
                            </div>
                            <div class="d-flex">
                                <div style="margin-right: 12px;">
                                    ${verificarGenero(personaje.gender)}
                                </div>
                                <p class="card-text">${personaje.gender}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
            $('#lista-starwars').append(template);//esto sirbe para seleccionar el codigo donde va a ir la template
        });
    });

    //no esta acababo
    $(document).on('click', '.people', function () {
        var starwarsid = $(this).attr('starwarsid');

        $.ajax({
            url: 'https://swapi.dev/api/people' + starwarsid,
            type: 'GET'
        }).done(function (resp) {

        });

        $('#modal-detail').show();
    });

    //funcion para que salga el icono de mas o fem 
    function verificarGenero(gender) {
        if (gender == 'male') {
            return '<i class="bi bi-gender-male"></i>';
        } else if (gender == 'female') {
            return '<i class="bi bi-gender-female"></i>';
        } else {
            return '<i class="bi bi-gender-neuter"></i>';
        }
    }
});