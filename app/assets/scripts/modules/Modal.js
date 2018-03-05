import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal);

    // clicking the X close modal button
    this.closeModalButton.click(this.closeModal);

    // pushes the escape key
    this.closeModalButton.click(this.closeModal);
  }

  openModal() {

  }

  closeModal() {

  }
}

export default Modal();