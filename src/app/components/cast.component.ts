import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: '../templates/cast.component.html'
})
export class CastComponent implements OnInit {
    showId?: number;
    cast: any;



    constructor(private http: HttpClient,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.showId = this.route.snapshot.params['showId'];
        this.loadCast();
    }


    loadCast(): void {
        if (this.showId) {
            this.http.get(`http://api.tvmaze.com/shows/${this.showId}/cast`)
            .subscribe((data: any) => {
                this.cast = data;
            });
        }
    }
}