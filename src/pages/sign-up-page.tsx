import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Form, Row } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { RouterPath } from 'routers/router-path';
import { Input } from 'components/form-ui/input';
import { Button } from 'components/form-ui/button';
import { LanguageDropdown } from 'components/language-dropdown';
import { SignInLayout } from 'components/layouts/sign-in-layout';
import { Logo } from 'components/logo';

export function SignUpPage() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const password = Form.useWatch('password', form);

  const initialValues: Auth.RegisterUserRequest = {
    email: '',
    password: '',
  };

  const checkConfirmPassword = (_: App.Data, value: string[]) => {
    if (value && value === password) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(t('confirm_password_does_not_match')));
  };

  const onFinish = (data: Auth.RegisterUserRequest) => {
    setLoading(true);
    // signUpRequest(data)
    //   .then((res: App.Response<App.UserInfo>) => {
    //     if (res.data) {
    //       navigate(RouterPath.signIn);
    //       notifySuccess(t('the_account_has_been_successfully_registered'));
    //     }
    //   })
    //   .finally(() => setLoading(false));
  };

  return (
    <SignInLayout>
      <div className="guest-form">
        <Form
          key="sign-in"
          autoComplete="off"
          form={form}
          initialValues={initialValues}
          onFinish={onFinish}
        >
          <Row className="sign-in" gutter={[8, 8]}>
            <Col span={24}>
              <h3 className="sign-in__title">{t('sign_up')}</h3>
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
                  {
                    min: 4,
                    message: t('field_require_min_characters_message', {
                      field: t('password'),
                      number: 4,
                    }),
                  },
                ]}
              />
            </Col>
            <Col span={24}>
              <Input
                label={t('confirm_password')}
                placeholder={t('enter_confirm_password')}
                name="confirmPassword"
                password
                size="large"
                maxLength={255}
                rules={[
                  {
                    required: true,
                    message: t('confirm_password_field_required'),
                  },
                  {
                    min: 4,
                    message: t('field_require_min_characters_message', {
                      field: t('confirm_password'),
                      number: 4,
                    }),
                  },
                  {
                    validator: checkConfirmPassword,
                  },
                ]}
              />
            </Col>
            <Col span={24}>
              <Button
                label={t('sign_up')}
                type="primary"
                size="medium"
                className="sign-in__submit"
                buttonType="submit"
                loading={loading}
              />
            </Col>
          </Row>
          <Col span={24} className="sign-in__sign-up">
            <p>{t('already_have_account')}</p>
            <Link to={RouterPath.signIn}>{t('sign_in_now')}</Link>
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
