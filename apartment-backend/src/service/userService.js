import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise'

const bluebird = require('bluebird');


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
// //   password : 'secret',
//   database: 'apartment2'
// });
 
const salt = bcrypt.genSaltSync(10);
const hashPassWord =(userPassword)=>{
    let hashPassWord = bcrypt.hashSync(userPassword, salt);
    return hashPassWord;
}
const createNewUser =async (email, username, password, type )=> {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'apartment2', Promise: bluebird});
    let hashPass = hashPassWord(password)
    try {
        const [rows, fields] = await connection.execute('insert into user (email, username, password, type) values(?,?,?,?)', [email, username, hashPass, type]);
       
        return rows
      
    } catch (error) {
        console.log("check log", error)
    }
    
  
}
const getUserList =async() => {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'apartment2', Promise: bluebird});
    let users =[];

try {
    const [rows, fields] = await connection.execute('SELECT * FROM `user` ');
    return rows
} catch (error) {
    console.log("loggggggggg",error)
}

// const deleteUser = async () => {
//     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'apartment2', Promise: bluebird});
//     try {
//         const [rows, fields] = await connection.execute('DELETE FROM user WHERE id='<%= %>';');
//     } catch (error) {
        
//     }

// }

}
module.exports ={
    createNewUser, getUserList
}