import { Component, Input, OnInit, Output , EventEmitter, ContentChild, ElementRef, ViewChild, Renderer2} from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {


  @ContentChild("header") cardContentHeader: ElementRef;
  @ViewChild("header") cardViewHeader: ElementRef;

  @Output() newItemEvent: EventEmitter<string>
  // @Output() newItemEvent = new EventEmitter<string>();


  constructor(private renderor:Renderer2 ) { 
this.newItemEvent = new EventEmitter()
console.log("CardComponent ->constructor "+this.cardContentHeader)

  }
  ngOnChanges() {
    //first time returns undfined 
    console.log("CardComponent ->ngOnChanges "+this.cardContentHeader)
  }

  ngOnInit(): void {
    console.log("CardComponent ->ngOnInit "+this.cardContentHeader)

  }

  ngDoCheck() {
    //first time returns undfined 
    console.log("CardComponent ->ngDoCheck "+this.cardContentHeader)
  }

  ngAfterContentInit() {
    //cardContentHeader is available here
    console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)

    this.renderor.setStyle(this.cardContentHeader.nativeElement,"font-size","20px")

    //this.cardContentHeader.nativeElement.innerHTML="<h1>Test</h1>"
    //console.log("CardComponent ->ngAfterContentChecked-viewHeader")
    //console.log(this.cardViewHeader)   //undefined
  }


  ngAfterContentChecked() {
    //cardContentHeader is available here
    console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)
  }


  ngAfterViewInit() {
    console.log("CardComponent ->ngAfterViewInit-viewHeader "+this.cardViewHeader)
  }

  ngAfterViewChecked() {
    console.log("CardComponent ->ngAfterViewChecked-viewHeader "+this.cardViewHeader)
  }
  clickme(value: string){
    this.newItemEvent.emit(value)
  }
  @Input() fromChild2:string=""




  
}
