const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Feedback = require("../models/feedbackModel");
const ErrorHandler = require("../utils/errorhandler");


// Create Feedback  -- Admin
exports.createFeedback = catchAsyncErrors(async (req,res,next) =>{



    const {name,title,description} = req.body;

    const feedback = await Feedback.create({
        name,
        title,
        description,
      
    });


    res.status(200).json({
        success:true,
        feedback
    })
});


// Get Alll Feedbacks 
exports.getAllFeedbacks = catchAsyncErrors(async (req,res,next) =>{
    const feedbacks = await Feedback.find();

    res.status(200).json({
        success:true,
        feedbacks
    })
});



// Feebback Details 
exports.singleFeedbackDetails = catchAsyncErrors(async (req,res,next)=>{
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
        return  next(new ErrorHandler(`Feedback Not Found with this Id:${req.params.id}`,400))
    }

    res.status(200).json({
        success:true,
        feedback
    })
});


// Update feedBack  -- Admin
exports.updateFeedback = catchAsyncErrors(async (req,res,next)=>{
    let feedback = await Feedback.findById(req.params.id)

    if (!feedback) {
        return next(new ErrorHandler(`Feedback Not found with this Id ${req.params.id}`,400))
    };

    const newdashboardData = {
        name:req.body.name,
        title:req.body.title,
        description:req.body.description,
    }

    
    
        feedback = await Feedback.findByIdAndUpdate(req.params.id,newdashboardData,{
            new: true,
            runValidators: true,
            useFindAndModify: false
        })


        res.status(200).json({
            success:true,
            feedback
        })
});


/// Delete Feedback  -- Admin
exports.deleteFeedback   = catchAsyncErrors(async (req,res,next)=>{
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
        return next(new ErrorHandler(`Feedback Not found with this Id ${req.params.id}`,400))
    };


   

    res.status(200).json({
        success:true,
        message:"Feedback Deleted Successfully"
    })
})