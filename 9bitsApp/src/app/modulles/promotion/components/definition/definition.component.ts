import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  loremIpsumShort= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolore  magna aliqua."
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  labelPosition = ''
  checked = false
  indeterminate = false
  definitionFormGroup: FormGroup;


  constructor() {
    this.definitionFormGroup = new FormGroup({
      marketingName: new FormControl('', [Validators.required]),
      technicalName: new FormControl(''),
      description: new FormControl(''),
      conditionsUser: new FormControl('', [Validators.required]),
      conditionType: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl(''),
      paymentBenefits: new FormControl(''),
      coectedWithOtherPromotions: new FormControl(''),
      backPromotion: new FormControl(''),
    })
  }

  ngOnInit() {
    Object.keys(this.definitionFormGroup.controls).forEach(controlName => {
      const savedValue = localStorage.getItem(controlName);
      if (savedValue) {
        this.definitionFormGroup.controls[controlName].setValue(savedValue);
      }
    });
  }


  saveTextToLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);

  }


}
