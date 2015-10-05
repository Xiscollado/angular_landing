describe('Glasses for the masses homepage', function() {
  it('should load', function() {
    browser.get('http://localhost:3000/glasses-for-the-masses');
    expect(browser.getTitle()).toEqual('Glasses for the masses');
  });
});