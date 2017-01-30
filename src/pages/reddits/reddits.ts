import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { RedditsService } from '../../app/services/reddits.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  category: any;
  limit: any;
  items: any;  
  constructor(public navCtrl: NavController, private redditsService: RedditsService) {
      this.getDefaults();

  }

   getDefaults(){
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    }
    else{
      this.category = "sports";
    }

    if(localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit');
    }
    else{
      this.limit = 10;
    }
     
  }

  ngOnInit(){
      this.getPosts(this.category, this.limit);
  }

  getPosts(category, limit){
      this.redditsService.getPosts(category,limit).subscribe(response=>{
          //console.log(response);
          this.items = response.data.children;
      })
  }

  viewItem(item){
      this.navCtrl.push(DetailsPage,{
          item: item
      });
  }

  changeCategory(){
    this.getPosts(this.category, this.limit);
  }

}
