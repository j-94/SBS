import React from "react";
import PageHead from "components/head";
import DocsLayout from "components/layouts/docs";
import { PageHeader } from "components/docs";

import { AdBox } from "analytics/ads";
import IframeResizer from "iframe-resizer-react";

const DevelopView = () => {
  return (
    <DocsLayout>
      <PageHead title="Develop" />
      <PageHeader>Develop</PageHeader>
      <AdBox />
      <IframeResizer
        log
        src="https://test-3o42g415s-jasedgw.vercel.app/?m=Uc8nCBcqLWs"
        style={{ width: "1px", minWidth: "100%" }}
      />
    </DocsLayout>
  );
};

export default DevelopView;
