import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private _formBuilder: FormBuilder) { }

  title = 'NeomotLPC';
  gola: string = '';
  profundidadePoco: number = 0;
  numeroDePavimentos: number = 0;
  parede: string = '';
  qdComando: string = '';
  ligacaoQuadro: string = '';
  casaDeMaquina: string = '';

  golas: string[] = ['Alvenaria', 'Concreto', 'Bloco est'];
  paredes: string[] = ['Concreto', 'Tijolo', 'Bloco est.'];
  qdComandos: string[] = ['Porta pav.', 'Alçapão', 'Outro'];
  ligacaoQuadros: string[] = ['Neomot', 'Cliente'];
  casaDeMaquinas: string[] = ['Possui', 'Não possui'];

  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
  thirdFormGroup: FormGroup = this._formBuilder.group({ thirdCtrl: [''] });

  dynamicStepFormGroups: FormGroup[] = [];

  ngOnInit() {
    this.updateSteps();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['numeroDePavimentos']) {
      this.updateSteps();
    }
  }

  public updateSteps(): void {
    this.dynamicStepFormGroups = [];
    console.log()

    for (let i = 0; i < this.secondFormGroup.controls['secondCtrl'].value; i++) {
      const stepFormGroup = this._formBuilder.group({

        // Define form controls for each step as needed
        // Example: stepControl: [''],
      });
      this.dynamicStepFormGroups.push(stepFormGroup);
    }
  }
  public validateIfFirstStepIsValid(): boolean {

    return true;
  }
  public verifyIfHasHouseOfMachines():boolean{
    return this.casaDeMaquina == 'Possui' ? true : false;
  }
}
