import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostAdServiceClient} from "../services/postad.service.client.";
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";import "rxjs/add/operator/map";
import {UserServiceClient} from "../services/user.service.client";

const URL = 'http://localhost:4000/api/upload';


@Component({
  selector: 'app-update-ad',
  templateUrl: './update-ad.component.html',
  styleUrls: ['./update-ad.component.css']
})
export class UpdateAdComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(private service: PostAdServiceClient,
              private userservice: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute,
              private http: Http, private el: ElementRef) {
    this.route.params.subscribe(params => this._id=(params['adId']));
  }

  currentuser;
  title;
  _id;
  ad;
  username;
  phone;
  email;
  temp;
  category;
  categoryVal;
  description;
  image=[];
  price:number;
  isPrice=false;
  powers = [{
    key: "hhh",
    value: "Housing",
  }, {
    key: "jjj",
    value: "Job",
  }, {
    key: "sss",
    value: "Sale",
  },{
    key: "bbb",
    value: "Services",
  },
    {
      key: "ggg",
      value: "Gigs",
    }];

  setPrice()
  {
    if(this.categoryVal=="Housing" || this.categoryVal=="Sale")
      this.isPrice=true;
    else
      this.isPrice=false;
  }

  setParams()
  {
    if(this.categoryVal==null || this.categoryVal==undefined) {
      console.log("CURRENT USER in UPDAT AD:"+this.currentuser);
      alert("Please select a category");
      return false;
    }
    else {
      let index = this.powers.findIndex(pow => pow.value === this.categoryVal);
      this.category = this.powers[index].key;
      return true;
    }
  }

  setAd(getad)
  {
    this.title=getad.title;
    console.log("title update:"+this.title);
    this.description = getad.description;
    this.username=getad.username;
    this.phone=getad.phone;
    this.email=getad.email;
  }

  updatead()
  {
    if(this.setParams()) {
      this.ad = {
        _id:this._id,
        title: this.title,
        category: this.category,
        description: this.description,
        price: this.price,
        image: this.image,
        username: this.username,
        email: this.email,
        phone: this.phone

      };
      console.log("IMAGE:" + this.image);

      if(this.currentuser==="admin")
      {
        this.service
          .updateAd(this.ad)
          .then(() =>
            this.router.navigate(['user-admin']));
      }
      else {
        this.service
          .updateAd(this.ad)
          .then(() =>
            this.router.navigate(['home']));
      }
    }
  }

  logout() {
    this.userservice
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.service
      .getAd(this._id)
      .then((ad)=>this.setAd(ad));

    this.userservice
      .profile()
      .then(user => this.currentuser=user.username);
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
      this.temp = response;
      this.temp=this.temp.substr(6);
      this.image.push(this.temp);
      console.log("IMAGE LINK:" + this.image);




    };
  }

}
