/*
function concatenaliste(lista1, lista2) {
    let listaconcatenata;

    listaconcatenata = lista1.concat(lista2);

    return listaconcatenata;
}

let listaUno = [a, b, c, d];
let listaDue = [e, f, g, h];

let listaconcatenata = concatenaliste([a, b, c, d], listaDue)

console.log("ecco la lista concatenata" + listaUnoDue)
*/

function modificaLista(listaDaModificare){

    for (let i = 0; i < listaDaModificare.length; i++) {
        listaDaModificare[i] = listaDaModificare [i] + "_check"
        
    }
    
    return listaDaModificare;
    }
    
    
    let nomi = ["Gino", "Sofia", "Mattia", "Armando", "Giorgia", "Daniel", "Maurizio"];
    
    let listaNomi = modificaLista(nomi);
    
    console.log("ecco la lista verificata" + listaNomi)


