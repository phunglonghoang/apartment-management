import db from "../models/index"
import bcrypt from 'bcryptjs';
 
const salt = bcrypt.genSaltSync(10);
const hashUserPassWord =(userPassword)=>{
    let hashPassWord = bcrypt.hashSync(userPassword, salt);
    return hashPassWord;
}
const checkEmailExist = async(userEmail) =>{
    let users = await db.User.findOne({
        where: {
            email: userEmail
        }
    })
    if (users){return true};
    return false;
}
const checkPhoneExist = async(userPhone) =>{
    let users = await db.User.findOne({
        where: {
            phone: userPhone
        }
    })
    if (users){return true};
    return false;
}
const checkUserNameExist = async(userName) =>{
    let users = await db.User.findOne({
        where: {
            username: userName
        }
    })
    if (users){return true};
    return false;
}

const registerNewUser =async (rawUserData) => {
    //check email, sdt, username đã tồn tại hay chưa
   try {
    let isEmailExist = await checkEmailExist(rawUserData.email);
    if (isEmailExist === true){
        return {
            EM: 'email đã tồn tại',
            EC: 1,

        }
    }
    let isPhoneExist =await  checkPhoneExist(rawUserData.phone);
    if (isPhoneExist === true){
        return {
            EM: 'sđt đã tồn tại',
            EC: 1,
            
        }
    }
    let isUserNameExist =  await checkUserNameExist(rawUserData.username);
    if (isUserNameExist === true){
        
        return {
            EM: 'username đã tồn tại',
            EC: 1,
            
        }
    }
    //hash password
    let hashPassWord = hashUserPassWord(rawUserData.password)
    //create new user
    await db.User.create({
        email: rawUserData.email,
        username: rawUserData.username,
        phone: rawUserData.phone,
        password:hashPassWord,
        firstName: rawUserData.firstName,
        lastName: rawUserData.lastName,
        room: rawUserData.room,
        birthDay:rawUserData.birthDay,
        sex:rawUserData.sex,
        
        joinDate: rawUserData.joinDate,
    })
    return {
        EM: 'đã tạo user thành công',
        EC: 0
        
    }
   } catch (error) {
    console.log(">>>>> lỗi ", error)
    return {
        EM:'đã xảy ra lỗi',
        EC:-2 
    }
   }
    
}

module.exports ={
    registerNewUser,checkEmailExist,checkUserNameExist,checkPhoneExist
}