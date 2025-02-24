import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as exampleData from './assets/app.json';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MatTabsModule, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  links: any[] = exampleData.links;
  ngOnInit(): void {
    console.log('links', this.links);
  }
  title = 'my-favorities';
  styling(item: any){
    return `color: ${item.color}; background-color: ${item.backcolor}; ${item.style}`;
  }
}
