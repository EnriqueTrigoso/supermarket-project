import { useEffect, useState } from "react";
import { stores } from '../data/stores'
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import styles from '../styles/Local.module.css'


const useMaps = () => {

	const [Map, setMap] = useState();
	const [pageIsMounted, setPageIsMounted] = useState(false);
	const [display, setDisplay] = useState("block")

	mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvcm9kcmlndWV6IiwiYSI6ImNsODk3NzRkMTA0M3EzdXJvajQxZmY2OXQifQ.P-AUFNrwZjos_y5YkfZfWA';

	stores.features.forEach((store, i) => {
		store.properties.id = i;
	});

	useEffect(() => {
		setPageIsMounted(true)
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/dark-v10?optimize=true',
			center: stores.defaultCoordinate,
			zoom: 15,
		});

		map.addControl(new mapboxgl.NavigationControl(), 'top-right');
		setMap(map);

	}, []);

	useEffect(() => {
		if (pageIsMounted && stores) {
			Map.on('load', () => {
				Map.addSource('places', {
					'type': 'geojson',
					'data': stores
				});
				buildLocationList(stores);
				addMarkers();
			});
		}

	});

	useEffect(() => {
		if (isMobile2()){
			setDisplay('none')
		}
	}, [setDisplay]);

	function addMarkers() {
		for (const marker of stores.features) {
			const el = document.createElement('div');
			el.id = `marker-${marker.properties.id}`;
			el.className = 'marker';

			new mapboxgl.Marker(el, { offset: [0, -23] })
				.setLngLat(marker.geometry.coordinates)
				.addTo(Map);

			el.addEventListener('click', (e) => {
				flyToStore(marker);
				createPopUp(marker);
				const activeItem = document.getElementsByClassName('active');
				e.stopPropagation();
				if (activeItem[0]) {
					activeItem[0].classList.remove('active');
				}
				const listing = document.getElementById(
					`listing-${marker.properties.id}`
				);
				listing.classList.add('active');
			});
		}
	}
	function isMobile(){
		if (( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 )) { 
			return true
		} else {
			return false
		}
	}
	function isMobile2(){
		if (screen.orientation.type === 'portrait-primary'){
			return true
		} else {
			return false
		}
	}

	function buildLocationList(stores) {
		for (const store of stores.features) {
			const listings = document.getElementById('listings');
			const listing = listings.appendChild(document.createElement('div'));
			listing.id = `listing-${store.properties.id}`;
			listing.className = `${styles.item}`;

			const image = listing.appendChild(document.createElement('div'));
			image.className = `${styles.image}`
			image.innerHTML = `
			<img src=${store.properties.image} class=${styles.logo} alt="city">
			`;

			const map_container = image.appendChild(document.createElement('div'))
			map_container.className = `${styles.map_ico_container}`
			map_container.id = `link-${store.properties.id}`;
			map_container.innerHTML = `
				<img class=${styles.map_ico} src="MapIco.png">
				<span class=${styles.map_text}>Ver en Mapa</span>
			`

			map_container.addEventListener('click', function () {

				let storeToGo = ''

				for (const feature of stores.features) {
					if (this.id === `link-${feature.properties.id}`) {
						storeToGo = feature
					}
				}

				if (isMobile2()){

					setDisplay('block')

					setTimeout(()=> {

						flyToStore(storeToGo);
					
						const activeItem = document.getElementsByClassName('active');
						if (activeItem[0]) {
							activeItem[0].classList.remove('active');
						}
						this.parentNode.classList.add('active');
						
					}, 1000)

					createPopUp(storeToGo);

				} else {
	
					flyToStore(storeToGo);
					createPopUp(storeToGo);
		
					const activeItem = document.getElementsByClassName('active');
					if (activeItem[0]) {
						activeItem[0].classList.remove('active');
					}
					this.parentNode.classList.add('active');
				}
				
			})

			const link = listing.appendChild(document.createElement('div'));
			link.className = `${styles.details}`;
			link.id = `link-${store.properties.id}`;
			link.innerHTML =
				`<h2>${store.properties.name}</h2>
			<div><h3><span class="icon-ec-map-pointer ${styles.address}">${store.properties.address}</span>Ciudad: ${store.properties.city}</h3><div>
			<p>${store.properties.description}</p>
			<div class=${styles.div}><span class=${styles.phone}><span class="icon-ec-phone"></span>${store.properties.phone}</span>
			<span>Atención:  ${store.properties.Attention}</span></div>`;
		}
	}

	function flyToStore(currentFeature) {

		Map.flyTo({
			center: currentFeature.geometry.coordinates,
			zoom: 15
		});

	}
	
	function createPopUp(currentFeature) {
		const popUps = document.getElementsByClassName('mapboxgl-popup');
		if (popUps[0]) popUps[0].remove();
		const popup = new mapboxgl.Popup({ closeOnClick: false })
			.setLngLat(currentFeature.geometry.coordinates)
			.setHTML(
				`<div><img src=${currentFeature.properties.image} alt="city"> </div>
			<div><h2>${currentFeature.properties.name}</h2><h3>${currentFeature.properties.address}</h3></div>`
			)
			.addTo(Map);
	}

	return (
		{
			addMarkers,
			buildLocationList,
			flyToStore,
			createPopUp,
			display,
			setDisplay
		}
	)
}

export default useMaps