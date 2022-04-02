import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() callback: (value: string) => Observable<any>;
  onChange: (value: any) => void;
  onTouch: (value: any) => void;
  inputForm = new FormControl();
  value: string;
  result: string;

  writeValue(obj: any): void {
    console.log(obj);
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    console.log(fn);

    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log(fn);

    this.onTouch = fn;
  }

  submitForm() {
    this.callback(this.inputForm.value)
      .pipe(
        tap((response) => {
          this.result = response;
        })
      )
      .subscribe(this.writeValue);
  }
}
