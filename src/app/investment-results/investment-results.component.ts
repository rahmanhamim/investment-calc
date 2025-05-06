import { Component, inject, Input, input, OnInit } from '@angular/core';
import { AnnualData } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent implements OnInit {
  // results = input<AnnualData[]>([]);
  // @Input({ required: true }) results: AnnualData[] = [];

  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultsData;
  }

  ngOnInit(): void {}
}
