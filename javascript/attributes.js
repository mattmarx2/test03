function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__LimExpERAA = '<table id="_LimExpERAA_table">';
tableHTML__LimExpERAA += 	'<tr>';
tableHTML__LimExpERAA += 		'<th>Mapa</th>';
tableHTML__LimExpERAA += 		'<th>EntityHandle</th>';
tableHTML__LimExpERAA += 		'<th>Layer</th>';
tableHTML__LimExpERAA += 		'<th>Linetype</th>';
tableHTML__LimExpERAA += 		'<th>PaperSpace</th>';
tableHTML__LimExpERAA += 		'<th>SubClasses</th>';
tableHTML__LimExpERAA += 		'<th>Text</th>';
tableHTML__LimExpERAA += 		'<th>fid</th>';
tableHTML__LimExpERAA += 	'</tr>';
tableHTML__LimExpERAA += 	'<tr>';
tableHTML__LimExpERAA += 		'<td></td>';
tableHTML__LimExpERAA += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar EntityHandle"></td>';
tableHTML__LimExpERAA += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Layer"></td>';
tableHTML__LimExpERAA += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar Linetype"></td>';
tableHTML__LimExpERAA += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar PaperSpace"></td>';
tableHTML__LimExpERAA += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar SubClasses"></td>';
tableHTML__LimExpERAA += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar Text"></td>';
tableHTML__LimExpERAA += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar fid"></td>';
tableHTML__LimExpERAA += 	'</tr>';

var _LimExpERAA_IDs = Object.keys(_LimExpERAA._layers);
for (var i=0; i < _LimExpERAA_IDs.length; i++){
	var feature = _LimExpERAA._layers[_LimExpERAA_IDs[i]].feature;
	tableHTML__LimExpERAA += '<tr>';
	tableHTML__LimExpERAA += 	'<td onclick="goToMap(_LimExpERAA, ' + _LimExpERAA_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__LimExpERAA += 	'<td>' + feature.properties['EntityHandle'] + '</td>';
	tableHTML__LimExpERAA += 	'<td>' + feature.properties['Layer'] + '</td>';
	tableHTML__LimExpERAA += 	'<td>' + feature.properties['Linetype'] + '</td>';
	tableHTML__LimExpERAA += 	'<td>' + feature.properties['PaperSpace'] + '</td>';
	tableHTML__LimExpERAA += 	'<td>' + feature.properties['SubClasses'] + '</td>';
	tableHTML__LimExpERAA += 	'<td>' + feature.properties['Text'] + '</td>';
	tableHTML__LimExpERAA += 	'<td>' + feature.properties['fid'] + '</td>';
	tableHTML__LimExpERAA += '</tr>';
}

tableHTML__LimExpERAA += '</table>';
document.getElementById('_LimExpERAA_tab').innerHTML = tableHTML__LimExpERAA;

tableHTML__ParcelasLevantadas = '<table id="_ParcelasLevantadas_table">';
tableHTML__ParcelasLevantadas += 	'<tr>';
tableHTML__ParcelasLevantadas += 		'<th>Mapa</th>';
tableHTML__ParcelasLevantadas += 		'<th>Anotacoes</th>';
tableHTML__ParcelasLevantadas += 		'<th>Benfeitorias</th>';
tableHTML__ParcelasLevantadas += 		'<th>CadernetaPredial</th>';
tableHTML__ParcelasLevantadas += 		'<th>DescricaoPredial</th>';
tableHTML__ParcelasLevantadas += 		'<th>Foto01</th>';
tableHTML__ParcelasLevantadas += 		'<th>Foto02</th>';
tableHTML__ParcelasLevantadas += 		'<th>Parcela</th>';
tableHTML__ParcelasLevantadas += 		'<th>Proprietario</th>';
tableHTML__ParcelasLevantadas += 		'<th>fid</th>';
tableHTML__ParcelasLevantadas += 	'</tr>';
tableHTML__ParcelasLevantadas += 	'<tr>';
tableHTML__ParcelasLevantadas += 		'<td></td>';
tableHTML__ParcelasLevantadas += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar Anotacoes"></td>';
tableHTML__ParcelasLevantadas += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar Benfeitorias"></td>';
tableHTML__ParcelasLevantadas += 		'<td></td>';
tableHTML__ParcelasLevantadas += 		'<td></td>';
tableHTML__ParcelasLevantadas += 		'<td></td>';
tableHTML__ParcelasLevantadas += 		'<td></td>';
tableHTML__ParcelasLevantadas += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar Parcela"></td>';
tableHTML__ParcelasLevantadas += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar Proprietario"></td>';
tableHTML__ParcelasLevantadas += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar fid"></td>';
tableHTML__ParcelasLevantadas += 	'</tr>';

var _ParcelasLevantadas_IDs = Object.keys(_ParcelasLevantadas._layers);
for (var i=0; i < _ParcelasLevantadas_IDs.length; i++){
	var feature = _ParcelasLevantadas._layers[_ParcelasLevantadas_IDs[i]].feature;
	tableHTML__ParcelasLevantadas += '<tr>';
	tableHTML__ParcelasLevantadas += 	'<td onclick="goToMap(_ParcelasLevantadas, ' + _ParcelasLevantadas_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['Anotacoes'] + '</td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['Benfeitorias'] + '</td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['CadernetaPredial'] + '</td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['DescricaoPredial'] + '</td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['Foto01'] + '</td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['Foto02'] + '</td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['Parcela'] + '</td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['Proprietario'] + '</td>';
	tableHTML__ParcelasLevantadas += 	'<td>' + feature.properties['fid'] + '</td>';
	tableHTML__ParcelasLevantadas += '</tr>';
}

tableHTML__ParcelasLevantadas += '</table>';
document.getElementById('_ParcelasLevantadas_tab').innerHTML = tableHTML__ParcelasLevantadas;

