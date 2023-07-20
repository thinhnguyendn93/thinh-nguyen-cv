import { useTranslation } from 'react-i18next';
import { Col, Form, Radio, Row } from 'antd';
import { useState } from 'react';
import { Button } from 'components/form-ui';
import { CreditCard } from 'components/credit-card';
import { useGetCreditCardsQuery } from 'api/app-api';
import { Loading } from 'components/loading';

interface Props {
  onClose?: () => void;
  onSelect: (cardId: string) => void;
}

export function SelectCreditCardForm(props: Props) {
  const { t } = useTranslation();
  const { onClose, onSelect } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const { data: cards, isLoading } = useGetCreditCardsQuery();
  const initialValues = cards
    ? {
        cardId: cards[0].id,
      }
    : {};

  const onFinish = (data: App.Data) => {
    setLoading(true);
    onSelect(data.cardId);
    onClose();
  };

  if (isLoading) {
    return <Loading />;
  }

  const cardOptions = cards?.map((x) => (
    <Radio value={x.id}>
      <CreditCard card={x} />
    </Radio>
  ));

  return (
    <Form
      form={form}
      autoComplete="off"
      layout="vertical"
      onFinish={onFinish}
      preserve={false}
      initialValues={initialValues}
    >
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Form.Item
            name="cardId"
            label={t('select_a_card')}
            rules={[{ required: true, message: t('please_select_a_card') }]}
          >
            <Radio.Group>{cardOptions}</Radio.Group>
          </Form.Item>
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
                label={t('select')}
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
