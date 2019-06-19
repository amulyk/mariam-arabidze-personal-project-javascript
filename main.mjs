import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel,
} from './school';


(async () => {

    // const history = new SubjectsModel({
    //     title: 'History',
    //     lessons: 25,
       
    // });

    // const math = new SubjectsModel({
    //     title: 'calc-103',
    //     lessons: 50,
    //     description: 'Precalculus'
    // });

    // var historyid = history.id
    // console.log(historyid)
    // const lms = new LMSModel();
    // await lms.add(history);
    // await lms.add(math);
    // await lms.remove(math);
    // console.log(await lms.readAll());


//toTestTeachersModel

    // var teacher_1 = {
    //     "name": {
    //         "first": 'Mark',
    //         "last": "Smith"
    //     },
    //     "image": "kkk",
    //     "dateOfBirth": "15/12/1996",
    //     "emails": [{
    //         "email": "somemail@gmail.com",
    //         "primary": true
    //     }],
    //     "phones": [{
    //         "phone": "555555555",
    //         "primary": true
    //     }],
    //     "sex": "male",
    //     "subjects": [{
    //         "subject": "History"
    //     }],
    //     "description": "tutor",
    // };


    // var teacher_2 = {
    //     "name": {
    //         "first": 'Kate',
    //         "last": "Ronson"
    //     },
    //     "image": "Nopicture",
    //     "dateOfBirth": "12/10/1990",
    //     "emails": [{
    //         "email": "somemail@gmail.com",
    //         "primary": true
    //     }],
    //     "phones": [{
    //         "phone": "555111111",
    //         "primary": true
    //     },
    //     ],
    //     "sex": "female"
    // };

    // var teacherUpdate = {
    //     "name": {
    //         "first": 'Sophie',
    //         "last": "Grey"
    //     },
    //     "phones": [{
    //         "phone": "555101101",
    //         "primary": true
    //     }
    //     ],
    // }


   
    // const teacher = new TeachersModel();
    // var teacherid = await teacher.add(teacherObj);
    // await teacher.update(teacherid, obj)
    // await teacher.read(teacherid)
    // var teacherid = await teacher.add(teacherObj);
    // var result = await teacher.read(teacherid);
    // var update = await teacher.update(teacherid, teacherSecondObject);
    // result = await teacher.read(teacherid);
    // var deletedteacher = await teacher.remove(teacherid);



//  //toTestPupilsModel
    var pupil1 = {
        "name": {
            "first": "kkk",
            "last": "secondname"
        },
        "image": "okok",
        "dateOfBirth": "15/12/1996",
        "phones": [{
            "phone": "577676866",
            "primary": true
        }],
        "sex": 'male',
        "description": "hhhhh",
    }

    var pupil2 = {
        "name": {
            "first": "Mark",
            "last": "Jenner"
        },
        "image": "string",
        "dateOfBirth": "string",
        "phones": [{
            "phone": "string",
            "primary": true
        }],
        "sex": 'male',
        "description": "some pupil",
    }

    // const pupils = new PupilsModel();
    //     var pupilid = await pupils.add(pupil1);
    //     var result = await pupils.read(pupilid);
    //     var update = await pupils.update(pupilid, pupil2);
    //     result = await pupils.read(pupilid);
    //     var deletedpupils = await pupils.remove(pupilid);



// //toTestGroupsModel

//     const room = 236;
//     const groups = new GroupsModel();
//     const groupId = await groups.add(room);
//     await groups.addPupil(groupId, pupilid);
//     await groups.addPupil(groupId, pupilid);
//     await groups.update(groupId, {
//         room: 237
//     })
//     // Checking works or not
//     // console.log(await groups.read(groupId))
//     await groups.readAll()


// //toTestGroupsModel

//    const pupilId = pupilid;
//    const teacherId = teacherid;
//    const gradebooks = new GradebooksModel(groups, teacher, lms);
   
// //    const level = 1;
// //    const gradebookId = await gradebooks.add(level, groupId);
   
// //    await gradebooks.clear();
// //    const teacherrecord = new TeachersModel();
// //    var teacheridrecord = await teacher.add(teacherObj);
// //    const record = {
// //      pupilId: pupilId,
// //      teacherId: teacheridrecord,
// //      subjectId: history.id,
// //      lesson: 1,
// //      mark: 9
// //    };
   
// //    //let recordOut = await gradebooks.addRecord(gradebookId, record);
// //    const oliver = await gradebooks.read(gradebookId, pupilid);
// //    const students = gradebooks.readAll(gradebookId); 


})();