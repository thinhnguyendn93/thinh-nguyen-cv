import { useTranslation } from 'react-i18next';
import { Carousel } from 'antd';
import { RESOURCES } from 'config/constant';
import { Logo } from 'components/logo';

export function SignInLayout(props: any) {
  const { t } = useTranslation();

  return (
    <div className="main-layout">
      <div className="guest-layout-content">
        <div className="guest-page">
          <div className="login-background">
            <Logo />
            <div className="login-background__title">{t('app_title')}</div>
            <div className="login-background__description">
              {t('app_description')}
            </div>
            <ul className="login-background__description">
              <li>{t('proxies_rental_or_sale')}</li>
              <li>{t('tools_license')}</li>
              <li>{t('emails_rental_or_sale')}</li>
              <li>{t('increase_engagement_traffic_seo')}</li>
              <li>{t('vps_rental_or_sale')}</li>
            </ul>
            <div className="login-background__cover">
              <Carousel autoplay infinite draggable>
                <img
                  src={RESOURCES.SIGN_IN_COVER}
                  alt="login-cover"
                  style={{ maxWidth: 560 }}
                />
                <img
                  src={RESOURCES.SIGN_IN_COVER}
                  alt="login-cover"
                  style={{ maxWidth: 560 }}
                />
                <img
                  src={RESOURCES.SIGN_IN_COVER}
                  alt="login-cover"
                  style={{ maxWidth: 560 }}
                />
              </Carousel>
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
