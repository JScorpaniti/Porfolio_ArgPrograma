import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/servicios/s-skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent {
  ski: Skills = undefined;
  percentageValues: number[] = Array.from({length: 100}, (_, i) => i + 1);
  constructor(private sSkills: SSkillsService, private activatedRouter: ActivatedRoute, private router:Router){
  }


  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkills.detail(id).subscribe( data =>{
      this.ski = data;
    }, err =>{
      alert("Error al editar");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkills.update(id, this.ski).subscribe(data => {
      this.router.navigate(['']);
    }, err =>{
      alert("Error al editar skill");
      this.router.navigate(['']);
    }
    )
  }
}
