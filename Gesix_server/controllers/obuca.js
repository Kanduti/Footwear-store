const { request } = require('express');
const con = require('../mySqlDb')
const obucaRouter = require('express').Router()
//const app = require('../App')




obucaRouter.get('', (request,response) => {
  con.query('SELECT * FROM obuca', (err, rows)=>
  {
    if(err) throw err;
    response.json(rows);
  })}
)

obucaRouter.get('/women/patike', (request, response) => {

     con.query('SELECT * FROM patike WHERE Uzrast LIKE \'%Z%\' ', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
     
 
})


obucaRouter.get('/women/cipele', (request, response) => {

     con.query('SELECT * FROM cipele WHERE Uzrast LIKE \'%Z%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
      
 
})

obucaRouter.get('/women/papuce', (request, response) => {

     con.query('SELECT * FROM papuce  WHERE Uzrast LIKE \'%Z%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
   
})

obucaRouter.get('/women/cizme', (request, response) => {

     con.query('SELECT * FROM cizme  WHERE Uzrast LIKE \'%Z%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
    
 
})

obucaRouter.get('/women/sandale', (request, response) => {

     con.query('SELECT * FROM sandale WHERE Uzrast LIKE \'%Z%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
     
 
})

obucaRouter.get('/women/stikle', (request, response) => {

     con.query('SELECT * FROM konacnabaza.obuca WHERE Vrsta = stikle AND  LIKE \'%Z%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
      
 
})
obucaRouter.get('/man/patike', (request, response) => {

     con.query('SELECT * FROM patike WHERE Uzrast LIKE \'%M%\' ', (err,rows) => {
        if(err) {console.log('error is due to con query');throw err;}
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
     
 
})


obucaRouter.get('/man/cipele', (request, response) => {

     con.query('SELECT * FROM cipele WHERE Uzrast LIKE \'%M%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
      
 
})

obucaRouter.get('/man/papuce', (request, response) => {

     con.query('SELECT * FROM papuce  WHERE Uzrast LIKE \'%M%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
   
})

obucaRouter.get('/man/cizme', (request, response) => {

     con.query('SELECT * FROM cizme  WHERE Uzrast LIKE \'%M%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
    
 
})

obucaRouter.get('/man/sandale', (request, response) => {

     con.query('SELECT * FROM sandale WHERE Uzrast LIKE \'%M%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
     
 
})

obucaRouter.get('/kids/patike', (request, response) => {

     con.query('SELECT * FROM patike WHERE Uzrast LIKE \'%D%\' ', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
     
 
})


obucaRouter.get('/kids/cipele', (request, response) => {

     con.query('SELECT * FROM cipele WHERE Uzrast LIKE \'%D%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
      
 
})

obucaRouter.get('/kids/papuce', (request, response) => {

     con.query('SELECT * FROM papuce  WHERE Uzrast LIKE \'%D%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
   
})

obucaRouter.get('/kids/cizme', (request, response) => {

     con.query('SELECT * FROM cizme  WHERE Uzrast LIKE \'%D%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
    
 
})

obucaRouter.get('/kids/sandale', (request, response) => {

     con.query('SELECT * FROM sandale WHERE Uzrast LIKE \'%D%\'', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:');
        console.log(rows);
        response.json(rows)
      });
     
 
})


obucaRouter.get('/sale/patike', (request, response) => {

  con.query('SELECT * FROM patike  ', (err,rows) => {
     if(err) throw err;
   
     console.log('Data received from Db:');
     console.log(rows);
     response.json(rows)
   });
  

})


obucaRouter.get('/sale/cipele', (request, response) => {

  con.query('SELECT * FROM cipele ', (err,rows) => {
     if(err) throw err;
   
     console.log('Data received from Db:');
     console.log(rows);
     response.json(rows)
   });
   

})

obucaRouter.get('/sale/papuce', (request, response) => {

  con.query('SELECT * FROM papuce  ', (err,rows) => {
     if(err) throw err;
   
     console.log('Data received from Db:');
     console.log(rows);
     response.json(rows)
   });

})

obucaRouter.get('/sale/cizme', (request, response) => {

  con.query('SELECT * FROM cizme  ', (err,rows) => {
     if(err) throw err;
   
     console.log('Data received from Db:');
     console.log(rows);
     response.json(rows)
   });
 

})

obucaRouter.get('/sale/sandale', (request, response) => {

  con.query('SELECT * FROM sandale ', (err,rows) => {
     if(err) throw err;
   
     console.log('Data received from Db:');
     console.log(rows);
     response.json(rows)
   });
  

  })

module.exports = obucaRouter