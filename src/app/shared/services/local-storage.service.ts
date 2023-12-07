import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;


  constructor() {
    this.storage = window.localStorage;
  }

  setItem(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }

    return false;
  }

  getItem(key: string): any {
    const item = this.storage.getItem(key);
    if (this.storage && item) {
      return JSON.parse(item);
    }

    return null;
  }

  removeItem(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }

    return false;
  }
}
