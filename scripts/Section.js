export class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  clear() {
    this._container.innerHTML = '';
  }


  renderItems() {
    this.clear();
    console.log (this._items);
    this._items.forEach((item) => this._renderer(item))
  }


  prepends(itemHtml) {
    this._container.prepend(itemHtml)
  }
  appends(itemHtml) {
    this._container.append(itemHtml)
  }
}

