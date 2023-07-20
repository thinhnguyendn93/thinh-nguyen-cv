import { ConfigProvider, theme } from 'antd';
import React, { useState } from 'react';
import { Header } from './elements/header';

interface Props {
  children: React.ReactNode;
  hideScroll?: boolean;
  header?: React.ReactNode;
}

export function MasterLayout(props: Props) {
  const { children } = props;
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <div className="master-layout">
        <Header />
        <div id="page-body" className="master-body">
          {children}
        </div>
      </div>
    </ConfigProvider>
  );
}
