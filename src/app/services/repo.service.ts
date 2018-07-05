import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GithubApiService} from "./api.service";

@Injectable()
export class RepoService {

    constructor(private api: GithubApiService) {

    }


    getRepos(orgName: string): Observable<any[]> {

        let endPoint = '/orgs/'+orgName+'/repos';

        return this.api.get(endPoint).map(res => res.json() as any[]).catch(err => Observable.throw(err));
    }

    // search(q: string): Observable<any> {
    //     let endPoint = '/search/users?q=' + q;
    //     return this.api.get(endPoint).map(res => res.json()).catch(err => Observable.throw(err));
    //
    // }


}