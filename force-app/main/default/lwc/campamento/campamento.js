import { LightningElement,track } from 'lwc';

export default class Campamento extends LightningElement {

    nombre = 'Campamento Remoto';
    ubicacion = 'Internet';
    @track aventureros = [
        {
            Id : 1,
            Name : 'Alba Rivas',
        }
        ,{
            Id : 2,
            Name : 'Dani',
        }
    ];


    handlerNameChanged(event){

        let eventDetail = event.detail;
        this.aventureros[eventDetail.aventureroId-1].Name = eventDetail.aventureroName;

    }
}