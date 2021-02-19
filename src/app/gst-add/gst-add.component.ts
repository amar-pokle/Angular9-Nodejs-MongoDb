import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      client_name: ['', Validators.required ],
      father_name: ['', Validators.required ],
      address: ['', Validators.required ],
      email: ['', Validators.required ],
      mobile_no: ['', Validators.required ]
    });
  }

  addBusiness(client_name, father_name, address, email, mobile_no) {
    this.bs.addBusiness(client_name, father_name, address, email, mobile_no);
    
  }


  ngOnInit() {
  }

}