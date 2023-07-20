import { useTranslation } from 'react-i18next';
import { ModalLayout } from 'components/modal';
import { CreditCardForm as AddCreditCardForm } from './elements/credit-card-form';

interface Props {
  visible: boolean;
  onClose: () => void;
  onAdded?: (cardId: string) => void;
}

export function AddCreditCardModal(props: Props) {
  const { t } = useTranslation();
  const { visible, onClose, onAdded } = props;

  return (
    <ModalLayout
      visible={visible}
      onClose={onClose}
      size="medium"
      title={t('add_a_credit_card')}
    >
      <AddCreditCardForm onAdded={onAdded} onClose={onClose} />
    </ModalLayout>
  );
}
