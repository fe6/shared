import * as searchUrlFn from '../src/search-url';

describe('is', () => {
  test('searchUrl', () => {
    expect(searchUrlFn.searchUrl('test')).toBe('');
  });

  test('get value by searchUrl', () => {
    global.window = Object.create(window);
    const url = "http://water.com?water=44&value=1";
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    });
    expect(searchUrlFn.searchUrl('water')).toBe('44');
  });

  test('searchUrl', () => {
    expect(searchUrlFn.searchUrl('test')).toBe('');
  });


  test('get value by searchUrl', () => {
    expect(searchUrlFn.searchUrl('value')).toBe('1');
  });
});
