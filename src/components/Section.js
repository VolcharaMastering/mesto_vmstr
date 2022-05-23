<<<<<<< HEAD:src/components/Section.js
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
    this._items.forEach((item) => this._renderer(item))
  }


  prepends(itemHtml) {
    this._container.prepend(itemHtml)
  }
  appends(itemHtml) {
    this._container.append(itemHtml)
  }
}

=======
class Section {
    constructor({items, renderer}, selector) {  }
  
    renderItems() {
      this._items.forEach((item)=>this._renderer(item))
    }

    
  addItem(itemHtml) {
    this._container.prepend(itemHtml)
  }
}

function renderCard(cardData) {
  const cardElement = createCard(cardData) 
  // подумайте как реализовать эту функцию, 
  //она просто создает карточку и возвращает её html представление
  section.addItem(cardElement)
}
>>>>>>> 1cff4e772d235aadb885aca2e74c074994032cfa:scripts/Section.js
