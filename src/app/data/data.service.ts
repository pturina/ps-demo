import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http : HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly','Annual','LifeTime']);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    
    return this.http.post('https://putsreq.com/H8xaiCtOsaaFzVy8JAva',userSettings)
    
    //return of(userSettings);

  }
}
