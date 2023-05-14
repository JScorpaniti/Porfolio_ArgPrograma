export class Education {
    id?:number;
    school: string;
    career: string;

    constructor(school:string, career:string) {
        this.school = school;
        this.career = career;
    }
}
