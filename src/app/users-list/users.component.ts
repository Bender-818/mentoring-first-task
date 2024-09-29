import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Injectable } from "@angular/core";



export interface User {
    id: number; 
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
         lat: string;
         lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}


@Component({
 selector: 'app-users-list',
 templateUrl: './users.component.html',
 styleUrl: './users.component.scss',
 standalone: true , 
 imports: [NgFor] ,
})

export class UsersListComponent {
readonly apiService = inject(HttpClient);
users: User[] = [];
constructor() {
    this.apiService.get<User []>('https://jsonplaceholder.typicode.com/users').subscribe(
        (Response:any) => {
            this.users = Response;
            console.log('USERS: ', this.users)
        }
    )
}
      deleteUser(id: number) {
        this.users = this.users.filter(
            item => item.id === id
        )
      } 
      
}