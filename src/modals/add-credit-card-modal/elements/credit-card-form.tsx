/* eslint-disable max-statements */
import { useTranslation } from 'react-i18next';
import { Col, Form, Row } from 'antd';
import Card, { Focused } from 'react-credit-cards';
import { useState } from 'react';
import { notifySuccess } from 'utils/toast';
import { useCreateCreditCardMutation } from 'api/app-api';
import { Button, Input } from 'components/form-ui';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from 'utils/credit-card';
import 'react-credit-cards/es/styles-compiled.css';

interface Props {
  onClose?: () => void;
  onAdded: (cardId: string) => void;
}

const NUMBER_KEY = 'number';
const NAME_KEY = 'name';
const CVC_KEY = 'cvc';
const EXPIRY_KEY = 'expiry';

export function CreditCardForm(props: Props) {
  const { t } = useTranslation();
  const { onClose, onAdded } = props;
  const [form] = Form.useForm();
  const cardNumber = Form.useWatch(NUMBER_KEY, form) || '';
  const cardName = Form.useWatch(NAME_KEY, form);
  const cardExpiry = Form.useWatch(EXPIRY_KEY, form);
  const cardCVC = Form.useWatch(CVC_KEY, form);
  const [issuer, setIssuer] = useState('');
  const [loading, setLoading] = useState(false);
  const [forcused, setFocused] = useState<Focused>(NUMBER_KEY);

  const [creditCard] = useCreateCreditCardMutation();

  const defaultValues = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: '',
  };

  const requestAddCreditCard = (data: App.CreditCard) => {
    setLoading(true);
    creditCard(data).then((response) => {
      handleResponse(response);
    });
  };

  const handleResponse = (response: App.Response<App.CreditCard>) => {
    setLoading(false);
    if (!response.error) {
      notifySuccess(t('your_password_successfully_updated'));
      onClose();
      onAdded(response.data.id);
    }
  };

  const onFinish = (data: App.CreditCard) => {
    setLoading(true);
    requestAddCreditCard({ ...data, issuer, expiration: data.expiry });
  };

  const handleCallback = ({ issuer }: { issuer: string }) => {
    setIssuer(issuer);
  };

  const onFocus = (focus: string) => {
    setFocused(focus as Focused);
  };

  const onChangeNumber = (value: string) => {
    const formatted = formatCreditCardNumber(value);
    form.setFieldValue(NUMBER_KEY, formatted);
  };

  const onChangeExpiry = (value: string) => {
    const formatted = formatExpirationDate(value);
    form.setFieldValue(EXPIRY_KEY, formatted);
  };

  const onChangeCVC = (value: string) => {
    const formatted = formatCVC(value);
    form.setFieldValue(CVC_KEY, formatted);
  };

  return (
    <Form
      form={form}
      autoComplete="off"
      layout="vertical"
      onFinish={onFinish}
      preserve={false}
      initialValues={defaultValues}
    >
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Card
            number={cardNumber}
            name={cardName}
            expiry={cardExpiry}
            cvc={cardCVC}
            focused={forcused}
            callback={handleCallback}
          />
        </Col>
        <Col span={24}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Input
                label={t('card_number')}
                name={NUMBER_KEY}
                placeholder={t('enter_card_number')}
                rules={[
                  {
                    pattern: new RegExp(/[\d| ]{16,22}/),
                    message: t('wrong_card_number_format'),
                    required: true,
                  },
                ]}
                maxLength={19}
                autoFocus
                onFocus={() => onFocus(NUMBER_KEY)}
                onChange={onChangeNumber}
              />
            </Col>
            <Col span={12}>
              <Input
                label={t('name_on_card')}
                name={NAME_KEY}
                placeholder={t('enter_name_on_card')}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/[a-z A-Z-]+/),
                    message: t('wrong_card_name_format'),
                  },
                ]}
                onFocus={() => onFocus(NAME_KEY)}
              />
            </Col>
            <Col span={6}>
              <Input
                label={t('expiration_date')}
                name={EXPIRY_KEY}
                placeholder={t('enter_expiration_date')}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/\d\d\/\d\d/),
                    message: t('wrong_expiration_date_format'),
                  },
                ]}
                onFocus={() => onFocus(EXPIRY_KEY)}
                onChange={onChangeExpiry}
              />
            </Col>
            <Col span={6}>
              <Input
                label={t(CVC_KEY)}
                name={CVC_KEY}
                placeholder={t('enter_cvc')}
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/\d{3}/),
                    message: t('wrong_cvc_format'),
                  },
                ]}
                onFocus={() => onFocus(CVC_KEY)}
                onChange={onChangeCVC}
              />
            </Col>
          </Row>
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
                label={t('add')}
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
