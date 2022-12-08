import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TVShowComponent } from "./components/tvshow.component";
import { StarComponent } from "./shared_components/star.component";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./components/welcome.component";
import { CastComponent } from "./components/cast.component";

@NgModule({
    imports: [BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { 'path': "welcome", component: WelcomeComponent },
            { 'path': 'cast/:showId', component: CastComponent },
            { 'path': '', redirectTo: 'welcome', pathMatch: 'full' },
        ])],
    declarations: [TVShowComponent, StarComponent, WelcomeComponent, CastComponent],
    bootstrap: [TVShowComponent, StarComponent]
})
export class AppModule { 

}