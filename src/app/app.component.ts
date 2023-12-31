import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface ResultItem {
  iconName?: string,
  label?: string,
  description?: string,
  color?: string,
  button?: string,
}

interface Result {
  title: string,
  subTitle: string,
  list: ResultItem[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ailos-challenge';
  checkIfDocumentIsValid: boolean | undefined = undefined;
  checkoutForm = this.formBuilder.group({
    cpf: '',
  });
  notificationList = [
    'Teste',
    'teste',
    'teste',
    'teste',
    'teste',
    'teste',
    'teste',
  ];
  stepper = {
    current: 0,
    list: [
      { label: 'Início' },
      { label: 'Documentos' },
      { label: 'Dados cadastrais' },
      { label: 'Admissão' },
    ]
  }
  resultInformation: Result[] = [
    {
      title: 'Situação cadastral do CPF',
      subTitle: 'Consulta na Receita Federal',
      list: [
        {
          iconName: 'fa-solid fa-user',
          label: 'Nome',
          description: 'Mariane de Sousa Oliveira',
          color: '#889499',
        },
        {
          iconName: 'fa-regular fa-circle-check',
          label: 'Situação do CPF',
          description: 'Regular',
          color: '#00c246',
        }
      ],

    },
    {
      title: 'Conta Aplicação',
      subTitle: 'Cooperativa Viacredi',
      list: [
        {
          iconName: 'fa-regular fa-credit-card',
          label: 'Número da conta',
          description: '557932-4',
          color: '#889499',
        },
        {
          button: 'Duplicar conta'
        }
      ],
    },
    {
      title: 'Conta corrente',
      subTitle: 'Cooperativa Viacredi',
      list: [
        {
          iconName: 'fa-regular fa-credit-card',
          label: 'Número da conta',
          description: '778461-8',
          color: '#889499',
        },
        {
          button: 'Duplicar conta'
        }
      ],
    },
  ]

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  validateCPF(cpf: string) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
      return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  }

  onSubmit(): void {
    const { cpf } = this.checkoutForm.value;
    this.checkIfDocumentIsValid = this.validateCPF(cpf || '')
  }

  onChange(value: string): void {
    if (value.length < 14) {
      this.checkIfDocumentIsValid = undefined;
    }
  }
}
