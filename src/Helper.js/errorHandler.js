/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  if (err.status !== 500) {
    res.status(err.status).json(err.message);
  } else {
    res.status(500).json(err.message);
  }
};

export default errorHandler;
