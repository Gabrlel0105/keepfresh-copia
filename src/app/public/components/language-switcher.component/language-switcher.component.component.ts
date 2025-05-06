import { Component } from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher.component',
  imports: [MatButtonToggleGroup, MatButtonToggleGroup],
  templateUrl: './language-switcher.component.component.html',
  styleUrl: './language-switcher.component.component.css'
})
export class LanguageSwitcherComponentComponent {

  protected currentLang: string = 'en';
  protected languages: string[] = ['en', 'es'];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  useLanguage(language: string): void{
    this.translate.use(language);
    this.currentLang = language;
  }
}
