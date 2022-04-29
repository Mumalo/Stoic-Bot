export const wait = (seconds: number) => new Promise((resolve, _) => setTimeout(resolve, seconds * 1000));
