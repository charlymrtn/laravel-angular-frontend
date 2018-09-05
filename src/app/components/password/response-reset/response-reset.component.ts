import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JarvisService } from '../../../Services/jarvis.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error = [];

  public form = {
    email: null,
    password: null,
    password_confirmation: null,
    resetToken: null
  };

  constructor(
    private route: ActivatedRoute,
    private Jarvis: JarvisService
  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    this.Jarvis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){

  }

  handleError(error){

  }

}
