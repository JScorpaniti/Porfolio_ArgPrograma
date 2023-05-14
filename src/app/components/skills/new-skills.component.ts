import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/servicios/s-skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent {
   name: string = '';
   percent: number;
   percentageValues: number[] = Array.from({length: 100}, (_, i) => i + 1);

   constructor(private sSkills: SSkillsService, private router:Router) { }

   onCreate(): void {
    const ski = new Skills(this.name, this.percent);
    this.sSkills.save(ski).subscribe(data => {
      alert("Habilidad agregada");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
   }
}
