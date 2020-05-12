import { LightningElement } from 'lwc';

export default class Padre extends LightningElement {
    firstname = 'Dani';

    notificarCambioEdad(event){
        edad = event.detail;
        console.log('La edad es: ',edad);
    }
}