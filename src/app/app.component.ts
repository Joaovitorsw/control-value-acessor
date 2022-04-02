import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { RandomApiService } from './services/random-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public randomAPI: RandomApiService) {}

  form = new FormControl(1);

  getRandomData() {
    return this.randomAPI.getRandomData().pipe(
      map((response) => {
        return response[0].brand;
      })
    );
  }
}
