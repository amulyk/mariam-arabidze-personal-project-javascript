export class SubjectsModel {
    constructor(subject) {
        this.id = Math.floor((Math.random() * 1000) + 1);
        var title = subject.title;
        var lessons = subject.lessons;
        var description = subject.description
        this.subject = {
            title,
            lessons,
            description
        }
    }

}


