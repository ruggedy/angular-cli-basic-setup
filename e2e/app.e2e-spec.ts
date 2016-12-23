import { WeaveeAnalyticsPage } from './app.po';

describe('weavee-analytics App', function() {
  let page: WeaveeAnalyticsPage;

  beforeEach(() => {
    page = new WeaveeAnalyticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
