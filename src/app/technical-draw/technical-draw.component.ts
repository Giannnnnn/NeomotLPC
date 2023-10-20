import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'technical-draw-component',
    templateUrl: './technical-draw.component.html',
    styleUrls: ['./technical-draw.component.scss']
})
export class TechnicalDrawComponent implements OnInit, OnChanges {
    @Input() withHouseOfMachines: boolean = false;
    @Input() poco: number = 0;
    @Input() percurso: number = 0;
    @Input() ultimaAltura: number = 0;
    @Input() alturaCMaquina: number = 0;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {

    }

}
