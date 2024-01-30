export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) return;
        const token = localStorage.getItem('token');
        
    if (!token || token == "null") {
        return navigateTo('/login')
    }
})