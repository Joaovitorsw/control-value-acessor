import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs';
import { RandomApiService } from './services/random-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public randomAPI: RandomApiService) {}

  form = new FormControl();

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        switchMap((value) => {
          return this.randomAPI.getRandomData();
        })
      )
      .subscribe((value) => {
        this.form.setValue(value[0].brand, { emitEvent: false });
      });
  }
}
