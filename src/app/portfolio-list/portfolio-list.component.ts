
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio/portfolio.service';
import { PortfolioEntry } from '../portfolio/portfolio.model';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDialogComponent } from '../portfolio-dialog/portfolio-dialog.component';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  portfolioEntries: PortfolioEntry[] = [];
  dialog: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadPortfolio();
  }

  loadPortfolio(): void {
    this.portfolioService.getPortfolio().subscribe(entries => {
      this.portfolioEntries = entries;
    });
  }

    openDialog(): void {
    const dialogRef = this.dialog.open(PortfolioDialogComponent, {
      width: '500px',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.loadPortfolio();
      }
    });
  }

}

