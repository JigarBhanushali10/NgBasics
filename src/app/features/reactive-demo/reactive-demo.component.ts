import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.scss']
})
export class ReactiveDemoComponent implements OnInit {

  genders = ['male', 'female'];
   signupForm: FormGroup;
    ngOnInit(): void {
      this.signupForm = new FormGroup ({
        userData: new FormGroup ({
          'username': new FormControl('Pavan Nagadiya', Validators.required),
        'email': new FormControl('nagadiyap@gmail.com', [Validators.required, Validators.email]),
        }),
        'gender': new FormControl('male'),
      })
    }
    onSubmit() {
      console.log(this.signupForm);
    }

}
