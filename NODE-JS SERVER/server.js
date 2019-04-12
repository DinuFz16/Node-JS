const http = require('http');
const spliturl = require('./lib/spliturl');



const server = http.createServer((req,res)=>
{
    const url = spliturl.fetch(req.url);  // sending url to that method 
    
   // console.log("server "+req.url);  // once the url has been splited call the class next 

    try
    {
        

        const controllers = require('./controller/'+url.controllername);

        console.log( "conerr"+controllers);

        const init=  new controllers(
            {
                req: req,
                res: res,
                url: url
            }
        );

        init[url.action]();

        
    }catch(err)
    {
        res.writeHead(500);
        res.end();
        console.log(err);

    }


    
    
    
});

server.listen('8085',()=>
{
    console.log("Server Started and running in Port:8085")
});

