import { useTranslation } from 'react-i18next';
import { ModalLayout } from 'components/modal';
import { BillForm } from './elements/bill-form';

interface Props {
  visible: boolean;
  orderId?: string;
  onClose: () => void;
}

export function BillModal(props: Props) {
  const { t } = useTranslation();
  const { visible, orderId, onClose } = props;

  return (
    <ModalLayout
      visible={visible}
      onClose={onClose}
      size="medium"
      title={t('your_order')}
    >
      <BillForm orderId={orderId} onClose={onClose} />
    </ModalLayout>
  );
}
