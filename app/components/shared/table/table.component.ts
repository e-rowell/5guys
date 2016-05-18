import { Component, Input } from 'angular2/core';

@Component({
    selector: 'table-date',
    templateUrl: 'app/components/shared/table.component.html',
    styleUrls: ['app/components/shared/table.component.css']
})
export class TableComponent {
    // header and column types must be same length
    @Input() headerNames: string[];
    @Input() columnTypes: string[];
    
    tableData: any[][];
    
    fillData(): void {
        
    }
}