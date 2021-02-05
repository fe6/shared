export const isEmptyObject = (num: number) => {
  let test1 = 1;

  test1 += num;

  if (test1 < 1) {
    return 0;
  }

  return test1;
};
