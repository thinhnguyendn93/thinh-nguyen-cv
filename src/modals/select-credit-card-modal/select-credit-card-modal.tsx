import { useTranslation } from 'react-i18next';
import { ModalLayout } from 'components/modal';
import { SelectCreditCardForm } from './elements/select-credit-card-form';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (cardId: string) => void;
}

export function SelectCreditCardModal(props: Props) {
  const { t } = useTranslation();
  const { visible, onClose, onSelect } = props;

  return (
    <ModalLayout
      visible={visible}
      onClose={onClose}
      size="medium"
      title={t('select_a_credit_card')}
      className="select-credit-card"
    >
      <SelectCreditCardForm onSelect={onSelect} onClose={onClose} />
    </ModalLayout>
  );
}
