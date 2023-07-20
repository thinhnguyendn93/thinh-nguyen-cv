import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Divider, Row, Skeleton } from 'antd';
import { RESOURCES } from 'config/constant';
import { formatNumber } from 'utils/number';
import { Loading } from 'components/loading';
import { formatToDisplayDate } from 'utils/date';

interface Props {
  loading?: boolean;
  order: App.Invoice;
}

export function Bill(props: Props) {
  const { t } = useTranslation();
  const { loading, order } = props;

  const renderMaskLoading = (node: React.ReactNode) => {
    if (loading) {
      return <Skeleton.Input active size="small" />;
    }
    return node;
  };

  if (!order) {
    return <Loading />;
  }

  const { name, product, quantity, productPrice, billingDate, amount } = order;

  return (
    <Row className="bill" gutter={[16, 16]}>
      <Col span={24}>
        <div className="bill__header">
          <div className="logo">
            <img src={RESOURCES.LOGO} />
          </div>
        </div>
      </Col>
      <Col span={24}>
        {renderMaskLoading(<h3 className="bill__title">{name}</h3>)}
      </Col>
      <Col span={24}>
        {renderMaskLoading(
          <h3 className="bill__title">
            {t('order_date_value', {
              value: formatToDisplayDate(billingDate),
            })}
          </h3>,
        )}
      </Col>
      {/* <Col span={24}>
        <div className="bill__property">
          <label className="bill__label">{t('bill_from')}</label>
          <p className="bill__value">{renderMaskLoading(billFrom.name)}</p>
        </div>
        <div className="bill__property">
          <label className="bill__label">{t('address')}</label>
          <p className="bill__value">{renderMaskLoading(billFrom.address)}</p>
        </div>
        <div className="bill__property">
          <label className="bill__label">{t('email')}</label>
          <p className="bill__value">{renderMaskLoading(billFrom.email)}</p>
        </div>
      </Col>
      <Col span={24}>
        <div className="bill__property">
          <label className="bill__label">{t('bill_to')}</label>
          <p className="bill__value">{renderMaskLoading(billTo.name)}</p>
        </div>
        <div className="bill__property">
          <label className="bill__label">{t('address')}</label>
          <p className="bill__value">{renderMaskLoading(billTo.address)}</p>
        </div>
        <div className="bill__property">
          <label className="bill__label">{t('email')}</label>
          <p className="bill__value">{renderMaskLoading(billTo.email)}</p>
        </div>
      </Col> */}
      <Col span={24}>
        <Row className="bill__detail">
          <Col span={24}>
            <h3 className="bill__product-name">
              {renderMaskLoading(t(product))}
            </h3>
          </Col>
          <Col span={24}>
            <div className="bill__property">
              <label className="bill__label">{t('price')}</label>
              <p className="bill__value">
                {renderMaskLoading(
                  t('total_amount', { value: formatNumber(productPrice) }),
                )}
              </p>
            </div>
          </Col>
          <Col span={24}>
            <div className="bill__property">
              <label className="bill__label">{t('quanlity')}</label>
              <p className="bill__value">
                {renderMaskLoading(formatNumber(quantity))}
              </p>
            </div>
          </Col>
          <Divider />
          <Col span={24}>
            <p className="bill__total-label">{t('total')}</p>
            <h3 className="bill__total-value">
              {renderMaskLoading(
                t('total_amount', { value: formatNumber(amount) }),
              )}
            </h3>
            <p className="bill__total-description">{t('vat_included')}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
