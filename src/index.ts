type Response = [one: any, extra: any[]];
type Indexable = (list: any[]) => any;

const one2extra = (inTarget: number | Indexable, inArray: any[]): Response => {
  const isno = typeof inTarget === 'number';
  const list = inArray.slice(0);
  if (isno) {
    const one = list[inTarget];
    list.splice(inTarget, 1);
    return [one, list];
  }

  const index = inTarget(list);
  return one2extra(index, inArray);
};

export default one2extra;
