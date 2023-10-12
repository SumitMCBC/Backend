const DB = require("../db");

const getprofile = async (req, res) => {
  try {
    const email = req.body.emailid;
    const query1 = new Promise((resolve, reject) => {
      DB.query(
        `SELECT COUNT(order_id) AS count_value, SUM(total_spent) AS sum_value FROM orders WHERE user_email = '${email}'`,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });

    const query2 = new Promise((resolve, reject) => {
      DB.query(
        `SELECT user_name, phone_number FROM users WHERE user_email = '${email}'`,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });

    const [data1, data2] = await Promise.all([query1, query2]);

    
    res.status(200).json({
      error: false,
      data1: data1,
      data2: data2,
    });
  } catch (error) {
    // console.error(error);
    res.status(404).json({
      error: true,
      message: "server error",
    });
  }
};

const getprofileupdate = async(req,res)=>{

    try {
        const email = req.body.email;
        const phonenumber = req.body.phone;
        const name = req.body.username;
        
        DB.query(`UPDATE users
        SET user_name = '${name}', user_email = '${email}', phone_number = '${phonenumber}'
        WHERE user_email = '${email}';
        `, (error, result)=>{
            // console.log(e)
            if(error){
                res.status(400).json({
                    error : true,
                    message : "database error",
                })
            }else{
                res.status(200).json({
                    error : false,
                    message : "updated successfully"
                })
            }
        })
        
    } catch (error) {
        res.status(404).json({
            error : true,
            message : "server error"
        })
    }
}

module.exports = {getprofile,getprofileupdate};
