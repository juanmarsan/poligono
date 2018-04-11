import { PoligonoPage } from './app.po';

describe('poligono App', function() {
  let page: PoligonoPage;

  beforeEach(() => {
    page = new PoligonoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
