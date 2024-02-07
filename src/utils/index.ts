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

export const BookCoverImage = () => {
    return "https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
}

