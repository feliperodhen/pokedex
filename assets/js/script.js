$(function () {
  $("#pokemon").click(function (event) {
    event.preventDefault();
    const buscarPokemon = $("#buscar").val();
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${buscarPokemon}`,
      success: function (respuesta) {
        console.log(respuesta);
      },
    }).done(response);
    function response(id) {
      var nombrePokemon = id.name;
      var imagePokemon = id.sprites.front_default;
      var pesoPokemon = id.weight;
      var movePokemon = id.moves[0].move.name;
      var movePokemon1 = id.moves[1].move.name;
      var movePokemon2 = id.moves[2].move.name;
      var movePokemon3 = id.moves[3].move.name;
      var tipoPokemon = id.types;

      for (var i = 0; i < id.types.length; i++) {
        id.types[i] = id.types[i].type.name;
        var divPokemon = $("#mostrar__pokemon");

        divPokemon.html("");
        divPokemon.append(`<div class="text-center">
        <img src="${imagePokemon}", class="pokemon img-fluid" alt="${nombrePokemon}">
        <div class="">
          <h4 class="mb-4">${nombrePokemon}</h4>
        <p class="text-secondary"> Peso: ${pesoPokemon} libras</p>
        <p class="text-secondary"> Ataque: ${movePokemon}</p>  
        <p class="text-secondary"> Ataque: ${movePokemon1}</p>
        <p class="text-secondary"> Ataque: ${movePokemon2}</p>
        <p class="text-secondary"> Ataque: ${movePokemon3}</p>
        <p class="text-secondary"> Tipo: ${tipoPokemon}</p> 
        </div>
      </div>`);

        var chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          data: [
            {
              type: "column",
              dataPoints: [
                { y: id.stats[0].base_stat, label: "Velocidad" },
                { y: id.stats[1].base_stat, label: "Defensa Especial " },
                { y: id.stats[2].base_stat, label: "Ataque Especial" },
                { y: id.stats[3].base_stat, label: "Defensa" },
                { y: id.stats[4].base_stat, label: "Ataque" },
                { y: id.stats[5].base_stat, label: "Vida" },
              ],
            },
          ],
        });
        chart.render();
      }
    }
  });
});
