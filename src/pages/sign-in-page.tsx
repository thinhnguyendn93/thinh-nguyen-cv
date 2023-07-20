import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Form, Row } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { RouterPath } from 'routers/router-path';
import { Input } from 'components/form-ui/input';
import { Checkbox } from 'components/form-ui/checkbox';
import { Button } from 'components/form-ui/button';
import { LanguageDropdown } from 'components/language-dropdown';
import { SignInLayout } from 'components/layouts/sign-in-layout';
import { Logo } from 'components/logo';

export function SignInPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const initialValues: Auth.SignInRequest = {
    email: '',
    password: '',
    rememberMe: true,
  };

  const onFinish = (data: Auth.SignInRequest) => {
    setLoading(true);
    // signIn(data)
    //   .then((res) => {
    //     if (res.status == 200) {
    //       dispatch(authenticate(res.data));
    //       const returnURL = searchParams.get('returnURL');
    //       if (returnURL) {
    //         navigate(returnURL);
    //       } else {
    //         const lastLocation = getLastLocation();
    //         if (lastLocation.indexOf(RouterPath.signUp) > -1) {
    //           navigate(RouterPath.home);
    //         } else {
    //           navigate(lastLocation);
    //         }
    //       }
    //     }
    //   })
    //   .finally(() => setLoading(false));
  };

  return (
    <SignInLayout>
      <div className="guest-form">
        <Form
          key="sign-in"
          initialValues={initialValues}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Row className="sign-in" gutter={[8, 8]}>
            <Col span={24}>
              <h3 className="sign-in__title">{t('sign_in')}</h3>
            </Col>
            <Col span={24}>
              <Input
                label={t('email')}
                placeholder={t('enter_an_email')}
                name="email"
                size="large"
                maxLength={255}
                rules={[{ required: true, message: t('email_field_required') }]}
                autoFocus
              />
            </Col>
            <Col span={24}>
              <Input
                label={t('password')}
                placeholder={t('enter_a_password')}
                name="password"
                password
                size="large"
                maxLength={255}
                rules={[
                  { required: true, message: t('password_field_required') },
                ]}
              />
            </Col>
            <Col>
              <Checkbox name="rememberMe" label={t('remember_me')} rules={[]} />
            </Col>
            <Col className="sign-in__forgot-password" span={24}>
              <Link to={RouterPath.forgotPassword}>{t('forgot_password')}</Link>
            </Col>
            <Col span={24}>
              <Button
                label={t('sign_in')}
                type="primary"
                size="medium"
                className="sign-in__submit"
                buttonType="submit"
                loading={loading}
              />
            </Col>
          </Row>
          <Col span={24} className="sign-in__sign-up">
            <p>{t('not_account_yet')}</p>
            <Link to={RouterPath.signUp}>{t('sign_up_now')}</Link>
          </Col>
          <Col className="guest-form__choose-language" span={24}>
            <LanguageDropdown label={t('choose_a_language')} />
          </Col>
          <Col className="guest-form__copyright" span={24}>
            {t('ztech_copyright', { year: moment().year() })}
          </Col>
        </Form>
      </div>

      <div className="login-background__mobile">
        <div className="login-background__logo">
          <Logo />
          <span className="login-background__logo-text">{t('app_name')}</span>
        </div>
        <div className="login-background__title">{t('app_title')}</div>
      </div>
    </SignInLayout>
  );
}
