import userService from '../../service/userService';

const handelUserPage =  async(req, res) => {
    let userList = await userService.getUserList();
    // await userService.deleteUser( req.params.id);
    return res.render("usersHome.ejs", {userList} )
}
const handleCreateUser =async(req, res) => {
    let email =req.body.email;
    let username =req.body.username;
    let password = req.body.password;
    let firstName =req.body.firstName;
    let lastName= req.body.lastName;
    let room = req.body.room;
    let birthDay =req.body.birthDay;
    let sex = req.body.sex;
    let phone = req.body.phone;
    let joinDate = req.body.joinDate;
    // console.log("check user", userList)
    userService.createNewUser(email ,username, password, firstName,lastName,room,birthDay,sex,phone,joinDate) 
    
    return res.redirect ("/users/user-list")
}
const handelDeleteUser =async(req, res)=> {
   await userService.deleteUser(req.params.id);
   return res.redirect("/users/user-list")
}

//handel sửa user
const getEditUserPage = async(req, res ) =>{
    let  id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    userData = user;
 
   return res.render("editUser.ejs", {userData });
}
const handelUpdateUser = async (req, res)=>{
    let email =req.body.email;
    let username =req.body.username;
    // let password = req.body.password;
    
    let id =req.body.id

    await userService.UpDateUser(email, username,  acc_type, id);
    return res.redirect("/users/user-list")
}

module.exports ={ 
    handelUserPage,
    handleCreateUser,
    handelDeleteUser,
    getEditUserPage,
    handelUpdateUser
}