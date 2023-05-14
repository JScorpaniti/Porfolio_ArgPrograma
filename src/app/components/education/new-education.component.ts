import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { SEducationService } from 'src/app/servicios/s-education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent {
  school: string = '';
  career: string = '';

   constructor(private sEducation: SEducationService, private router:Router) { }

   onCreate(): void {
    const exp = new Education(this.school, this.career);
    this.sEducation.save(exp).subscribe(data => {
      alert("Educacion agregada");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
   }
}
