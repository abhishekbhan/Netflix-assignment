import {Component, OnInit, Input, ElementRef, OnDestroy, OnChanges} from '@angular/core';
import {RepoService} from "../../services/repo.service";
import {OrderByPipe} from "../../pipes/orderby.pipe";

@Component({
    selector: 'search-repos',
    templateUrl: './search-repos.component.html',
    styleUrls: ['./search-repos.css']
})
export class SearchReposComponent implements OnInit, OnDestroy{
    orgName: string= '';
    repos: any[]=null;
    searching :boolean= false;

    constructor(private repoService: RepoService, private orderByPipe: OrderByPipe) {

    }

    ngOnInit() {

    }

    onSubmit(event) {
        console.log('Org name', this.orgName);
        if(event.keyCode == 13 && this.orgName && this.orgName.length > 0) {
            this.searching = true;
            this.repoService.getRepos(this.orgName).subscribe((repos) => {
                console.log('Repos::', repos);
                this.searching = false;
                this.repos = this.orderByPipe.transform(repos, 'open_issues_count', 'desc');
            }, (err) => {
                this.searching = false;
                this.repos = [];
            })
        }

    }
    ngOnDestroy() {

    }
}