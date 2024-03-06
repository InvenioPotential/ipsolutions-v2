import { authMiddleware }  from "@clerk/nextjs";

const ignoredRoutes = ["/api", "/api/nonRecur"];

export default authMiddleware({
    publicRoutes: ['/'],
    ignoredRoutes,
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};