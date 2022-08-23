import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationFormService } from '../registration-form/registration-form.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl,FormGroup,Validators,FormBuilder  } from '@angular/forms';



@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {
     posts;
     registration;
     dtOptions: DataTables.Settings = {};
     showContent=false;
     closeResult: string = '';
     formarry:any []=[];
     formarry1:any []=[];
     registrationdet: any[] = [];
     isSumiited=false;
     registrationDetails=this.Formbuilder.group({
      id:null,
      FirstName:['',[Validators.required]],
      LastName:['',[Validators.required]],
      Email:  ['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Phone:[null,[Validators.required,Validators.minLength(10)]],
      regpwd:[null,[Validators.required,Validators.minLength(6)]],
      regconfirmpwd:['',[Validators.required]],
  
    })     
  constructor(private registrationformservice:RegistrationFormService,private modalService: NgbModal,private Formbuilder:FormBuilder) { }

  ngOnInit(): void {

    

    this.showContent=false;
    this.getdata();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      
    };
  }

  Edit=(id)=>{
    this.registrationformservice.getRegistratiobyID(id).subscribe((data : any)=>{
     debugger;
     console.log(data);

    this.registrationDetails.controls.id.setValue(data.id);
    this.registrationDetails.controls.FirstName.setValue(data.FirstName);
    this.registrationDetails.controls.LastName.setValue(data.LastName);
    this.registrationDetails.controls.Email.setValue(data.Email);
    this.registrationDetails.controls.Phone.setValue(data.Phone);
    this.registrationDetails.controls.regpwd.setValue(data.regpwd);
    this.registrationDetails.controls.regconfirmpwd.setValue(data.regconfirmpwd);
    
     document.getElementById('btnadd').click();
    

    })

  }
  openModal(template) {
    this.modalService.open(template);
   }
  Delete=(id)=>{
    this.registrationformservice.deleteRegistration(id).subscribe((res)=>{
       this.getdata();

      })

  }

 getdata=()=>{

   this.registrationformservice.getRegistrationDet().subscribe((data : any[])=>{
    console.log("Registration Details:");
    this.registration=data;
    this.showContent=true;
    console.log(this.registration);
})
 }


 
 open(content:any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.registrationDetails.reset();
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
} 
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

get registerForm() { return this.registrationDetails.controls; }
public Addregistration(Registerdata){
  this.registrationformservice.createRegistration(Registerdata).subscribe((ret)=>{
        console.log("Policy created: ", ret);
        this.getdata();
  });
}
onSubmit(){
  this.isSumiited=true;
  if(this.registrationDetails.valid)
  {

     
    debugger;

    
    this.Addregistration(this.registrationDetails.value);
    this.registrationDetails.reset();
    this.isSumiited=false;
    this.modalService.dismissAll();
    
  
  }
  

}

}

