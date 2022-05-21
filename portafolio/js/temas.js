//-------FUNCION PARA CAMBIOS DE TEMAS-------->
const leerTema = (id) => {
    //acceso o trae el nodo del select
    let btnColor = document.querySelector(`#${id}`);
    //lee y asigna el valor que está en select
    let btnValue = btnColor.value;
    //casos para el valor de select
    switch (btnValue) {
        case "azul":
            let navAzul = document.querySelectorAll('.nav-color');
            navAzul.forEach(element => {
                element.classList.remove('color-verdeClaro', 'color-rojo');
            });
            navAzul.forEach(element => {
                element.classList.add('color-azulClaro');
            });
            localStorage.setItem('temaNav', 'color-azulClaro');
            //para el header
            let headerAzul = document.querySelector('#header');
            headerAzul.classList.remove('color-rojoNaranja', 'color-verde')
            headerAzul.classList.add('color-azulMarino');
            localStorage.setItem('temaHeader', 'color-azulMarino');
            break;
        case "verde":
            let navVerde = document.querySelectorAll('.nav-color');
            navVerde.forEach(element => {
                element.classList.remove('color-azulClaro', 'color-rojo');
            });
            navVerde.forEach(element => {
                element.classList.add('color-verdeClaro');
            });
            localStorage.setItem('temaNav', 'color-verdeClaro');
            //header
            let headerVerde = document.querySelector('#header');
            headerVerde.classList.remove('color-azulMarino', 'color-rojoNaranja');
            headerVerde.classList.add('color-verde');
            localStorage.setItem('temaHeader', 'color-verde');
            break;
        case "rojo":
            let navRojo = document.querySelectorAll('.nav-color');
            navRojo.forEach(element => {
                element.classList.remove('color-azulClaro', 'color-verdeClaro');
            });
            navRojo.forEach(element => {
                element.classList.add('color-rojo');
            });
            localStorage.setItem('temaNav', 'color-rojo');
            //header
            let headerRojo = document.querySelector('#header');
            headerRojo.classList.remove('color-azulMarino', 'color-verde');
            headerRojo.classList.add('color-rojoNaranja');
            localStorage.setItem('temaHeader', 'color-rojoNaranja');
            break;
    }
}
//-----------FIN FUNCION CAMBIO DE TEMAS------------>
//------------FUNCIONES CONSERVAR TEMA--------------->
const conservarColor = () => {
    let temaGuardadoHeader = localStorage.getItem('temaHeader');
    let elementHeader = document.querySelector('#header');
    elementHeader.classList.add(temaGuardadoHeader);

    let temaGuardadoNav = localStorage.getItem('temaNav');
    let elementNav = document.querySelectorAll('.nav-color');
    elementNav.forEach(element => {
        element.classList.add(temaGuardadoNav);
    });

}
//-----------FIN FUNCIONES CONSERVAR TEMA--------------->

//------------FUNCION ACORDION----------------->
const modoAcordion = () => {
    let accordion = document.getElementsByClassName('content-box');
    for (let index = 0; index < accordion.length; index++) {
        accordion[index].addEventListener('click', function () {
            this.classList.toggle('active')
        })
    }
}

//-----------FIN FUNCION ACORDION---------------->



//------------EJECUCION-------------------------->
conservarColor();
modoAcordion();

//--------------FIN EJECUCION---------------------->
