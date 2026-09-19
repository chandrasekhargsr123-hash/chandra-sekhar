class DashboardPage {
  constructor(page) {
    this.page = page;
    this.title = '.title';
    this.menu = '#react-burger-menu-btn';
    this.logoutBtn = '#logout_sidebar_link';
  }

  async isDashboardDisplayed() {
  await this.page.waitForSelector('.title', { timeout: 5000 });
  return await this.page.locator('.title').isVisible();
}

  async logout() {
    await this.page.click(this.menu);
    await this.page.click(this.logoutBtn);
  }
}

module.exports = DashboardPage;