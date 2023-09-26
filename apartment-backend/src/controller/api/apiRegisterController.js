import validator from 'validator';
import {check,validationResult } from 'express-validator'
import loginRegisterService from '../../service/loginRegisterService'


const handelRegister= async (req, res)=>{
    try {
        
        if (validator.isEmpty(req.body.email) || validator.isEmpty(req.body.username) || validator.isEmpty(req.body.phone) ||validator.isEmpty(req.body.password)){
            return res.status(200).json({
                EM:"lỗi thiếu dữ liệu", 
                EC: '1',
                DT: '',
            })
        }
        if(!validator.isEmail(req.body.email)){
            return res.status(200).json({
                EM:"email không đúng", 
                EC: '1',
                DT: '',
            })
        }
        if(!validator.isStrongPassword(req.body.password)){
            return res.status(200).json({
                EM:"password không đủ mạnh", 
                EC: '1',
                DT: '',
            })
        }
        
        //create User
        let data = await loginRegisterService.registerNewUser(req.body)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: '',
        })
    } catch (error) {
        return res.status(500).json({
            EM: "lỗi từ server",
            EC: "-1",
            DT:"",
        })
    }
    
}
module.exports ={
    handelRegister
}