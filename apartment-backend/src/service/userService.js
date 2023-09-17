import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise'

const bluebird = require('bluebird');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
//   password : 'secret',
  database: 'apartment2'
});
 
const salt = bcrypt.genSaltSync(10);
const hashPassWord =(userPassword)=>{
    let hashPassWord = bcrypt.hashSync(userPassword, salt);
    return hashPassWord;
}
//hàm tạo user
const createNewUser =async (email, username, password,acc_type )=> {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'apartment2', Promise: bluebird});
    let hashPass = hashPassWord(password)
    try {
        const [rows, fields] = await connection.execute('insert into users (email, username, password,acc_type) values(?,?,?,?)', [email, username, hashPass,acc_type]);
       
        return rows
      
    } catch (error) {
        console.log("check log", error)
    }
    
  
}
//hàm lấy user
const getUserList =async() => {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'apartment2', Promise: bluebird});
try {
    const [rows, fields] = await connection.execute('SELECT * FROM `users` ');
    return rows
} catch (error) {
    console.log("loggggggggg",error)
}


}
//hàm xóa user
const deleteUser = async(id) => {
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'apartment2', Promise: bluebird});
try {
    const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?',[id]);
  
    return rows;
} catch (error) {
    console.log("loggggggggg",error)
}
}
// lấy thông tin user theo id
const getUserById = async(id) =>{
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'apartment2', Promise: bluebird});
try {
    const [rows, fields] = await connection.execute('select * FROM users WHERE id=?',[id]);
  
    return rows;
} catch (error) {
    console.log("loggggggggg",error)
}
}
//update User
const UpDateUser = async( email, username,  acc_type,id) =>{
    const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'apartment2', Promise: bluebird});
try {
    const [rows, fields] = await connection.execute('UPDATE users SET email = ?, username=?, acc_type=? WHERE id = ?',
    [email, username,  acc_type, id]);
    return rows;
} catch (error) {
    console.log("loggggggggg",error)
}
}

module.exports ={
    createNewUser, getUserList,deleteUser,
    getUserById,
    UpDateUser
}