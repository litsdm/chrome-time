/* eslint-disable import/prefer-default-export */
export const formatTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = Math.round(time % 60);

  if (hours && minutes) return `${hours}h ${minutes}m`;

  return !hours ? `${minutes}m` : `${hours}h`;
}
