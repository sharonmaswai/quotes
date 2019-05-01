export class Quotes {
    public showDescription:boolean;
        constructor(public id:number,public upVote: number,
            public downVote:number,public name:string,public description:string,public submitter:string){
          this.showDescription=false;
        }
    
      
    
}
