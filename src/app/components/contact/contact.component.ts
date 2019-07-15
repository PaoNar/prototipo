import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'




@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form;
  emailPattern: any= /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.[a-z]{3}[a-z0-9-]*(.[a-z]{2,4})$/;
  namePattern: any=  /^[A-Z]?[a-z]+[^0-9_\\_\ü. ]+$/;
  cellPattern: any= /^(09)+[0-9]{8}$/;
  passwordPattern: any= /^[A-Za-z]+[A-Za-z0-9-_.\\_\ü ]*[0-9]*$/;

  createFormGoup(){
    return new FormGroup({
      email: new FormControl('', [Validators.required,Validators.minLength(5), Validators.pattern(this.emailPattern), Validators.email]),
      name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(18), Validators.pattern(this.namePattern)]),
      cell: new FormControl('',[Validators.required,Validators.pattern(this.cellPattern)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(32),Validators.pattern(this.passwordPattern)])
    })
  }

  contactForm : FormGroup

  constructor( private dbData: DataDbService) { 
    this.contactForm = this.createFormGoup();
    
  }

  ngOnInit() {
    
    }


  onResetForm(){
    this.contactForm.reset();
  }

  

  OnSaveForm(){
    if (this.contactForm.valid){
      this.dbData.saveMensaje(this.contactForm.value);
      this.onResetForm();
      console.log('valido')
    }else{
      console.log('no vale')
    }
    
  }

get name(){
  return this.contactForm.get('name');}
get email(){
  return this.contactForm.get('email');}
get cell(){
  return this.contactForm.get('cell');}
get password(){
  return this.contactForm.get('password');}
    

}
