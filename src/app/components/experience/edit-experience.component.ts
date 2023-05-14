import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent {
  expLab: Experience = undefined;
  constructor(private sExperience: SExperienciaService, private activatedRouter: ActivatedRoute, private router:Router){
  }


  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperience.detail(id).subscribe( data =>{
      this.expLab = data;
    }, err =>{
      alert("Error al editar");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperience.update(id, this.expLab).subscribe(data => {
      this.router.navigate(['']);
    }, err =>{
      alert("Error al editar experiencia");
      this.router.navigate(['']);
    }
    )
  }


  editar: boolean | true;
  editando: boolean | undefined;

  cancelarEdicion(){
    this.editar = false;
  }
}
