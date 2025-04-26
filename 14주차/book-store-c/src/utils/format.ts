import dayjs from "dayjs";

// export const formatNumber = (number: number) => {
//   return number.toLocaleString();
// };

export const formatNumber = (value: number | undefined | null): string => {
  if (value === undefined || value === null) {
      return '0'; // 기본값으로 0을 반환하거나 적절한 값을 반환
  }
  return value.toLocaleString();
};


export const formatDate = (date: string, format?: string) => {
  return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
};