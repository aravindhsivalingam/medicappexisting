import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})

export class EncrpDecrpService {
    constructor() { }

    // The set method is use for encrypt the value.
    set(keys, value) {
        const encrypted = CryptoJS.AES.encrypt(value, keys);
        return encrypted.toString();
    }

    // The get method is use for decrypt the value.
    get(keys, value) {
        const decrypted = CryptoJS.AES.decrypt(value, keys);
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}