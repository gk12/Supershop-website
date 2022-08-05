class ApiFeatures{
    constructor(query,queryStr)
    {
        this.query=query;
        this.queryStr=queryStr;
    }


//searching with the help of keyword
search(){
    const keyword=this.queryStr.keyword?
    {
        name:{
            $regex:this.queryStr.keyword,
            $options:"i",
        },
    }
    :{};
    this.query=this.query.find({...keyword});
    return this;
}
}

module.exports=ApiFeatures;