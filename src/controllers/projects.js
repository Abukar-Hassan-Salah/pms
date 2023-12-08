const connectDB = require("../providers/database")

// here we use all our functions
exports.getProjects= async (req,res,next)=>{
   const dbo = await connectDB();
   const projects = await dbo.collection("projects").find({}).toArray();
    return res.json({
            status :"success",
            data : projects
        })
}
// function of get project on single project
exports.getProject = async(req,res,next)=>{
    const {id} = req.params;
    const dbo = await connectDB();
    const project = await dbo.collection("projects").findOne({_id:id});
    return res.json({
        id : req.params,
        message : "Get Single Project Controllers is working fine!"
    })
}
// function of create project
exports.createProject = async (req, res , next)=> {
    const dbo = await connectDB();
    const project = await dbo.collection("projects").insertOne(req.body);
    return res.json({
        status:"success",
        data : result
    })
}
// function of update function
exports.updateProject = async(req, res , next)=> {
    const {id} = req.params;
    const dbo = await connectDB();
    const project = await dbo.collection("projects").updateOne({_id:id},{$set:req.body});

    return res.json({
        message : "update Project Controllers is working fine!"
    })
}
// function of delet function
exports.deleteProject = async (req, res , next)=> {
    const {id} = req.params;
    const dbo = await connectDB();
    const project = await dbo.collection("projects").deleteOne({_id:id});
    return res.json({
        message : "delete Project Controllers is working fine!"
    })
}
// function of count projects function
exports.countProjects = async (req, res , next)=> {
    const dbo = await connectDB();
    const project = await dbo.collection("projects").countDocuments({});
    return res.json({
        message : "count Total  Controllers is working fine!"
    })
}