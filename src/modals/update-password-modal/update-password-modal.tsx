import { useTranslation } from 'react-i18next';
import { ModalLayout } from 'components/modal';
import { PasswordForm } from './elements/password-form';

interface Props {
  visible: boolean;
  userId: string;
  onClose: () => void;
}

export function UpdatePasswordModal(props: Props) {
  const { t } = useTranslation();
  const { visible, userId, onClose } = props;

  return (
    <ModalLayout
      visible={visible}
      onClose={onClose}
      size="small"
      title={t('update_your_password')}
    >
      <PasswordForm userId={userId} onClose={onClose} />
    </ModalLayout>
  );
}
