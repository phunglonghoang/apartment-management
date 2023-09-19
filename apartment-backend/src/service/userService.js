import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise'

const bluebird = require('bluebird');
import db from '../models/index.js'


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
  
    let hashPass = hashPassWord(password)
    try {
        await db.User.create({
            email: email,
            username: username,
            password:hashPass,
            acc_type:acc_type
        })
    } catch (error) {
        console.log("check log", error)
    }
    
  
}
//hàm lấy user
const getUserList =async() => {
   

try {
    let users=[];
    users= await db.User.findAll();
    return users;
} catch (error) {
    console.log("loggggggggg",error)
}


}
//hàm xóa user
const deleteUser = async(id) => {
   
try {
    await db.User.destroy({
        where: {id:id}
    }) 
} catch (error) {
    console.log("loggggggggg",error)
}
}
// lấy thông tin user theo id
const getUserById = async(id) =>{
    
try {
    let user=[];
    user = await db.User.findOne({
        where :{id: id}
        
    })
    return user;
} catch (error) {
    console.log("loggggggggg",error)
}
}
//update User
const UpDateUser = async( email, username,  acc_type,id) =>{
   
try {
   await db.User.update(
    {
        email:email, username:username
    },
    {where: {id:id}}
   )
} catch (error) {
    console.log("loggggggggg",error)
}
}

module.exports ={
    createNewUser, getUserList,deleteUser,
    getUserById,
    UpDateUser
}