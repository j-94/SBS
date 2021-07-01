import React from "react";
import PageHead from "components/head";
import DocsLayout from "components/layouts/docs";
import { PageHeader } from "components/docs";

import { AdBox } from "analytics/ads";

const BuildView = () => {
  return (
    <DocsLayout>
      <PageHead title="Build" />
      <PageHeader>Build</PageHeader>

      <AdBox />
    </DocsLayout>
  );
};

export default BuildView;
