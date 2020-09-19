import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: 'star.component.html'
})
export class StarComponent implements OnChanges{
    
    @Input()
    rating: number = 0;

    starwidth: number;
    

    ngOnChanges(): void{
        this.starwidth = this.rating * 94 / 5;
    }
}