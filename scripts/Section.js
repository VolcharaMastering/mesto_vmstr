class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = selector;
  }

  clear() {
    this._container.innerHTML = '';
  }


  renderItems() {
    this.clear();

    this._items.forEach((item) => this._renderer(item))
  }


  prepend(itemHtml) {
    this._container.prepend(itemHtml)
  }
  append(itemHtml) {
    this._container.append(itemHtml)
  }
}

