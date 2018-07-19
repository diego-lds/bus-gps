import { BusGpsPage } from './app.po';

describe('bus-gps App', function() {
  let page: BusGpsPage;

  beforeEach(() => {
    page = new BusGpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
