// import React from 'react';

// import { getConfig } from '@edx/frontend-platform';
// import { breakpoints } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import MediaQuery from 'react-responsive';

// import { DefaultLargeLayout, DefaultMediumLayout, DefaultSmallLayout } from './components/default-layout';
// import {
//   ImageExtraSmallLayout, ImageLargeLayout, ImageMediumLayout, ImageSmallLayout,
// } from './components/image-layout';
// import { AuthLargeLayout, AuthMediumLayout, AuthSmallLayout } from './components/welcome-page-layout';

const BaseContainer = ({ children, showWelcomeBanner, fullName }) => {
  // const enableImageLayout = getConfig().ENABLE_IMAGE_LAYOUT;

  // if (enableImageLayout) {
  //   return (
  //     <div className="layout">
  //       <MediaQuery maxWidth={breakpoints.extraSmall.maxWidth - 1}>
  //         {showWelcomeBanner ? <AuthSmallLayout fullName={fullName} /> : <ImageExtraSmallLayout />}
  //       </MediaQuery>
  //       <MediaQuery minWidth={breakpoints.small.minWidth} maxWidth={breakpoints.small.maxWidth - 1}>
  //         {showWelcomeBanner ? <AuthSmallLayout fullName={fullName} /> : <ImageSmallLayout />}
  //       </MediaQuery>
  //       <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
  //         {showWelcomeBanner ? <AuthMediumLayout fullName={fullName} /> : <ImageMediumLayout />}
  //       </MediaQuery>
  //       <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
  //         {showWelcomeBanner ? <AuthLargeLayout fullName={fullName} /> : <ImageLargeLayout />}
  //       </MediaQuery>
  //       <div className={classNames('content', { 'align-items-center mt-0': showWelcomeBanner })}>
  //         {children}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <main style={{ minHeight: '100vh' }}>
      <div className="main-container">
        <div class="hero-section">
          <div class="hero-glow"></div>
          <div class="hero-card">
            <h1 class="hero-title">
              Bắt Đầu Học<br/>
              <span class="hero-gradient-text">Cùng Chúng Tôi</span>
            </h1>
            <p class="hero-desc">
              Tham gia cùng hàng ngàn học viên, được hỗ trợ tư vấn cùng các chuyên gia hàng đầu.
            </p>
            <div class="hero-stats">
              <div class="stat-avatars">
                <img style={{height: "50px", marginRight: "10px"}} src="http://local.openedx.io:8000/static/tutor-edx-mytheme/images/cusc-logo.png" alt="" />
                <img style={{height: "50px"}} src="http://local.openedx.io:8000/static/tutor-edx-mytheme/images/ctu-logo.png" alt="" />
              </div>
              <div>
                <div class="stat-text-title">36000+ Học viên</div>
                <div class="stat-text-sub">Vẫn đang phát triển từng ngày</div>
              </div>
            </div>
          </div>
        </div>

        <div className={classNames('auth-form', { 'align-items-center mt-0': showWelcomeBanner })}>
          {children}
        </div>
      </div>
    </main>
  );
};

BaseContainer.defaultProps = {
  showWelcomeBanner: false,
  fullName: null,
};

BaseContainer.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeBanner: PropTypes.bool,
  fullName: PropTypes.string,
};

export default BaseContainer;
