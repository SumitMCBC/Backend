const DB = require("../../db");

const addRestaurant = async(req,res)=>{
    try {
      
        const restaurantid = req.body.myrestaurant_id;
        // console.log("okkkk")
        // console.log(restaurantid);
        const name = req.body.restaurantData.name;
        const openingTime = req.body.restaurantData.openingTime;
        const closingTime = req.body.restaurantData.closingTime;
        const latitude = req.body.restaurantData.latitude;
        const longitude = req.body.restaurantData.longitude;
        const address = req.body.restaurantData.address;
        const images = req.body.restaurantData.images;
        const jsonimages = JSON.stringify(images);

        // console.log(req.body.restaurantData)

        DB.query(
          `INSERT INTO reviews (restaurant_id )
          VALUES ('${restaurantid}');
          `,
          (error, result) => {
            if (error) {
              // console.log(error)
              res.status(400).json({

                error: true,
                message: "database error",
              });
            } else {
              // console.log("hello")
              res.status(200).json({
                error: false,
                message: "updated successfully",
              });
            }
          }
        );

        DB.query(
            `INSERT INTO restaurant (restaurant_id, restaurant_name, opening_time, closing_time, latiude, longitude, address, image)
            VALUES ('${restaurantid}', '${name}', '${openingTime}', '${closingTime}', '${latitude}', '${longitude}', '${address}', '${jsonimages}');
            `,
            (error, result) => {
              if (error) {
                // console.log(error)
                res.status(400).json({

                  error: true,
                  message: "database error",
                });
              } else {
                // console.log("hello")
                res.status(200).json({
                  error: false,
                  message: "updated successfully",
                });
              }
            }
          );



        
    } catch (error) {
      // console.log(error);
        res.status(404).json({
            error : true,
            message : "server error"
        })
    }
}


const isAdded = async (req, res) => {
    try {
      const restaurantid = req.body.myrestaurant_id;
        // console.log("ooo")
      DB.query(
        `SELECT restaurant_id
        FROM restaurant
        WHERE restaurant_id = '${restaurantid}';`,
        (error, result) => {
          if (error) {
            res.status(400).json({
              error: true,
              message: "database error",
            });
            
          } else {
            const isPresent = result.length > 0; // Check if any rows were returned
            if(result.length>0){
              res.status(200).json({
                error : false,
                isAdded : true
              })
            }else{
              res.status(200).json({
                error : false,
                isAdded : false
              })
            }
          }
        }
      );
    } catch (error) {
      res.status(404).json({
        error: true,
        message: "server error",
      });
    }
  };
  
module.exports  = {addRestaurant,isAdded};