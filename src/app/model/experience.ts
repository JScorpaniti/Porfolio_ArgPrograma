export class Experience {
    id?: number;
    empresa: string;
    tarea: string;

    constructor(empresa: string, tarea:string){
        this.empresa = empresa;
        this.tarea = tarea;
    }
}
