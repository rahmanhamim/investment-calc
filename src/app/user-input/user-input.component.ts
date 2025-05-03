import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredDuration = '0';
  enteredExpectedReturn = '0';
  onSubmit() {
    console.log('submitted values', {
      enteredInitialInvestment: this.enteredInitialInvestment,
      enteredAnnualInvestment: this.enteredAnnualInvestment,
      enteredDuration: this.enteredDuration,
      enteredExpectedReturn: this.enteredExpectedReturn,
    });
  }
}
