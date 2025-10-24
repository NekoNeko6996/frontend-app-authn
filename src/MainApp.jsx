import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { AppProvider } from '@edx/frontend-platform/react';
import { Helmet } from 'react-helmet';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  EmbeddedRegistrationRoute, NotFoundPage, registerIcons, UnAuthOnlyRoute, Zendesk,
} from './common-components';
import configureStore from './data/configureStore';
import {
  AUTHN_PROGRESSIVE_PROFILING,
  LOGIN_PAGE,
  PAGE_NOT_FOUND,
  PASSWORD_RESET_CONFIRM,
  RECOMMENDATIONS,
  REGISTER_EMBEDDED_PAGE,
  REGISTER_PAGE,
  RESET_PAGE,
} from './data/constants';
import { updatePathWithQueryParams } from './data/utils';
import { ForgotPasswordPage } from './forgot-password';
import Logistration from './logistration/Logistration';
import { ProgressiveProfiling } from './progressive-profiling';
import { RecommendationsPage } from './recommendations';
import { RegistrationPage } from './register';
import { ResetPasswordPage } from './reset-password';

import './index.scss';
import { CustomFooter, CustomHeader } from '@nekoneko6996/cusc-custom-brand';

import { primaryNav, ctuLogoImgSrc, cuscLogoImgSrc } from './auth-header/auth-header';

registerIcons();

const MainApp = () => {

  // call func to get primary nav items
  const primary = primaryNav();
  const cuscLogo = cuscLogoImgSrc();
  const ctuLogo = ctuLogoImgSrc();

  const logoRedirectURL = [
    { firstLogo: "https://www.ctu.edu.vn/" },
    { secondLogo: "https://cusc.ctu.edu.vn/cms/" }
  ];

  return (
    <AppProvider store={configureStore()}>
      <Helmet>
        <link rel="shortcut icon" href={getConfig().FAVICON_URL} type="image/x-icon" />
      </Helmet>
      {getConfig().ZENDESK_KEY && <Zendesk />}
      <CustomHeader firstLogo={ctuLogo} secondLogo={cuscLogo} primaryNav={primary} secondaryNav={[]} showLoginButtons={false} />
      <Routes>
        <Route path="/" element={<Navigate replace to={updatePathWithQueryParams(REGISTER_PAGE)} />} />
        <Route
          path={REGISTER_EMBEDDED_PAGE}
          element={<EmbeddedRegistrationRoute><RegistrationPage /></EmbeddedRegistrationRoute>}
        />
        <Route
          path={LOGIN_PAGE}
          element={
            <UnAuthOnlyRoute><Logistration selectedPage={LOGIN_PAGE} /></UnAuthOnlyRoute>
          }
        />
        <Route path={REGISTER_PAGE} element={<UnAuthOnlyRoute><Logistration /></UnAuthOnlyRoute>} />
        <Route path={RESET_PAGE} element={<UnAuthOnlyRoute><ForgotPasswordPage /></UnAuthOnlyRoute>} />
        <Route path={PASSWORD_RESET_CONFIRM} element={<ResetPasswordPage />} />
        <Route path={AUTHN_PROGRESSIVE_PROFILING} element={<ProgressiveProfiling />} />
        <Route path={RECOMMENDATIONS} element={<RecommendationsPage />} />
        <Route path={PAGE_NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to={PAGE_NOT_FOUND} />} />
      </Routes>
      <CustomFooter firstLogo={cuscLogo} secondLogo={ctuLogo} firstLogoRedirectURL={logoRedirectURL.secondLogo} secondLogoRedirectURL={logoRedirectURL.firstLogo} />
    </AppProvider>
  )
};

export default MainApp;
