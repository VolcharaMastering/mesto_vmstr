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
