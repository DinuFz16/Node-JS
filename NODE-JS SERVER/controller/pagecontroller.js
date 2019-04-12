module.exports = class{

    constructor(obj)
    {
        this.write = obj.res;
    }

    product()
    {
        this.write.write("Product page called");
        this.write.end();
        
    }

    login()
    {

        this.write.write("login page called");
        this.write.end();
    }
}