class LoginPage{
    constructor(page){
        this.page = page;

        //locators

        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
        
    }
    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username , password){
        await this.page.fill(this.username , username);
        await this.page.fill(this.password , password);
        await this.page.click(this.loginBtn);

    }
    async getErrorMessage(){
        return await this.page.locator('.error-message-container').textcontent();
    }
    
}
module.exports = LoginPage;

//day9 program