import { LightningElement,api } from 'lwc';

export default class Hijo extends LightningElement {
    @api nombre;

    cambioEdad(){
        // 1. Creamos el evento
        const  cambioEdad = new CustomEvent('agechanged', { detail: 18 });

        //2. Diparamos el evento
        this.dispatchEvent(cambioEdad);
    }
}
