import { Injectable }  from '@angular/core';
 
@Injectable()
export class AppInitService {
 
    constructor() {
    } 
    // TODO: Add function to get tokens from database
    Init() {
        return new Promise<void>((resolve, reject) => {
            resolve();
        });
    }
}