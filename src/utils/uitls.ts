
export const wait = (seconds: number) => new Promise((resolve, reject) => setTimeout(resolve, seconds * 1000));
