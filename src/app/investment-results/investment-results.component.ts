import { Component, Input, input, OnInit } from '@angular/core';
import { AnnualData } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent implements OnInit {
  results = input<AnnualData[]>([]);

  // @Input({ required: true }) results: AnnualData[] = [];

  ngOnInit(): void {
    console.log(this.results());
    console.log(this.results().length);
  }
}
