export const setUserToLocal = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUserFromLocal = () => {
    const user = localStorage.getItem('user');
    return user === null ? null : JSON.parse(user);
};


export const removeUserFromLocal = (user) => {
    localStorage.clear();
}