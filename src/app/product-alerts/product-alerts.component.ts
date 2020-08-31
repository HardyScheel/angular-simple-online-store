import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';  // This component can now receive a product as input.
import { Output, EventEmitter } from '@angular/core';   

@Component({
    selector: 'app-product-alerts',   // // The selector is the name you give the Angular component.
    templateUrl: './product-alerts.component.html',
    styleUrls: ['./product-alerts.component.css']
})

// The component definition also exports the class, ProductAlertsComponent, which handles functionality for the component.
export class ProductAlertsComponent implements OnInit {
    @Input() product;   // The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
    @Output() notify = new EventEmitter();  // This allows the product alert component to emit an event when the value of the notify property changes.
    
    constructor() { }

    ngOnInit() { }
}