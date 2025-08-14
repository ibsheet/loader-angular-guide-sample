import { Component } from '@angular/core';
import { SharedModules } from './shared/shared.module';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import loader from '@ibsheet/loader';

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: 'https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/',
  locales: ['en', 'ko'],
  plugins: ['excel', 'common', 'dialog']
}

// 로더 config
loader.config({
  registry: [ibsheetLib]
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModules,
    RouterOutlet, RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(library: FaIconLibrary) {
    // 사용할 아이콘을 라이브러리에 등록
    library.addIcons(faCode, faSearch, faGithub);
  }
  protected title = 'ng-guide-samples';
}
