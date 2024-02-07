export const isAuthenticated = () => {
    const token = localStorage.getItem('TOKEN');
    return !!token;
};


