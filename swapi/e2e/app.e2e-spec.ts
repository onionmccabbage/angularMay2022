import { SwapiPage } from './app.po';

describe('swapi App', () => {
  let page: SwapiPage;

  beforeEach(() => {
    page = new SwapiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
