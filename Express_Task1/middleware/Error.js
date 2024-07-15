const ErrorHandler = (err, req, res, next) => {

if(err.status){
    res.status(err.status).json({msg: err.massage});
}else{
    res.status(500).json({msg:err.massage});
}
    res.status(404).json({msg:err.massage});

}
export default ErrorHandler;