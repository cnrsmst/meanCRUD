import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  name: string ="";
  address: string ="";
  phone: string ="";

  UserArray : any[] = [];
  currentUserID = "";
  i = 0;

  constructor(private http: HttpClient) {
    this.getAllUser();

  }
  getAllUser() {
 
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
    {

     
        console.log(resultData);
        this.UserArray = resultData.data;
        
    });
 
 
  }

  setDelete(data: any) {
    this.http.delete("http://localhost:8000/user/delete"+ "/"+ data).subscribe((resultData: any)=>
    {
        console.log(resultData);
        console.log("deleted")
        this.getAllUser();
  
    });

    this.i = this.i -1
    }

  register() {
     
    let bodyData = {
      "name": this.name,
      "address": this.address,
      "phone" : this.phone
   
   }

   this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData: any) => {

        console.log(resultData);
        console.log("User registered succesfuly"); 
        
   })

      this.i = this.i + 1 
      location.reload();
  

  }

  

  


}




