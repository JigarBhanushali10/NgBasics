import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit {

  title = 'ngTemplateOutlet Example';

  @ViewChild('cardTemplate',{static:true}) cardTemplate:TemplateRef<HTMLElement>;
 @ViewChild('listTemplate',{static:true}) listTemplate:TemplateRef<HTMLElement>;



 mode ="card"

 items = [
       {
         header: 'Angular Tutorial',
         content: 'The Angular Tutorial for Beginners & Professionals'
       },
       {
         header: 'Typescript Tutorial',
         content: 'The Complete Guide to Typescript'
       },
       {
         header: 'Entity Framework Code Tutorial',
         content: 'Learn Everything about Entity Framework Core'
       },
     ];
   
     modeOptions = [
       { mode: "card" },
       { mode: "list" },
     ];
   
     get template() {
   
       if(this.mode=="list") return this.listTemplate
       return this.cardTemplate
     }

  constructor() { }

  ngOnInit(): void {
  }

}



// import { Component, TemplateRef, ViewChild } from '@angular/core';
 
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ngTemplateOutlet Example';
 
//   @ViewChild('cardTemplate',null) cardTemplate:TemplateRef<HTMLElement>;
//   @ViewChild('listTemplate',null) listTemplate:TemplateRef<HTMLElement>;
 
//   mode ="card"
 
//   items = [
//     {
//       header: 'Angular Tutorial',
//       content: 'The Angular Tutorial for Beginners & Professionals'
//     },
//     {
//       header: 'Typescript Tutorial',
//       content: 'The Complete Guide to Typescript'
//     },
//     {
//       header: 'Entity Framework Code Tutorial',
//       content: 'Learn Everything about Entity Framework Core'
//     },
//   ];
 
//   modeOptions = [
//     { mode: "card" },
//     { mode: "list" },
//   ];
 
//   get template() {
 
//     if(this.mode=="list") return this.listTemplate
//     return this.cardTemplate
//   }
 
// }