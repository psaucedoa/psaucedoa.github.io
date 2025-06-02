const googUrls = [
    'https://photos.app.goo.gl/hLLgwLv3WNDKBe7c6',    
]

const imageUrls = [
    ['images/cali/bird_bro.JPG', 'At least I\'m not an albatross'],
    ['images/cali/bird1.JPG', 'Young Western Gull?'],
    ['images/cali/bird2.JPG', 'Young Western Gull?'],
    ['images/cali/milpitas_station.JPG', 'Milpitas Station'],
    ['images/cali/milpitas.JPG', 'Milpitas Station Platform'],
    ['images/cali/monk.JPG', 'Monk!'],
    ['images/cali/no_wingtip_flare.JPG', 'No wingtip vortex guy!'],
    ['images/cali/pay_milpitas.JPG', 'Milpitas Ticketing Station'],
    ['images/cali/shipping1.JPG', 'Container shipping!'],
    ['images/cali/shipping2.JPG', 'Container shipping!'],
    ['images/cali/windy.JPG', 'SF is very windy!'],
    ['images/cats/frijol_flag_comp.JPG', 'Supervisor checking in'],
    ['images/cats/frijol_flag.JPG', 'Supervisor concerned with my progress...'],
    ['images/cats/frijol_moving.JPG', 'Tired from moving in!'],
    ['images/cats/frijol_sleepy.JPG', 'Taking in some sun!'],
    ['images/chicago/chinatown_bakery.JPG', 'PORK BUN'],
    ['images/chicago/chinatown_neon.JPG', 'Dim sum!'],
    ['images/chicago/cta.JPG', 'Chicago Transit Authority'],
    ['images/denmark/arches.JPG', 'Kunsthal Charlottenborg - Beautiful Arches'],
    ['images/denmark/cool_house.JPG', 'Hans Christian Andersen Museum'],
    ['images/denmark/danish_forest_park.JPG', 'Park in Odense'],
    ['images/denmark/danish_rows.JPG', 'Typical sightseeing in Copenhagen'],
    ['images/denmark/harbor.JPG', 'Copenhagen Harbor!'],
    ['images/denmark/kahoot.JPG', 'Kahoot! office in Copenhagen'],
    ['images/denmark/mcdonals.JPG', 'Danish McDonald'],
    ['images/denmark/pas_pa.JPG', 'PAS PA!'],
    ['images/denmark/peugeot_106_GTI.JPG', 'Peugeot 106 GTI in Odense'],
    ['images/denmark/right_side_drive.JPG', 'MG Midget?'],
    ['images/geneseo/horse_1.JPG', 'Why the long face?'],
    ['images/geneseo/horse_2.JPG', 'Chillin, straight up hoofin \'it\''],
    ['images/geneseo/rip_tl.JPG', 'RIP 2004 Acura TL'],
    ['images/grad/alma.JPG', 'Alma!'],
    ['images/grad/bicycle.JPG', 'Early morning shot of Hallene Gateway'],
    ['images/grad/bikes_porch.JPG', 'Early morning shot of the porch'],
    ['images/grad/grainger.JPG', 'test'],
    ['images/grad/grainger_2.JPG', 'Across the street from Ceramics, looking north on S Goodwin'],
    ['images/grad/learning_and_labor.JPG', 'Hallene Gateway!'],
    ['images/grad/loomis.JPG', 'LOOOOOOOOOMIS'],
    ['images/grad/math.JPG', 'Altgeld'],
    ['images/grad/mcdicks.JPG', 'McDonald on green ft. DJ'],
    ['images/grad/veoride.JPG', '\'AY THAT\'S MY VEORIDE!'],
    ['images/grad/wow_apt.JPG', 'Gorgeous'],
    ['images/joke_machine/beams.JPG', 'Q: What keeps the moon in place? A: Its beams!'],
    ['images/joke_machine/broco.JPG', 'Q: ¿Cual es el nombre del hemano vegetariano de Bruce Lee? A: Broco Lee!'],
    ['images/joke_machine/hare.JPG', 'Q: What do you call a parade of rabbits hopping backward? A: A receding hare-line!'],
    ['images/joke_machine/moon.JPG', 'Q: Did you hear about the restaurant on the moon? A: It has great food, but no atmosphere!'],
    ['images/joke_machine/nose.JPG', 'Q: What do you call a person with no body and no nose? A: Nobody knows!'],
    ['images/joke_machine/vacas.JPG', 'Q: ¿Cuales son cinco cosas que conengan leche? A: Cinco vacas!'],
    ['images/mex/arbol_naranja_2.JPG', 'Naranjas!'],
    ['images/mex/arbol_naranja.JPG', 'Naranjas!'],
    ['images/mex/asc.JPG', 'Caza, Tiro, y Pesca'],
    ['images/mex/bidet.JPG', 'Cat Bidet'],
    ['images/mex/carril.JPG', 'La Reforma'],
    ['images/mex/casa.JPG', 'Great skies'],
    ['images/mex/cfe.JPG', 'Comision Federal de Electricidad'],
    ['images/mex/flor.JPG', 'Flor!'],
    ['images/mex/gato_naranja.JPG', 'Garfield!'],
    ['images/mex/gato.JPG', 'Cat chair'],
    ['images/mex/git.JPG', 'Ventana'],
    ['images/mex/ladrillo.JPG', 'Cochera'],
    ['images/mex/mont.JPG', 'Cerro'],
    ['images/mex/naranja.JPG', 'Sunset'],
    ['images/mex/oxxo.JPG', 'OXXO! OXXO! OXXO!'],
    ['images/mex/pemex.JPG', 'Gasolinera'],
    ['images/mex/porto.JPG', 'Porton'],
    ['images/mex/torreon.JPG', 'Carretera'],
    ['images/mex/usalo.JPG', 'USALO!'],
    ['images/michigan/2.JPG', '2!'],
    ['images/michigan/caterpillar.JPG', 'Fuzzy caterpillar'],
    ['images/michigan/fuzzy_caterpillar.JPG', 'Fuzzy caterpillar'],
    ['images/michigan/chairs.JPG', 'Plastic chairs'],
    ['images/michigan/no_skateboarding.JPG', 'No Skateboarding!'],
    ['images/michigan/pet_waste.JPG', 'Please keep this area clean!'],
    ['images/michigan/plant_dirt.JPG', 'Interesting orange guys'],
    ['images/michigan/river.JPG', 'River'],
    ['images/michigan/spider.JPG', 'Spider!'],
    ['images/michigan/spider_maybe.JPG', 'Spider?'],
    ['images/michigan/waves.JPG', 'Wavy'],
    ['images/rando/fog.JPG', 'Cerro'],
    ['images/rando/mazda_3.JPG', 'RIP 2019 Mazda 3'],
    ['images/rando/miata.JPG', '2007 Mazda MX-5 Miata, 6-speed, PRHT'],
    ['images/rando/moving.JPG', 'Moving sucks'],
    ['images/rando/sporting_goods.JPG', 'Sporting Goods (decrepit)'],
    ['images/rando/van.JPG', 'Mason\'s van!'],
    ['images/trains/watch_your_step.JPG', 'Watch your step!'],
    ['images/vandenbergish/night_sky.JPG', 'Long exposure night sky'],
    ['images/vandenbergish/observatory.JPG', 'Vandenberg Observatory'],
    ['images/vandenbergish/radioactive.JPG', 'Potentially radioactive?'],
    ['images/vandenbergish/sanguich.JPG', 'Sanguich'],
    ['images/vandenbergish/slc.JPG', 'SLC 6'],
    ['images/vandenbergish/slide.JPG', 'SLC 4 slide'],
    ['images/vandenbergish/thor.JPG', 'Thor?'],
    ['images/work/d3.JPG', 'A D3 dozer with our teleop system'],
    ['images/work/j8.JPG', 'A J8 with our mapping / sensing'],
];

// Function to change the background image
function change_landing_section_background() {
    // Get the hero section element by its ID
    const landing_image = document.getElementById('landing-image');

    if (landing_image) { // Ensure the section element exists
        // Get a random image URL from the array
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const randomImageUrl = imageUrls[randomIndex][0];

        // Set the background image style of the section
        landing_image.src = imageUrls[randomIndex][0];
        landing_image.alt = imageUrls[randomIndex][1];
        landing_image.title = imageUrls[randomIndex][1];


        console.log(`Background image changed to: ${randomImageUrl}`);
    }
}

// Function to change the background image on click

// Call changeDisplayedImage when the page loads
window.addEventListener('load', change_landing_section_background);