import { BehaviorSubject } from 'rxjs';

export const appTitle = new BehaviorSubject('test');
export const coutner = new BehaviorSubject(0);

(window as any).x = appTitle;
