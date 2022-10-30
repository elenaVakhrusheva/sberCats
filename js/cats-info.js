export class CatsInfo {
  constructor(
      selectorTemplate,
      handleEditCatInfo,
      handleLikeCat,
      handleDeleteCat
    ) {
      this._SelectorTemplate = selectorTemplate;
      this._handleEditCatInfo = handleEditCatInfo;
      this._handleLikeCat = handleLikeCat;
      this._handleDeleteCat = handleDeleteCat;
      this._data = {};

    
  }

  // наполнить данными карточки
  setData() {

  }

  // возвр-т содержимое шаблона в виде DOM узла
  _getTemplate() {
    return document.querySelector(this._selectorTemplate).content.children[0];
  }

  // возв-т элемент
  gitElement() {
    this.element = this._getTemplate().cloneNode(true);
  }

}