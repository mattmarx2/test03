var map = L.map('map', {});

// PAINEIS
map.createPane('pane_0').style.zIndex = 499;
map.createPane('pane_4').style.zIndex = 495;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleStreet.addTo(map);
baseMaps["Google Street"] = googleStreet;

var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps['Google Satellite'] = googleSatellite;

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Hybrid"] = googleHybrid;

// CAMADAS VETORIAIS
var _LimExpERAA = L.geoJSON(_LimExpERAA_data, {
			pane: 'pane_0',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 5.0,
						color: 'rgba(28, 255, 237, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: LimExpERAA</h4><br/>'  +
							'<b>ENTITYHANDLE:</b>&ensp;' + feature.properties['EntityHandle'] + '<br/>' +
							'<b>LAYER:</b>&ensp;' + feature.properties['Layer'] + '<br/>' +
							'<b>LINETYPE:</b>&ensp;' + feature.properties['Linetype'] + '<br/>' +
							'<b>PAPERSPACE:</b>&ensp;' + feature.properties['PaperSpace'] + '<br/>' +
							'<b>SUBCLASSES:</b>&ensp;' + feature.properties['SubClasses'] + '<br/>' +
							'<b>TEXT:</b>&ensp;' + feature.properties['Text'] + '<br/>' +
							'<b>FID:</b>&ensp;' + feature.properties['fid'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['LimExpERAA'] = _LimExpERAA;

var _ParcelasLevantadas = L.geoJSON(_ParcelasLevantadas_data, {
			pane: 'pane_4',
			style: function (feature) {
				if ( feature.properties["Parcela"] == 'TESTE') {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(213, 136, 103, 1.00)'
					}
				} else {
					return {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(81, 170, 211, 1.00)'
					}
				}
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Proprietario</h4><br/>'  +
							'<b>PARCELA:</b>&ensp;' + feature.properties['Parcela'] + '<br/>' +
							'<b>PROPRIETARIO:</b>&ensp;' + feature.properties['Proprietario'] + '<br/>' +
							'<b>ANOTACOES:</b>&ensp;' + feature.properties['Anotacoes'] + '<br/>' +
							'<b>BENFEITORIAS:</b>&ensp;' + feature.properties['Benfeitorias'] + '<br/>' +
							'<b>CADERNETAPREDIAL:</b>&ensp;' + feature.properties['CadernetaPredial'] + '<br/>' +
							'<b>DESCRICAOPREDIAL:</b>&ensp;' + feature.properties['DescricaoPredial'] + '<br/>' +
							'<b>FOTO01:</b>&ensp;' + feature.properties['Foto01'] + '<br/>' +
							'<b>FOTO02:</b>&ensp;' + feature.properties['Foto02'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['ParcelasLevantadas'] = _ParcelasLevantadas;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_LimExpERAA_lgd"><svg class="legendIcon"><line x1="0" y1="9" x2="18" y2="9" stroke="rgba(28, 255, 237, 1.00)" stroke-width="3"></svg>LimExpERAA</dt>';
	div.innerHTML += 	'<dt class="_ParcelasLevantadas_lgd">Proprietario</dt>';
	div.innerHTML += 		'<dd class="_ParcelasLevantadas_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(213, 136, 103, 1.00)"></svg>TESTE</dd>';
	div.innerHTML += 		'<dd class="_ParcelasLevantadas_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(81, 170, 211, 1.00)"></svg>-------</dd>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
