import { useEffect } from 'react';
import { Formik } from 'formik';
import { authLogin } from 'redux/auth/auth.operations';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import * as STC from './LoginForm.styled';
import logInIcon from '../../images/sprite.svg';
import { toast } from 'react-toastify';
import loginRocketSvg from '../../images/Icons/login-rocket-goose.svg';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { useState } from 'react';
import { PASSWORD_REGEX } from '../../constants/joiRegex';
import icon from '../../images/sprite.svg';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/auth/auth.selectors';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email('This is an ERROR email').required('Required'),

  password: Yup.string()
    .matches(PASSWORD_REGEX, 'This is an ERROR password')
    .min(6, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [isPass, setIsPass] = useState(true);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    document.body.classList.remove('dark-theme');
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await dispatch(
              authLogin({
                email: values.email,
                password: values.password,
              })
            ).unwrap();
            setSubmitting(false);
            resetForm();
          } catch (error) {
            setSubmitting(false);
            toast.error(
              error ||
                'It seems like your goose flew in the wrong direction. Please try again.'
            );
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <STC.Box>
            <STC.Container>
              <STC.Form onSubmit={handleSubmit}>
                <STC.Title>Log In</STC.Title>

                <STC.Label htmlFor="email">
                  <STC.Span error={errors.email} touched={touched.email}>
                    Email
                  </STC.Span>
                  <STC.Input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={event => {
                      handleBlur(event);
                    }}
                    value={values.email}
                    placeholder="Enter your email"
                    error={errors.email}
                    touched={touched.email}
                  />
                  <STC.Errors error={errors.email && touched.email}>
                    {errors.email && touched.email && (
                      <span>{errors.email}</span>
                    )}
                  </STC.Errors>
                </STC.Label>

                <STC.Label htmlFor="password">
                  <STC.Span error={errors.password} touched={touched.password}>
                    Password
                  </STC.Span>
                  <STC.Input
                    id="password"
                    type={isPass ? 'password' : 'text'}
                    required
                    name="password"
                    onChange={handleChange}
                    onBlur={event => {
                      handleBlur(event);
                    }}
                    value={values.password}
                    placeholder="Enter password"
                    error={errors.password}
                    touched={touched.password}
                  />
                  <STC.Errors error={errors.password && touched.password}>
                    {errors.password && touched.password && (
                      <span>{errors.password}</span>
                    )}
                  </STC.Errors>
                  <STC.ButtonEye
                    type="button"
                    onClick={() => {
                      isPass ? setIsPass(false) : setIsPass(true);
                    }}
                  >
                    {isPass ? (
                      <STC.SvgEye>
                        <use xlinkHref={`${icon}#closed-eye`}></use>
                      </STC.SvgEye>
                    ) : (
                      <STC.SvgEye>
                        <use xlinkHref={`${icon}#opened-eye`}></use>
                      </STC.SvgEye>
                    )}
                  </STC.ButtonEye>
                </STC.Label>

                <STC.Button type="submit" disabled={isSubmitting || isLoading}>
                  <STC.BtnSpan>Log In</STC.BtnSpan>
                  <STC.Svg>
                    <use href={`${logInIcon}#login-door-sf`} />
                  </STC.Svg>
                </STC.Button>
              </STC.Form>

              <AuthNavigate route="/register" title="Sign Up" />

              <STC.CloudSvg>
                <use href={`${logInIcon}#login-cloud`} />
              </STC.CloudSvg>
              <STC.ImgRocketSvg src={`${loginRocketSvg}`} alt="rocket" />
              <STC.GooseText>
                Quickly <STC.GooseTextAccent>come in</STC.GooseTextAccent> and{' '}
                {'\n'}write down your {'\n'}tasks for the day!
              </STC.GooseText>
            </STC.Container>
          </STC.Box>
        )}
      </Formik>
    </>
  );
};
