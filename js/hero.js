
const containerMain = document.querySelector('#container-main');
const URL = 'http://localhost:3000/series';

async function getSeries() {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

const containerSlider = document.getElementById('inner-carousel');
function buildContainer(series) {
    for (let i = 0; i < series.length; i++) {
        if(series[i].destacada===true){
            console.log(series[i]);
            containerSlider.innerHTML += `                 
            <div class="carousel-item active hero ">
            <img src="${series[i].imagen}" class="d-block w-100 img-hero " alt="">
            <div class="carousel-caption d-none d-md-block">
                    <button class="btn-hero btn-white bi bi-play mt-n3">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                        REPRODUCIR
                    </button>
                    <h5 class="text mt-2 title-black title">${series[i].nombre}</h5>
                    <p class="user-select-none p-black text">${series[i].descripcion}</p>
                </div>              
            </div> 
             `
        }      
    }
}

getSeries().then(series => buildContainer(series));
 /* 
 
 
            <div class="carousel-caption d-none d-md-block">
                <button class="btn-hero btn-white bi bi-play mt-n3">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    REPRODUCIR
                </button>
                <h5 class="text mt-2 title-black title-${series[i].id}"></h5>
                <p class="user-select-none p-black text-${series[i].id}"></p>
 <button class="btn-hero btn-white bi bi-play mt-n3">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    REPRODUCIR
                </button>
                <div>ro</div>*/
/*console.log(series.length);
for (let i = 0; i < series.length; i++) {
    if (series[i].destacada == 'true') {


        console.log(series[i].nombre)
        containerSlider.innerHTMLL = `
        <button class="btn-hero btn-white bi bi-play mt-n3">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                    REPRODUCIR
                </button>

        `
    }*/



/*  series.map(serie => {
        if (serie.destacada === 'true') {
            slider.innerHTML = `

                <button class="btn-hero btn-white bi bi-play mt-n3">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                REPRODUCIR
                </button>
                <h5 class="text mt-2 title-black">${serie.nombre}</h5>
                <p class="user-select-none p-black">${serie.descripcion}</p>
            `;
            section.appendChild(slider);
        }
    })*/

/*function buildSeries(series) {
    series.map(serie => {
        if (serie.destacada === 'true') {
            slider.innerHTML = `

                <button class="btn-hero btn-white bi bi-play mt-n3">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                REPRODUCIR
                </button>
                <h5 class="text mt-2 title-black">${serie.nombre}</h5>
                <p class="user-select-none p-black">${serie.descripcion}</p>
            `;
            section.appendChild(slider);
        }
    })
}
*/
//getSeries().then(series => buildSeries(series));







