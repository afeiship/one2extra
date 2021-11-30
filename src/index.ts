type Response = {
  one: any;
  extra: any[];
};

export default (inIndex: number, inArray: any[]): Response => {
  const extra = inArray.slice(0);
  const one = extra[inIndex];
  extra.splice(inIndex, 1);
  return { one, extra };
};
