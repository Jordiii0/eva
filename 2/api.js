function getApi() {
    const url = "https://restcountries.com/v3.1/lang/spanish";
    fetch(url)
        .then(function (response) {
            return response.json(); // Analiza la respuesta como JSON y devuelve una promesa
        }).then(function (data) {
            var tableBody = document.getElementById("tablaBody"); // Obtiene la referencia al cuerpo de la tabla en el documento HTML
            var dataArray = []; // Declara un array para almacenar los datos

            data.forEach(function (country) { // Itera sobre los datos de los países
                var row = document.createElement("tr"); // Crea una nueva fila en la tabla

                // Crea y agrega una celda para el nombre del país
                var paisCell = document.createElement("td");
                paisCell.textContent = country.name.common;
                row.appendChild(paisCell);

                // Crea y agrega una celda para la capital del país
                var capitalCell = document.createElement("td");
                capitalCell.textContent = country.capital[0];
                row.appendChild(capitalCell);

                // Crea y agrega una celda para la región del país
                var regionCell = document.createElement("td");
                regionCell.textContent = country.region;
                row.appendChild(regionCell);

                // Crea y agrega una celda para el enlace al mapa de Google Maps
                var mapaGCell = document.createElement("td");
                mapaGCell.textContent = country.maps.googleMaps;
                row.appendChild(mapaGCell);

                // Crea y agrega una celda para el botón de eliminar
                var eliminarCell = document.createElement("td");
                var eliminarButton = document.createElement("button");
                eliminarButton.textContent = "Eliminar";
                eliminarButton.addEventListener("click", function () {
                    // Eliminar el elemento del array y la fila correspondiente
                    var rowIndex = dataArray.findIndex(function (item) {
                        return item.pais === country.name.common;
                    });
                    if (rowIndex !== -1) {
                        dataArray.splice(rowIndex, 1);
                        tableBody.removeChild(row);
                    }
                });
                eliminarCell.appendChild(eliminarButton);
                row.appendChild(eliminarCell);

                // Agrega la fila al cuerpo de la tabla
                tableBody.appendChild(row);

                // Guarda los datos en el array
                var countryData = {
                    pais: country.name.common,
                    capital: country.capital[0],
                    region: country.region,
                    mapaG: country.maps.googleMaps
                };
                dataArray.push(countryData);
            });

            // Aquí puedes realizar cualquier acción adicional con el array de datos
            console.table(dataArray);
        })
        .catch(function (error) {
            console.log(error); // Muestra el error en la consola
        });
}
