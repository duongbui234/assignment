const pickAttributeObj = <T extends object, U extends keyof T>(
  obj: T,
  arr: Array<U>
): Pick<T, U> =>
  arr.reduce(
    (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
    {} as Pick<T, U>
  );

export default pickAttributeObj;
