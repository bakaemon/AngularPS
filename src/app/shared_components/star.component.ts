import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "star-rating",
    templateUrl: "./star.component.html",
})
export class StarComponent {
    width: string = "180px"; //optional

    @Output() ratingMoused: EventEmitter<string> =
        new EventEmitter<string>();
    @Input()
    rating: number = 0;
    starSequence: any = Array.from({ length: 10 }, (v, i) => i + 1);
    isBoldStar(index: number): boolean {
        return index <= this.rating;
    }
    isHalfStar(index: number): boolean {
        return index + 1 > this.rating && this.isBoldStar(index);
    }

    getStarRating(index: number): string {
        if (this.isBoldStar(index)) {
            if (this.isHalfStar(index)) {
                return "fas fa-star-half-alt";
            }
            return "fas fa-star";
        }
        return "far fa-star";
    }
    getStarColor(): string {
        if (this.rating <= 5) {
            return "red";
        } else if (this.rating <= 8) {
            return "orange";
        } else {
            return "green";
        }
    }

}