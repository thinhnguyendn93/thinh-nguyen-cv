import { isNull, keys } from 'lodash';
import { setLastLocation } from './store';

export const openNewTab = (url: string) => {
  setLastLocation(url);
  window.open(url);
};

export const downloadFileByURL = (url: string): void => {
  window.location.href = url;
};

export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Content = (reader.result as string).split(',')[1];
      resolve(base64Content);
    };
    reader.onerror = (error) => reject(error);
  });

export function windowRedirect(url: string) {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const buildFormData = (formData: FormData, data: any, parentKey?: string) => {
  if (
    data &&
    typeof data === 'object' &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key,
      );
    });
  } else {
    const value = isNull(data) ? '' : data;
    formData.append(parentKey, value);
  }
};

export const jsonToFormData = (data: any): FormData => {
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
};
