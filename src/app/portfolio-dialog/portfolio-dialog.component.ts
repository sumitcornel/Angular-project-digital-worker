

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PortfolioEntry } from '../portfolio/portfolio.model';
import { PortfolioService } from '../portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.css']
})
export class PortfolioDialogComponent {
  entry: PortfolioEntry = { title: '', description: '', imageUrl: '', hidden: false, customerLink: '' };

  constructor(
    public dialogRef: MatDialogRef<PortfolioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'add' | 'edit', entry?: PortfolioEntry },
    private portfolioService: PortfolioService
  ) {
    if (data.entry) {
      this.entry = { ...data.entry };
    }
  }

  save(): void {
    if (this.data.mode === 'add') {
      this.portfolioService.addPortfolioEntry(this.entry).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.portfolioService.updatePortfolioEntry(this.entry).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }
}
