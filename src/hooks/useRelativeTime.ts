const timeBetween = (prevDate, nextDate) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = nextDate - prevDate;

  if (elapsed < msPerMinute) {
    return {
      value: -Math.round(elapsed / 1000),
      format: 'seconds',
    };
  }

  if (elapsed < msPerHour) {
    return {
      value: -Math.round(elapsed / 60 / 1000),
      format: 'minutes',
    };
  }

  if (elapsed < msPerDay) {
    return {
      value: -Math.round(elapsed / msPerHour),
      format: 'hours',
    };
  }

  if (elapsed < msPerMonth) {
    return {
      value: -Math.round(elapsed / msPerDay),
      format: 'days',
    };
  }

  if (elapsed < msPerYear) {
    return {
      value: -Math.round(elapsed / msPerMonth),
      format: 'months',
    };
  }

  return {
    value: -Math.round(elapsed / msPerYear),
    format: 'years',
  };
};

export const useRelativeTime = (createdAt) => {
  if (!createdAt) return '';

  const { value, format } = timeBetween(createdAt, Date.now());

  // @ts-ignore
  const rtf = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
    style: 'long',
  });

  return rtf.format(value, format);
}