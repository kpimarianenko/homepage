export const cn = (...classNames: (string | undefined | null | false)[]) =>
  classNames.filter(c => !!c).join(' ');
