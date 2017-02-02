import { VaCvPage } from './app.po';

describe('va-cv App', function() {
  let page: VaCvPage;

  beforeEach(() => {
    page = new VaCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
