import { cloneDeep, isNull, keys } from 'lodash';
import { formatDate } from './date';

function serializeDateRangeFilter(dateFilter: App.DateRangeFilter) {
  const { to, from } = dateFilter || {};
  if (to && from) {
    dateFilter.from = formatDate(from);
    dateFilter.to = formatDate(to);
  } else {
    delete dateFilter?.from;
    delete dateFilter?.to;
  }
}

export function serializeFilter(filter: App.Data) {
  const cloned = cloneDeep(filter);
  const dateFilterList = Object.keys(cloned).filter((key) => {
    const { from, to } = cloned[key] || {};
    return from && to;
  });

  dateFilterList.forEach((key) => {
    serializeDateRangeFilter(cloned[key]);
  });

  return cloned;
}

const buildSearchParams = (
  searchParams: URLSearchParams,
  data: App.Data,
  parentKey?: string,
) => {
  if (
    data &&
    typeof data === 'object' &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    keys(data).forEach((key) => {
      buildSearchParams(
        searchParams,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key,
      );
    });
  } else {
    const value = isNull(data) ? '' : data;
    searchParams.append(parentKey, value);
  }
};

export function toQueryParams(filter: App.Data) {
  const searchParams = new URLSearchParams();
  buildSearchParams(searchParams, serializeFilter(filter));
  searchParams.delete('visible');
  return searchParams.toString();
}
