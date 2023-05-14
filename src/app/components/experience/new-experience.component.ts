import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent {
   empresa: string = '';
   tarea: string = '';

   constructor(private sExperience: SExperienciaService, private router:Router) { }

   onCreate(): void {
    const exp = new Experience(this.empresa, this.tarea);
    this.sExperience.save(exp).subscribe(data => {
      alert("Experiencia agregada");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
   }
}
