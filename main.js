const low = require('lowdb')  // lowdb module 을 nodejs에 설치한다
const FileSync = require('lowdb/adapters/FileSync') // 데이터를 저장하는 방식에 따라서 가지고 와야 할 모듈이 달라진다.(파일의 동기 방식으로 저장)
const adapter = new FileSync('db.json') // 데이터를 db.json 이라는 파일에 JSON 의 형식에 따라서 저장
const db = low(adapter) // 동기방식으로 저장..? db라는 변수를 통해서 lowdb를 제어할 수 있다.

var shortid = require('shortid'); // id값을 부여하기 위한 모듈 

db.defaults({ topic: [], author: []}).write();
// db.get('author').push({
//     id: 1,
//     name: 'Hong',
//     profile: 'developer'
// }).write();

// db.get('topic').push({
//     id: 1,
//     title: 'lowdb',
//     description: 'lowdb is...',
//     author: 1
// }).write();

// db.get('topic').push({
//     id: 2,
//     title: 'mysql',
//     description: 'mysql is...',
//     author: 1
// }).write();

// console.log(db.get('topic').value());

// console.log(db.get('topic')
//             .find({title:'lowdb'})
//             .value()
// );

// .sortBy('view')   .map('title')   . size() 등 다양한 메소드가 존재한다

// console.log(db.get('topic')
//             .find({title:'lowdb', author: 1})
//             .value()
// );

// db.get('topic')
//     .find({id: 2})
//     .assign({title: 'MySQL & MariaDB'})
//     .write();

// db.get('topic')
//     .remove({id: 2})
//     .write();

var sid = shortid.generate()
db.get('author') 
    .push({
        id: sid,
        name: 'Jung',
        profile: 'data scientist'
    }).write();
db.get('topic')
    .push({
        id: shortid.generate(),
        title: 'PostgreSQL',
        description: 'PostgreSQL is...',
        author: sid
    }).write();