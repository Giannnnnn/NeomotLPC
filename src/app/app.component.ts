import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _formBuilder: FormBuilder) {}

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  thirdFormGroup: FormGroup = this._formBuilder.group({thirdCtrl: ['']});
  
  title = 'NeomotLPC';
  gola: string = '';
  aberturaPorta: string = '';
  qdComando: string = '';
  medida: string = '';
  casaDeMaquina: string = '';

  golas: string[] = ['Alvenaria', 'Concreto', 'Bloco est'];
  aberturaPortas: string[] = ['Lateral D.', 'Lateral esq.', 'Central'];
  qdComandos: string[] = ['Porta pav.', 'Alçapão', 'Outro'];
  medidas: string[] = ['Acabadas', 'Em Bruto'];
  casaDeMaquinas: string[] = ['Possui', 'Não possui'];
}
