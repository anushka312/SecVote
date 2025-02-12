import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token || "";

        if (!token) {
            return res.status(201).json({
                success: false,
                message: "Unauthorized user!",
            });
        }

        // Verify token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;  // Attach decoded token data to request

        await next(); // Proceed to the next middleware or route handler
    } 
    catch (error) {
        console.log("Error While Authenticating User\nError:", error);

        // Send error response only once
        return res.status(401).json({
            success: false,
            message: "Unauthorized user!",
        });
    }
};
