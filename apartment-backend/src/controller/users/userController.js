import userService from '../../service/userService';
const handelUserPage =  async(req, res) => {

    //truyền dạng oject {}
    let userList= await userService.getUserList();
    console.log("check user", userList)
    return res.render("usersHome.ejs",{userList})
}
const handleCreateUser =async(req, res) => {
    let email =req.body.email;
    let username =req.body.username;
    let password = req.body.password;
    let type =req.body.type;
    userService.createNewUser(email ,username, password, type) 
    
    return res.redirect("/users/user-list")
}


module.exports ={ 
    handelUserPage, handleCreateUser
}