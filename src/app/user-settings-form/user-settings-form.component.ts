import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  // originalUserSettings : UserSettings = {
  //   name: 'Pablo',
  //   emailOffers: true,
  //   interfaceStyle:'dark',
  //   subscriptionType: 'Annual',
  //   notes:'this is a text'
  // };
  originalUserSettings : UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings : UserSettings = {...this.originalUserSettings};
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  singleModel = "on";

  constructor(private dataService : DataService) { }

  ngOnInit(){
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }
  onHttpError(errorResponse : any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form:NgForm){
    console.log('in onSubmit: ', form.value);

    /* if(form.valid){
      console.log('in onSubmit: ', form.valid);
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    }
    else{
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors."
    } */
    
  }

  onBlur(field:NgModel){
    console.log('in onBlur: ' , field.valid);
  }
}
