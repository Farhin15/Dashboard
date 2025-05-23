import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Transaction {
  id: number;
  transactionId: string;
  date: string;
  amount: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
 transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];

  searchTerm = '';
  selectedRole = '';
  selectedStatus = '';
  sortColumn: keyof Transaction | '' = 'id';
  sortDirection: 'asc' | 'desc' | '' = 'asc';

  currentPage = 1;
  pageSize = 5;

  ngOnInit() {
    this.transactions = [
     { id: 1, transactionId: 'TX12345', date: '2025-05-22', amount: '$100' },
    { id: 2, transactionId: 'TX12346', date: '2025-05-21', amount: '$250' },
    { id: 3, transactionId: 'TX12347', date: '2025-05-20', amount: '$500' },
    { id: 4, transactionId: 'TX12348', date: '2025-05-19', amount: '$120' },
    { id: 5, transactionId: 'TX12349', date: '2025-05-18', amount: '$90' }
    ];
    this.applyFilters();
  }

  applyFilters() {
    this.filteredTransactions = this.transactions
      .filter(
        (transaction) =>
          transaction.transactionId.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .sort((a:any, b:any) => {
        let result = 0;
        if (a[this.sortColumn] < b[this.sortColumn]) result = -1;
        if (a[this.sortColumn] > b[this.sortColumn]) result = 1;
        return this.sortDirection === 'asc' ? result : -result;
      });
  }

  changeSorting(column: keyof Transaction) {
    if (this.sortColumn === column) {
      if (this.sortDirection === 'desc') {
        this.sortColumn = '';
        this.sortDirection = '';
      }
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }

  get totalPages() {
    return Math.ceil(this.filteredTransactions.length / this.pageSize);
  }

  paginate(transactions: Transaction[]) {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return transactions.slice(startIndex, startIndex + this.pageSize);
  }
  resetPage() {
    this.currentPage = 1;
    this.applyFilters();
  }
}
