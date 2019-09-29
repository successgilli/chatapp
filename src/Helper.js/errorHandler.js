/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  if (err.status !== 500) return res.status(err.status).json(err.message);

  return res.status(500).json(err.message);
};

export default errorHandler;
