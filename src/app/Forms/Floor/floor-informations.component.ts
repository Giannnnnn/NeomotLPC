import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'floor-informations',
    templateUrl: './floor-informations.component.html',
    styleUrls: ['./floor-informations.component.scss']
})
export class FloorInformationsComponent implements OnInit, OnChanges {
    @Input() title: string = '';
    public sVGIsVisible: boolean = false;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnChanges(changes: SimpleChanges) {

    }

    ngOnInit() {

    }

    toggleVisibilityIcon(): void {
        this.sVGIsVisible = !this.sVGIsVisible;
    }

}
