import { HackTry1Page } from './app.po';

describe('hack-try1 App', function() {
  let page: HackTry1Page;

  beforeEach(() => {
    page = new HackTry1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
