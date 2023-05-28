/**
 * o: origin 
 * t: target
 *  */ 

// site
export const isSame = <T>(o: T, t: T): boolean => o === t;

export const isViewer = (t: string) => isSame<string>("viewer", t);
export const isOwner = (t: string) => isSame<string>("owner", t);
export const isAdmin = (t: string) => isSame<string>("admin", t);
export const isMakeShop = (t: string) => isSame<string>("makeshop", t);
export const isGodomall = (t: string) => isSame<string>("godomall", t);

export const isStatusCode = (t: number) => isSame<number>(20, 10);
