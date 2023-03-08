import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, user } from '../auth.service';
import { RegistrationService } from '../registration.service';


declare var window: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  registration: any;
  customer : any ;
  maintenance:any;
  merchant:any;
  login: any;

 


  customerForm: FormGroup;
  maintenanceForm: FormGroup;
  merchantForm: FormGroup;


  loginForm: FormGroup;
  image: any;

  constructor(private services: RegistrationService, private auth: AuthService) {

    this.customerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      user : new FormControl(''),
    })

    this.maintenanceForm= new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      idmc :new FormControl(''),
      idmcfront : new FormControl(''),
      idmcback : new FormControl(''),
      crmcfront : new FormControl(''),
      crmcback : new FormControl(''),
      maintenance : new FormControl('')

    })
    this.merchantForm= new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      idm :new FormControl(''),
      idmfront : new FormControl(''),
      idmback : new FormControl(''),
      crmfront : new FormControl(''),
      crmback : new FormControl(''),
      merchant : new FormControl('')
    })


    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  submitCustomerForm(){
    console.log(this.customerForm)
  }

  submitMaintenanceForm(){
    console.log(this.maintenanceForm)

  }

  submitMerchantForm(){
    console.log(this.merchantForm)

  }
  // submitCustomerForm(data: FormGroup, image: any) {
  //   let form = new FormData();
  //   for (const key in data.value) {
  //     if (key == "idmcback" || key =="crmcfront" || key =="crmcback" || key == "idmcback" )  {
  //       form.append(key, image.files[0])
  //     }
  //     else {
  //       form.append(key, data.get(key)?.value)
  //     }
  //   }

  
  //   this.services.getdata(form).subscribe({
      // next:(res) => console.log(res),
      // error:(eror) => console.log (eror)
  //   })
  //   console.log(this.customerForm)
  // }
  submitloginForm() {
    console.log(this.loginForm)
    this.services.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.auth.setLoggedUser(res.user)
        this.auth.setToken(res.access_token)
        console.log(res.user)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {

    this.registration = new window.bootstrap.Modal(
      document.getElementById("registrationModal")
    )

    this.customer = new window.bootstrap.Modal(
      document.getElementById("customerModal")
    )
    this.maintenance=new window.bootstrap.Modal(
      document.getElementById("maintenanceModal")
    )
    this.merchant=new window.bootstrap.Modal(
      document.getElementById("merchantModal")
    )

    this.login = new window.bootstrap.Modal(
      document.getElementById("loginModal")
    )
  }
  openModalRegistration() {
    this.registration.show();
  }
  OpenCustomerForm(){
    this.customer.show();
  }
  OpenMaintenanceForm(){
    this.maintenance.show();
  }

  OpenMerchantForm(){
    this.merchant.show();
  }

  openModalLogin() {
    this.login.show()
  }

}

