import { AppPage } from './app.po';

describe('hackernews-clone App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(`1. Hijack of Amazon’s domain service used to reroute web traffic for two hours (doublepulsar.com)
    400 points by coloneltcb | 3 hours ago | 22 comments`);
  });
});
