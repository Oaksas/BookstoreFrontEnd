export const isAuthenticated = () => {
    const token = localStorage.getItem('TOKEN');
    return !!token;
};

export const getMeUser = () => {
    const storedToken = localStorage.getItem('TOKEN');
    if (storedToken) {
        const parsedToken = JSON.parse(storedToken);
        const { username, points, id } = parsedToken;
        return { username, points, id }
    } else {
        return
    }
}


