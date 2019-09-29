export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    if(err.status !== 500) {
        res.status(err.status).json(err.message);
    } else {
        res.status(500).json(err.message);
    }
  };
