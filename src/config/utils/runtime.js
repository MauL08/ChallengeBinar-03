export function changeRuntime(time) {
  let minute = time % 60;
  let hour = Math.floor(time / 60);

  return `${hour}hr ${minute} min`;
}
