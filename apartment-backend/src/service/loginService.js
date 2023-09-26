import db from "../models/index"
import bcrypt from 'bcryptjs';
const { Op } = require("sequelize");
 
const salt = bcrypt.genSaltSync(10);
const hashUserPassWord =(userPassword)=>{
    let hashPassWord = bcrypt.hashSync(userPassword, salt);
    return hashPassWord;
}
const checkPassword = (inputPassword, hashPassWord)=> {
   return bcrypt.compareSync(inputPassword, hashPassWord);
}
const handleUserLogin = async(rawData) =>{
    try {
        let user = await db.User.findOne({
            where:{
                [Op.or ]: [
                    {  email: rawData.valueLogin },
                    { phone: rawData.valueLogin,},
                    {username: rawData.valueLogin}
                ]
            }
        })
        if (user){
            
            let isCorrectPassword = checkPassword(rawData.password, user.password);
            if (isCorrectPassword===true){
                return {
                    EM: 'pw oke',
                    EC :'0',
                    DT: ''
                }
            }
        }
       
           
            return {
                EM:'email/SĐT/username hoặc password không đúng ',
                EC:-2 
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
    handleUserLogin
}