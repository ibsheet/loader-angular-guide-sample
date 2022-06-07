import { Component } from '@angular/core';
import loader from '@ibsheet/loader';

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: 'https://demo.ibleaders.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/',
  locales: ['en', 'ko'],
  plugins: ['excel', 'common', 'dialog']
}

// 로더 config
loader.config({
  registry: [ibsheetLib]
});

// 로더 이벤트
loader.once('loaded', (evt) => {
  const target = evt.target;
  if (target.alias === ibsheetLib.name) {
    let IBSheet = loader.getIBSheetStatic();
    console.log('loaded', IBSheet);
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loader-angular-guide-samples';
}
