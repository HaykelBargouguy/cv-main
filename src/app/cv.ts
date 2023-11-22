
export class Cv {
  id :number=1;
  name:string = 'BARGOUGUI';
  firstname:string = 'HAYKEL';
  age:number =22;
  CIN:any = "116****8";
  job:string = 'student';
  path:string= 'assets/images/rotating_card_profile2.png';

  constructor(id : number, name: string , firstname: string , age: number , CIN: number , job: string , path: string ) {
      this.id=id ;
      this.name = name ;
      this.firstname = firstname;
      this.age = age;
      this.CIN = CIN;
      this.job = job;
      this.path = path;

  }
}