import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchReposComponent} from './components/search-repos/search-repos.component';
import {GithubApiService} from "./services/api.service";
import {RepoService} from "./services/repo.service";
import {OrderByPipe} from "./pipes/orderby.pipe";


@NgModule({
  declarations: [
    AppComponent,
    SearchReposComponent
  ],
  providers: [
      GithubApiService,
      RepoService,
      OrderByPipe
  ],
  // exports: [OrderByPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: SearchReposComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
