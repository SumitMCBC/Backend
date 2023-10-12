const DB = require("../../db");
const bodyParser = require('body-parser');


const getabout = async (req, res) => {
  try {
    const restaurant_id = req.body.restaurant_id;
    DB.query(`SELECT * FROM restaurant WHERE restaurant_id = '${restaurant_id}'`, (error, result) => {
      if (error) {
        res.status(400).json({
          error: true,
          message: "database error",
        });
      } else {
        if (result.length > 0) {
          const restaurant = result[0];// Access the first item in the result array
          res.status(200).json({
            error: false,
            data: restaurant,
          });
        } else {
          res.status(200).json({
            error: false,
            data: null, // Return null if no restaurant found
          });
        }
      }
    });

  } catch (error) {
    res.status(404).json({
      error: true,
      message: "server error"
    })
  }
}
const getaboutupdate = async (req, res) => {
  try {
    const aboutus = req.body.abouttext;
    const restaurant_id = req.body.restaurant_id;
    // console.log(aboutus)

    DB.query(
      `UPDATE restaurant
      SET about_us = '${aboutus}'
      WHERE restaurant_id = '${restaurant_id}';`,
      (error, result) => {
        if (error) {
          res.status(400).json({
            error: true,
            message: "database error",
          });
        } else {
          res.status(200).json({
            error: false,
            message: "updated successfully",
          });
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

const getfeatureupdate = async (req, res) => {
  try {
    const feat = req.body.featur;
    const jsonfeat = JSON.stringify(feat);
    restaurant_id = req.body.restaurant_id;
    // console.log(jsonfeat)


    DB.query(
      `UPDATE restaurant
      SET features = '${jsonfeat}'
      WHERE restaurant_id = '${restaurant_id}';`,
      (error, result) => {
        if (error) {
          res.status(400).json({
            error: true,
            message: "database error",
          });
        } else {
          res.status(200).json({
            error: false,
            message: "updated successfully",
          });
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

const getitemupdate = async (req, res) => {
  try {
    const items = req.body.item;
    const jsonitems = JSON.stringify(items);
    const restaurant_id = req.body.restaurant_id;
    // console.log(jsonitems)


    DB.query(
      `UPDATE restaurant
      SET items = '${jsonitems}'
      WHERE restaurant_id = '${restaurant_id}';`,
      (error, result) => {
        if (error) {
          res.status(400).json({
            error: true,
            message: "database error",
          });
        } else {
          res.status(200).json({
            error: false,
            message: "updated successfully",
          });
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

  const getimageupdate = async (req, res) => {
    try {
      const images = req.body.image;
      const jsonimages = JSON.stringify(images);
      const restaurant_id = req.body.restaurant_id;
      // console.log(jsonitems)


      DB.query(
        `UPDATE restaurant
        SET image = '${jsonimages}'
        WHERE restaurant_id = '${restaurant_id}';`,
        (error, result) => {
          if (error) {
            res.status(400).json({
              error: true,
              message: "database error",
            });
          } else {
            res.status(200).json({
              error: false,
              message: "updated successfully",
            });
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

  
  
  module.exports = { getabout, getaboutupdate, getfeatureupdate, getitemupdate, getimageupdate };