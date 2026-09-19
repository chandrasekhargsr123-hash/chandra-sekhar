class LoginPage {
    constructor(page){
        this.page = page;
        this.username = page.getByTestId('username');
        this.password = page.getByTestId('password');
        this.loginBtn = page.getByTestId('login-btn');
    }

    async login (user, pass){
        await  this.username.fill(user);
        await  this.password.fill(pass);
        await  this.loginBtn.click();
    }
}
module.exports = LoginPage;