import { Component } from '@angular/core';
import * as camelCase from 'camelcase';
@Component({
  selector: 'nx-hash-error-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = camelCase('hash-error');
}
