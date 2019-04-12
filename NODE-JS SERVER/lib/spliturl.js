module.exports = {

    fetch:function(requrl='')
    {
        try{
            

            let urlsplit = requrl.split('/'); // capture url 

            const controller =urlsplit[1];  // capture controller name 

            const funcname = urlsplit[2] // capture funt name 

            const router = {controllername :controller+'controller', action : funcname }; 

            console.log(router);



            return router;   // returns the whole ans 
            

        }catch(err)
        {
            console.log(err);
        }

    }
}