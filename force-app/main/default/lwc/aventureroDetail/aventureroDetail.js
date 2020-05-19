import { LightningElement,api } from 'lwc';

export default class AventureroDetail extends LightningElement {
    @api aventurero;

    handlerChangedValue(event){
        let value = event.detail.value;

        var evt = new CustomEvent('namechanged',{
            detail:{
                aventureroId : this.aventurero.Id,
                aventureroName : value,
            }
        });

        this.dispatchEvent(evt);

    }
}