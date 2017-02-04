import { FuturePage } from './app.po';

describe('future App', function() {
  let page: FuturePage;

  beforeEach(() => {
    page = new FuturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
