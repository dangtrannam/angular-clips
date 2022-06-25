import { Injectable } from '@angular/core';
interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unRegister(id: string) {
    const modalIndex = this.modals.findIndex((modal) => modal.id === id);
    if (modalIndex !== -1) {
      this.modals.splice(modalIndex, 1);
    }
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((modal) => modal.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((modal) => modal.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
