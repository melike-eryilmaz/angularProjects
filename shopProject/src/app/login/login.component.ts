import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }
  loginForm: FormGroup;
  model: User = new User();
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]

    })
  }
  login(form: FormGroup) {
    // console.log("girdi")
    // console.log(this.model.userName)
    // console.log(this.model.password)
    // console.log(this.loginForm.value.userName)
    this.model.userName=this.loginForm.value.userName
    this.model.password=this.loginForm.value.password
    this.accountService.login(this.model);
  }
  ngOnInit() {
    this.createLoginForm();
  }

}
