export class Quotes {
    public showDescription:boolean;
        constructor(public id:number,public upVote: number,
            public downVote:number,public description:string,public name:string,public completeDate:Date, public upvote:number,public downvote:number){
          this.showDescription=false;
        }
    
      
    
}
