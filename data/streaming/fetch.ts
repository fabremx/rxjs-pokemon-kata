/**
 * DO NOT TOUCH THIS FILE
 */

import { Observable } from 'rxjs';

export function mockedFetch(data: any, timeInterval: number): Observable {
    return new Observable(subscriber => {
        data.forEach((pokemon, index) => {
            setTimeout(() => {
                subscriber.next(pokemon);

                if (index === data.length - 1) {
                    subscriber.complete();
                }
            }, index * timeInterval);
        });
    });
}
