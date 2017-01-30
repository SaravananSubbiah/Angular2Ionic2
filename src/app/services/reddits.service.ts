import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditsService {
    http: any;
    baseUrl: String;
    constructor(http: Http){
        console.log('RedditsService Initialissssed');
        this.http = http;
        this.baseUrl = "https://www.reddit.com/r"
    }

    getPosts(category,limit){
        return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
            .map(res => res.json());
    }

}
