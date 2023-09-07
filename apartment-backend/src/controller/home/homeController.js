const  handleHelloWorld = (req, res) => {
    const name ="thu Hang";
    return res.render("home.ejs", {name})
}

module.exports ={
    handleHelloWorld
}