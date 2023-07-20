import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { RESOURCES } from 'config/constant';
import { CardEnum } from 'enums/app';
import { ContextMenu } from 'components/context-menu';
import { Button } from 'components/form-ui';
import { FontIcon } from 'components/font-icon';

interface Props {
  card: App.CreditCard;
  onRemove?: () => void;
}

export function CreditCard(props: Props) {
  const { t } = useTranslation();
  const { card, onRemove } = props;
  const { number, expiration: date, issuer, name } = card;

  const maskCardNumber = () => {
    const cardNumberArr = number.split('');
    cardNumberArr.forEach((val, index) => {
      if (index > 9 && index < 19) {
        if (cardNumberArr[index] !== ' ') {
          cardNumberArr[index] = '*';
        }
      }
    });
    return cardNumberArr;
  };

  const getCardImage = () => {
    if (issuer == CardEnum.Visa) {
      return RESOURCES.CARD_VISA;
    }
    return RESOURCES.CARD_MASTERCARD;
  };

  return (
    <Row className="credit-card" gutter={[8, 8]}>
      <Col sm={24} md={8} lg={4}>
        <img src={getCardImage()} alt="logo" />
      </Col>
      <Col sm={24} md={12} lg={18}>
        <Row className="credit-card__content">
          <div className="credit-card__title">{maskCardNumber()}</div>
          <Row className="credit-card__description">
            <div className="credit-card__value">
              {t('valid_thru')}: <span>{date}</span>
            </div>
            <div className="credit-card__value">
              {t('cvv')}: <span>***</span>
            </div>
          </Row>
        </Row>
      </Col>
      {onRemove && (
        <Col sm={24} md={4} lg={2}>
          <ContextMenu
            trigger={['click']}
            items={[
              {
                key: 'remove',
                label: t('remove'),
                icon: <FontIcon name="delete" color="thunderbird" />,
                onClick: onRemove,
              },
            ]}
          >
            <Button icon="more_vert" type="text" />
          </ContextMenu>
        </Col>
      )}
    </Row>
  );
}
