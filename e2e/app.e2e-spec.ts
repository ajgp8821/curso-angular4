import { ProyectoAngular4Page } from './app.po';

describe('proyecto-angular4 App', () => {
  let page: ProyectoAngular4Page;

  beforeEach(() => {
    page = new ProyectoAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
