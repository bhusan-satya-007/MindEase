
// Simple utility to track query counts per user session
const QUERY_COUNT_KEY = 'user_query_count';
const MONTHLY_FREE_QUERIES = 10;

export const getQueryCount = (): number => {
  const count = localStorage.getItem(QUERY_COUNT_KEY);
  return count ? parseInt(count, 10) : 0;
};

export const incrementQueryCount = (): number => {
  const currentCount = getQueryCount();
  const newCount = currentCount + 1;
  localStorage.setItem(QUERY_COUNT_KEY, newCount.toString());
  return newCount;
};

export const resetQueryCount = (): void => {
  localStorage.setItem(QUERY_COUNT_KEY, '0');
};

export const shouldTriggerPayment = (): boolean => {
  return getQueryCount() >= MONTHLY_FREE_QUERIES;
};

export const getRemainingFreeQueries = (): number => {
  const current = getQueryCount();
  if (current >= MONTHLY_FREE_QUERIES) return 0;
  return MONTHLY_FREE_QUERIES - current;
};
