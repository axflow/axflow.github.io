export const ISOTime = (date: Date) => {
  return date.toISOString();
}

export const humanTime = (date: Date) => {
  return date.toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
