import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { LocalStorageService } from 'src/app/modulles/shared/services/local-storage.service';


@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit {

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  labelPosition = ''
  checked = false
  indeterminate = false
  definitionFormGroup: FormGroup;

  // startDatePicker: MatDatepicker<any>;
  // finishDatePicker: MatDatepicker<any>;


  constructor(private localStorageService: LocalStorageService) { 
    this. definitionFormGroup = new FormGroup({
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

  
  saveTextToLocalStorage(key:string, value:string){
    this.localStorageService.saveData(key, value)

  }


}
