import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    browser.waitForAngular();
    return element.all(by.css('li')).first().getText();
  }
}
