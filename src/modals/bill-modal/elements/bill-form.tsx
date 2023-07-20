import { useGetInvoiceQuery } from 'api/app-api';
import { Bill } from 'components/bill';
import { Loading } from 'components/loading';

interface Props {
  orderId?: string;
}

export function BillForm(props: Props) {
  const { orderId } = props;
  const { data, isLoading } = useGetInvoiceQuery(orderId);

  if (isLoading) {
    return <Loading />;
  }

  return <Bill order={data} />;
}
