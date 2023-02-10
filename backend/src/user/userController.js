var userService = require('./userService');
 
var getDataConntrollerfn = async (req, res) =>
{
    var user = await userService.getDataFromDBService();
    res.send({ "status": true, "data": user });
}
 
var createUserControllerFn = async (req, res) =>
{
    var status = await userService.createUserDBService(req.body);
    
    if (status) {
        res.status(201).send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
 
var test = async (_req, res) =>
{  
    res.send("sa");
}

var deleteUserController = async (req, res) =>
{
     console.log(req.params.id);
     console.log(req.params.body);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}

module.exports = { getDataConntrollerfn, createUserControllerFn, test , deleteUserController };