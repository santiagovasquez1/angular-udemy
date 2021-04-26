import { PeticionesService } from './../services/peticiones.service';
import { UserReqres } from './../models/user-reqres';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userReqres: UserReqres;
  userGuardado: UserReqres;
  constructor(private service: PeticionesService) {
    this.userReqres = new UserReqres('', '');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addUser(this.userReqres).subscribe(result => {
      this.userGuardado = result;
      console.log(this.userGuardado);
    }, error => {
      console.log(<any>error);
    });
  }

}
