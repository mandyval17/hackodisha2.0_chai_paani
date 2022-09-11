const TOKEN_KEY = 'jwt'

export const login = () =>{
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}