import jwt from "jsonwebtoken"

export const userCheck =(req, res, next)=> {
    const token = req.headers.authorization;
    const decodedToken = jwt.decode(token, 'secret');
    if (decodedToken) {
    req.userId = decodedToken.id;
    req.role = decodedToken.role;
    next();
  } else {
    return res.status(401).json({ message: 'you are not authorised' });
  }
}

export const adminCheck =(req, res, next)=> {

    if (req.role === 'Admin') {
        next();
      } else {
        return res.status(401).json({ message: 'you are authorised' });
      }
}