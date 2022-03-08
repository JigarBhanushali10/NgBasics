import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
   <h2>Item View</h2>
 
   <ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{$implicit:items}">
   </ng-container> 
   `,
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @Input() items: any[] = [];
    @Input() itemTemplate: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

}



// import { Component, Input, TemplateRef } from '@angular/core';
 
 
// @Component({
//   selector: 'item-view',
//   template: `
//   <h2>Item View</h2>
 
//   <ng-container [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{$implicit:items}">
//   </ng-container> 
//   `
// })
// export class ItemViewComponent {
 
//   @Input() items: any[] = [];
//   @Input() itemTemplate: TemplateRef<HTMLElement>;
 
// }