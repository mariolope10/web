import { MaterialesPage } from './app.po';

describe('materiales App', () => {
  let page: MaterialesPage;

  beforeEach(() => {
    page = new MaterialesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
