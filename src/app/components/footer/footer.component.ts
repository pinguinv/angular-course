import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  subscription!: Subscription;
  
  constructor(private uiService:UiService){}

  changeColor(){
    this.uiService.turnButtonOff();
  }

}
