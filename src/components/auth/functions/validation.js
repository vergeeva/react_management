export async function checkFieldsEmpty(user){
    return (user.firstName === "" ||
        user.lastName === "" ||
        user.patronymic === "" ||
        user.email === "" ||
        user.login === "" ||
        user.password === "" ||
        user.passwordConfirm === "");

}
export async function checkMail(email){
    let regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return regExp.test(email);
}

export async function checkPasswords(password, passwordConfirm){
    return password === passwordConfirm;
}

export async function checkIsAuth(){
    try{
        if (document.cookie.split("; ")[1].split("=")[1] === 'True') {
            return true;
        }
    }
    catch (e)
    {
        return false;
    }
}