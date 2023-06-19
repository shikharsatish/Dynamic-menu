import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  form: any;
  subMenuCount = 0;
  subMenuList: string[] = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        subMenuName: ["", Validators.required],
        subMenuCount: ["", Validators.required]
      })
  }

  submit() {
    console.log(this.form);
    this.subMenuCount = +this.form.value.subMenuCount;
    const subMenuName: string = this.form.value.subMenuName;
    for(let i=1; i<=this.subMenuCount; i++) {
      this.subMenuList.push(subMenuName);
    }
  }

  changeCount(event: any) {
console.log(event);

  }

}
