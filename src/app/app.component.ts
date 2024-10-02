import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { TwoAComponent } from './two-a/two.component';
import { TwoBComponent } from './two-b/two-b.component';
import { TwoCComponent } from './two-c/two-c.component';
import { TwoDComponent } from './two-d/two-d.component';
import { ThreeAComponent } from './three-a/three-a.component';
import { ThreeBComponent } from './three-b/three-b.component';
import { ThreeCComponent } from './three-c/three-c.component';
import { FourAComponent } from './four-a/four-a.component';
import { FourBComponent } from './four-b/four-b.component';
import { FourCComponent } from './four-c/four-c.component';
import { FiveAComponent } from './five-a/five-a.component';
import { FiveBComponent } from './five-b/five-b.component';
import { FiveCComponent } from './five-c/five-c.component';
import { SixAComponent } from './six-a/six-a.component';
import { SixBComponent } from './six-b/six-b.component';
import { SevenAComponent } from './seven-a/seven-a.component';
import { SevenBComponent } from './seven-b/seven-b.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RegistrationFormComponent,
    ReactiveFormsModule,
    RouterOutlet,
    FormsModule,
    TwoAComponent,
    TwoBComponent,
    TwoCComponent,
    TwoDComponent,
    ThreeAComponent,
    ThreeBComponent,
    ThreeCComponent,
    FourAComponent,
    FourBComponent,
    FourCComponent,
    FiveAComponent,
    FiveBComponent,
    FiveCComponent,
    SixAComponent,
    SixBComponent,
    SevenAComponent,
    SevenBComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rookie';
}
