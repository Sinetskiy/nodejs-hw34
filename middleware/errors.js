module.exports.notFoundError =  (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

module.exports.internalServerError = (err, req, res, next) => {
    // render the error page
    res.status(err.status || 500);
    res.render('pages/error', { message: err.message, error: err })
};
