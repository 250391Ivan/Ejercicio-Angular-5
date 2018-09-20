import { Component ,NgModule} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ FormsModule ], //< added FormsModule here
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public fecha = 'Moy May 25 2018 00:00:00';



  
}

