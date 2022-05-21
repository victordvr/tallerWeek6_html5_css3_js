
var nodosFrutas = [];
var numerosPares = [];
var numerosImpares = [];

const ParesImpares = () => {
    nodosFrutas = document.querySelectorAll(`.fruta`);
    let p = 0;
    let ip = 0;
    nodosFrutas.forEach((element, index) => {
        let division = element.getAttribute('value') % 2;
        if (division == 0){
            numerosPares[p] = element;
            p++;
        }else{
            numerosImpares[ip] = element;
            ip++;
        }
    })
}

const resaltarPares = () => {
    numerosPares.forEach(element => {
        element.classList.add('resaltar');
    })
    numerosImpares.forEach(element => {
        element.classList.remove('resaltar');
    })
}

const resaltarImpares = () => {
    numerosImpares.forEach(element => {
        element.classList.add('resaltar');
    })
    numerosPares.forEach(element => {
        element.classList.remove('resaltar');
    })
}

const resetearTema = () => {
    nodosFrutas.forEach(element => {
        element.classList.remove('resaltar');
    })
}
//------------------------------------------------------

ParesImpares();

