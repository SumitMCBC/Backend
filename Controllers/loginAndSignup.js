const DB = require("../db")

const login = async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        // console.log(req.body)
        DB.query(`select * from users where user_email = '${email}'`,(err,result)=>{
            console.log(result)
            if (result && result.length > 0) {
                const databasePassword = result[0].user_password;
                if(password==databasePassword){
                    // console.log(result)
                    res.status(200).json({
                        error : false,
                        data : result
                    })
                }else{
                    res.status(401).json({
                        error : true,
                        message : "Invalid Login credentials"
                    })
                }
            }else {
                // console.log(result)
                res.json({ 
                    error : true ,
                    message: "User does not exit Please signup." 
                });
            }
        })
    } catch (error) {
        res.status(404).json({message : "server error"});
    }
}

const signUp = async (req,res)=>{
    try {
        const userName = req.body.username;
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        const userPhone = req.body.phone;
        const userrole = req.body.role
        // console.log(req.body)

        const query = `INSERT INTO users (user_email,user_name, user_password, phone_number, role, isok) VALUES 
                                        ('${userEmail}', '${userName}','${userPassword}','${userPhone}','${userrole}',false)`;

        DB.query(query, (err, result) => {
        if (err) {
            // Check if it's a duplicate key error
            if (err.code === "ER_DUP_ENTRY") {
                res.status(400).json({ 
                    error : true,
                    message: "User already exist" 
                });
            } else {
                // Handle other database errors
                // console.log(err)
                // console.log(err)
                res.status(500).json({ 
                    error : true,
                    err : err,
                    message: "Database error" 
                });
            }
            return;
        }
            // User record created successfully
            res.status(201).json({ 
                error : false,
                message: "User created" 
            });
        });
    } catch (error) {
        // console.log(error)
        res.status(404).json({
            error : true,
            message : "server error"
        })
    }
}



module.exports = {login, signUp}