import { Component, OnInit } from '@angular/core';

export type LanguageType = 'en' | 'ar' | 'ru';

export enum Languages {
  en = 'en',
  ar = 'ar',
  ru = 'ru'
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public selectedLanguage: LanguageType;

  public languages: any[] = [
    {
      id: 'en',
      name: 'English'
    },
    {
      id: 'ar',
      name: 'Arabian'
    },
    {
      id: 'ru',
      name: 'Russian'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.selectedLanguage = Languages.en
  }

  selectLanguage(lang: LanguageType): void {
   this.selectedLanguage = lang
  }

}
