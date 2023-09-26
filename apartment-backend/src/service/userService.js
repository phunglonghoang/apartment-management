import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise'
import { where } from 'sequelize';

import db from '../models/index.js'


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',

  database: 'apartment'
});
 
const salt = bcrypt.genSaltSync(10);
const hashPassWord =(userPassword)=>{
    let hashPassWord = bcrypt.hashSync(userPassword, salt);
    return hashPassWord;
}
//hàm tạo user
const createNewUser =async (email, username, password,firstName,lastName,room,birthDay,sex,phone,joinDate )=> {
  
    let hashPass = hashPassWord(password)
    try {
        await db.User.create({
            email: email,
            username: username,
            password:hashPass,
            firstName: firstName,
            lastName: lastName,
            room: room,
            birthDay:birthDay,
            sex:sex,
            phone: phone,
            joinDate: joinDate,

        })
    } catch (error) {
        console.log("check log", error)
    }
    
  
}
//hàm lấy user
const getUserList =async() => {
   //test relationship
   let user =await db.User.findOne({
    where: {id: 2},
    attributes: ["id", "username"],
    include :{model: db.Group,attributes: ["id", "name"], } ,
    raw :true,
    nest: true
   })
   console.log(">>check relationship", user)

   //test lấy rel quyền
   let r = await db.Role.findAll({
    attributes: ["id", "url"],
    include: {
        model: db.Group, 
        where : {id: 2,},
        attributes: ["id", "name"]
    },
    raw: true,
    nest: true
   })
   console.log("check role gruop ", r)

   //lấy user
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
const UpDateUser = async( email, username,  firstname,lastname,phone,id) =>{
   
try {
   await db.User.update(
    {
        email:email, username:username, firstname:firstname, lastname:lastname, phone:phone
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