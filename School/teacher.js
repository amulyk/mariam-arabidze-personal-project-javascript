class SubjectsModel{
    constructor({title, lessons, description=null}){
    this.title=title;
    this.lessons=lessons;
    this.description=description;
    this.id=Math.floor((Math.random() * 10) + 1);
    //this description=description;
    }



      
}

const history=new SubjectsModel(
    {
        title:'history',
        lessons:'24',
        description:'kkk'
    }
    
)


const history2=new SubjectsModel(
    {
        title:'history',
        lessons:'24',
       
    }
)

console.log(history.description)