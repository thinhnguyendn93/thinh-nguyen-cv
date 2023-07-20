declare namespace App {
  import { Moment } from 'moment';
  import { ChatType, ProductEnum, CardEnum } from 'enums/app';

  export type Data = any;

  export type SelectOption = {
    key?: string;
    value?: string;
    content?: string | JSX.Element;
    icon?: string;
    image?: string;
    divider?: boolean;
    iconBackground?: string;
    iconColor?: string;
    iconSize?: number;
    hidden?: boolean;
  };

  export type CardItem = {
    title: string;
    description: string;
    image?: any;
    logo?: any;
    tags?: string[];
    role?: string;
  };

  export type UserInfo = {
    id?: string;
    username?: string;
    thumbnail?: string;
    email?: string;
    avatar?: string;
    fullName?: string;
    dateOfBirth?: string;
    gender?: string;
  };

  export type Chat = {
    id?: string;
    content: string;
    user: UserInfo;
    chatType: ChatType;
  };

  export type Conversation = {
    name: string;
    id: string;
    chats?: Chat[];
  };

  export type SubmitChat = {
    content: string;
  };

  export type Callback = {
    onSuccess?: (...args) => void;
    onFailure?: (...args) => void;
    onFinish?: (...args) => void;
  };

  export type ChangePasswordRequest = {
    id: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };

  export interface Response<T> {
    data?: T;
    error?: unknown;
  }

  export type TableData = any;

  export type TablePaginate = {
    current?: number;
    pageSize?: number;
    total?: number;
  };

  export type Payment = {
    id?: string;
    invoice: string;
    billingDate: Date;
    status: string;
    amount: number;
    product: string;
  };

  export type Invoice = {
    id: number;
    name: string;
    product: string;
    productPrice: number;
    type: string;
    billingDate: string;
    status: string;
    amount: number;
    quantity: number;
  };

  export type Product = {
    id?: string;
    name: string;
    price: number;
    description: string;
    picture: string;
    productType: ProductEnum;
  };

  export type CreditCard = {
    id?: string;
    name: string;
    expiration: string;
    expiry: string;
    cvc: number;
    number: string;
    issuer: CardEnum;
  };

  export type BillAddress = {
    name: string;
    address: string;
    email: string;
  };

  export type Order = {
    id: string;
    name: string;
    billFrom: BillAddress;
    billTo: BillAddress;
    product: string;
    price: number;
    quanlity: number;
    total: number;
    date: Date;
  };

  export type DateRangeFilter = {
    from?: string | Moment.moment;
    to?: string | Moment.moment;
  };

  export type InvoiceRequest = {
    productId: string;
    quantity: number;
    cardId: string;
  };

  export interface ListResponse<T> {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    data: T[];
  }

  export interface Response<T> {
    data?: T;
    error?: unknown;
  }

  export type Sort = {
    sortField?: string;
    sortOrder?: string;
  };
}
