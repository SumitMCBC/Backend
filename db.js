const { json } = require("body-parser");
require('dotenv').config()
const mysql = require('mysql2')
const pool = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')





// let sql = `create table reviews(
//   restaurant_id int,
//   review varchar(1000)
// );`
// let items = ["roti","sabji"]
//   const jsonString = JSON.stringify(items);
//   let sql=`INSERT INTO orders (date, restaurant_name, location, total_spent, user_email, restaurant_id, items) 
//   VALUES ('2023-06-14 7:14', 'gadad', 'ramgard', 40, 'nav@123', 1, '${jsonString}');
//   `
// date, restaurant_name, location, total_spent, user_email, restaurant_id, items
// let sql=`create table orders (
//   order_id int auto_increment primary key,
//   date datetime,
//   restaurant_name varchar(100),
//   location varchar(200),
//   total_spent int,
//   user_email varchar(100),
//   restaurant_id int,
//   items varchar(1000)
// );`



// let sql =`CREATE TABLE users (
//   user_email VARCHAR(100) UNIQUE,
//   user_name VARCHAR(100),
//   user_password VARCHAR(100),
//   phone_number VARCHAR(15),
//   role VARCHAR(40),
//   isok BOOLEAN,
//   myrestaurant_id INT AUTO_INCREMENT PRIMARY KEY
// );
// `
// let sql = `CREATE TABLE restaurant (
//     restaurant_id INT unique,
//     restaurant_name VARCHAR(50),
//     opening_time TIME,
//     closing_time TIME,
//     available_seats VARCHAR(80),
//     address VARCHAR(80),
//     longitude DECIMAL(10,4),
//     latiude DECIMAL(10,4),
//     about_us VARCHAR(300),
//     features VARCHAR(500),
//     items VARCHAR(1000),
//     image VARCHAR(1000)
//   );`
// const sql = `INSERT INTO users (user_email,user_name, user_password, phone_number, role, isok) VALUES 
//                                         ('ved@gmail.com', 'ved prakash','123','98985659','manager',false)`;


// // let sql=`insert into users set (user_email,user_name,password,phone_number,manager,isok) values ("ved@gmail.com",)`
// let sql = `insert into reviews  (restaurant_id) values (1) ;`

// pool.query(sql,(err)=>{
//     if(err) throw err
//     console.log("Inserted into Table")
//   })





// pool.release()




// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     return;
//   }
//   console.log("Connected to the database");


  


//   // let sql = `update restaurant set restaurant_id =12 where restaurant_name = "LLRKharagpur";`
//   // let sql = `create table reviews(
//   //   restaurant_id int primary key,
//   //   review varchar(2000)
//   // );`

//   // const review = [
//   //   {
//   //     author: 'John Doe',
//   //     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac turpis non dolor dignissim accumsan. Nulla facilisi. Sed euismod justo vel aliquet finibus.',
//   //   },
//   //   {
//   //     author: 'Jane Smith',
//   //     review: 'Suspendisse potenti. In iaculis nulla in metus commodo, sit amet congue leo blandit. Sed a felis gravida, mattis nisi eget, venenatis erat.',
//   //   },
//   //   {
//   //     author: 'David Johnson',
//   //     review: 'Curabitur ac ligula nec lorem efficitur vulputate. Integer vitae ultrices mauris. Aliquam sodales ipsum ut malesuada pellentesque.',
//   //   },
//   // ];

//   // const jsonreview = JSON.stringify(review);
//   // let sql =`insert into reviews (restaurant_id,review) values (3,'${jsonreview}');`


  // const av = [{
  //   '10:00 AM': 12,
  //   '12:00 PM': 0,
  //   '2:00 PM': 13,
  //   '4:00 PM': 14
  // }];

//   // const feat = [
//   //   {
//   //     icon: 'fa fa-motorcycle fa-4x',
//   //     title: 'Home Delivery',
//   //     description: 'Enjoy the convenience of home delivery service.',
//   //   },
//   //   {
//   //     icon: 'fa fa-smoking fa-4x',
//   //     title: 'Smoking Area',
//   //     description: 'Designated smoking area available for smokers.',
//   //   },
//   //   {
//   //     icon: 'fa fa-snowflake fa-4x',
//   //     title: 'Air Condition',
//   //     description: 'Relax and dine in a comfortable air-conditioned environment.',
//   //   }
//   // ];

//   // const itm = [
//   //   {
//   //     name: 'Chicken Masala',
//   //     price: 12,
//   //     ingredients: ['Chicken', 'Masala', 'Onions', 'Tomatoes'],
//   //   },
//   //   {
//   //     name: 'Butter Paneer',
//   //     price: 10,
//   //     ingredients: ['Paneer', 'Butter', 'Cream', 'Spices'],
//   //   },
//   //   {
//   //     name: 'Pasta Alfredo',
//   //     price: 14,
//   //     ingredients: ['Pasta', 'Alfredo Sauce', 'Garlic', 'Parmesan'],
//   //   }
//   // ];

//   // const img = [
//   //   { url: './images/food1.jpg', alt: 'Image 1' },
//   //   { url: './images/food2.jpg', alt: 'Image 2' },
//   //   { url: './images/food3.jpg', alt: 'Image 3' },
//   // ];

  // const jsonav = JSON.stringify(av);
//   // const jsonfeat = JSON.stringify(feat);
//   // const jsonitm = JSON.stringify(itm);
//   // const jsonimg = JSON.stringify(img);

  // let sql = `INSERT INTO restaurant (restaurant_name, opening_time, closing_time, available_seats, address, latiude, longitude, about_us, features, items, image)
  // VALUES ('LLRKharagpur', '10:40AM', '08:30PM', '${jsonav}', 'nehru hall of residence', 22.3214, 87.3028, 'bohot bahiyaad hotel', '${jsonfeat}', '${jsonitm}', '${jsonimg}');
  // `


// 
  // let sql = `UPDATE restaurant
  //          SET available_seats = '${jsonav}'
  //          WHERE restaurant_id = 4 ;
  //         `;



  // let sql = `CREATE TABLE restaurant (
  //   restaurant_id INT unique,
  //   restaurant_name VARCHAR(50),
  //   opening_time TIME,
  //   closing_time TIME,
  //   available_seats VARCHAR(80),
  //   address VARCHAR(80),
  //   longitude DECIMAL(10,4),
  //   latiude DECIMAL(10,4),
  //   about_us VARCHAR(300),
  //   features VARCHAR(500),
  //   items VARCHAR(1000),
  //   image VARCHAR(1000)
  // );`

//   // let items = ["roti","sabji"]
//   // const jsonString = JSON.stringify(items);
//   // let sql=`INSERT INTO orders (date, restaurant_name, location, total_spent, user_email, restaurant_id, items) 
//   // VALUES ('2023-06-14 7:14PM', 'apna Restaurant', 'ramgard', 40, 'vedprakash@gmail.com', 3, '${jsonString}');
//   // `

  // pool.query(sql,(err)=>{
  //   if(err) throw err
  //   console.log("Inserted into Table")
  // })

//   connection.release(); // Release the connection back to the pool
// });

module.exports = pool
