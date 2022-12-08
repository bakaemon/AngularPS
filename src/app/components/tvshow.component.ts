import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "../templates/tvshow.component.html"
})
export class TVShowComponent {
    apiUrl:string = "http://api.tvmaze.com/shows/";
    showId?:number; 
    showName: string = "";
    showImg: string = "";
    casts: any;
    showRating?: number;
    constructor(private http: HttpClient,
        private router: Router) { }
    loadShow() : void {
        if (this.showId) {
            this.http.get<any>(this.apiUrl + this.showId)
                .subscribe((data: any) => {
                    this.showName = data.name;
                    this.showImg = data.image.medium;
                    this.showRating = data.rating.average;
                    this.router.navigate(["welcome"]);
                });
        }

    }
    
    
}