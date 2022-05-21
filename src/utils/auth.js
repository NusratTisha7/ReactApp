import jwt_decode from 'jwt-decode';


export const authenticate = (token, cb) => {
    const jwt = (JSON.stringify(token));
    const decoded = jwt_decode(jwt);
    if (decoded.role === 'Admin' || decoded.role === 'serviceprodiver ') {
        if (typeof window !== 'undefined') {
            localStorage.setItem('jwt', JSON.stringify(token));
            cb(true,'Successfully Login');
        }
    }
    else {
        cb(false,'You are not a valid user');
    }
}