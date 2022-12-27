export function clsJoin(...args: any[]): string {
  return Array.from(args).reduce<string[]>((classes, item) => {
    if (item) {
      classes.push(item);
    }

    return classes;
  }, []).join(' ');
}
