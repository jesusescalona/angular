import { Users } from './models/users';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./components/css/app.component.css']
})
export class AppComponent
{
	title = 'Test Models and Services';
	Users: Array<Users>;

	constructor(private http: Http)
	{
		this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(resp => this.Users = resp.json());
	}
}
