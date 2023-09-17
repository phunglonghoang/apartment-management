import userService from '../../service/userService';

const handelUserPage =  async(req, res) => {
    let userList = await userService.getUserList();
    await userService.deleteUser( req.params.id);
    return res.render("usersHome.ejs", {userList} )
}
const handleCreateUser =async(req, res) => {
    let email =req.body.email;
    let username =req.body.username;
    let password = req.body.password;
    let acc_type =req.body.acc_type;
    // console.log("check user", userList)
    userService.createNewUser(email ,username, password, acc_type) 
    
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
    if(user && user.length >0){
        userData = user [0];
    }
 
   return res.render("editUser.ejs", {userData });
}
const handelUpdateUser = async (req, res)=>{
    let email =req.body.email;
    let username =req.body.username;
    // let password = req.body.password;
    let acc_type =req.body.acc_type;
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