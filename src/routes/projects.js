//all project routes
const express=require("express");

//importing the controllers
const {
    getProjects, 
    getProject,
    createProject,
    deleteProject,
    updateProject,
    countProjects
}=require("../controllers/projects")

// making routing to anothers folders of our projects
const router=express.Router();


// these are our parameters or params
router.post('/', createProject)

router.get('/:id', getProject)
router.get('/count', countProjects)

router.get('/', getProjects)




router.patch('/:id', updateProject)
router.delete('/:id', deleteProject)



// router.get('/:id/:tag', getProject)


module.exports=router