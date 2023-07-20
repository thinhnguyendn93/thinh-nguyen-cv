import { useTranslation } from 'react-i18next';
import { Col, Form, Row } from 'antd';
import { useState } from 'react';
import { notifySuccess } from 'utils/toast';
import { useUpdateUserPasswordMutation } from 'api/app-api';
import { Button, Input } from 'components/form-ui';

interface Props {
  userId?: string;
  onClose?: () => void;
}

export function PasswordForm(props: Props) {
  const { t } = useTranslation();
  const { userId, onClose } = props;
  const [form] = Form.useForm();
  const newPassword = Form.useWatch('newPassword', form);
  const [loading, setLoading] = useState(false);
  const [updatePassword] = useUpdateUserPasswordMutation();

  const requestUpdateUser = (data: App.ChangePasswordRequest) => {
    setLoading(true);
    updatePassword(data).then((response) => {
      handleResponse(response);
    });
  };

  const handleResponse = (response: App.Response<string>) => {
    setLoading(false);
    if (!response.error) {
      notifySuccess(t('your_password_successfully_updated'));
      onClose();
    }
  };

  const onFinish = (values: App.ChangePasswordRequest) => {
    setLoading(true);
    requestUpdateUser({ ...values, id: userId });
  };

  const checkConfirmPassword = (_: App.Data, value: string[]) => {
    if (value && value === newPassword) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(t('confirm_password_does_not_match')));
  };

  return (
    <Form
      form={form}
      autoComplete="off"
      layout="vertical"
      onFinish={onFinish}
      preserve={false}
    >
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Input
            label={t('current_password')}
            placeholder={t('enter_current_password')}
            name="currentPassword"
            maxLength={255}
            rules={[
              { required: true, message: t('current_password_required') },
            ]}
            autoFocus
            type="password"
          />
        </Col>
        <Col span={24}>
          <Input
            label={t('new_password')}
            name="newPassword"
            placeholder={t('enter_new_password')}
            rules={[
              {
                required: true,
                min: 4,
                message: t('field_require_min_characters_message', {
                  number: 4,
                  field: t('password'),
                }),
              },
            ]}
            type="password"
          />
        </Col>
        <Col span={24}>
          <Input
            label={t('confirm_new_password')}
            name="confirmPassword"
            placeholder={t('confirm_your_new_password')}
            rules={[{ validator: checkConfirmPassword }]}
            type="password"
          />
        </Col>
        <Col span={24}>
          <Row justify="end" gutter={[8, 8]} className="ant-form__footer">
            <Col>
              <Button
                buttonType="button"
                label={t('cancel')}
                disabled={loading}
                onClick={onClose}
              />
            </Col>
            <Col>
              <Button
                type="primary"
                buttonType="submit"
                label={t('update')}
                disabled={loading}
                loading={loading}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
