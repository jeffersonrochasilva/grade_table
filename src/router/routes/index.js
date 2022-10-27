// import publicRoutes from './public'
import privateRoutes from "./private";
import publicRouter from "./public";

export default [...privateRoutes, ...publicRouter];
