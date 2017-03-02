import { AplicacionPage } from './app.po';

describe('aplicacion App', () => {
  let page: AplicacionPage;

  beforeEach(() => {
    page = new AplicacionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
