import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpage',
  templateUrl: './resetpage.component.html',
  styleUrls: ['./resetpage.component.scss']
})
export class ResetpageComponent implements OnInit {

  resetpage!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.resetpage=this.formBuilder.group({
      oldpwd:['', [Validators.required, Validators.minLength(6)]],
      newpwd:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onsubmit(){
    
  }

}
