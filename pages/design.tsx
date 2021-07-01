import React from "react";
import PageHead from "components/head";
import DocsLayout from "components/layouts/docs";
import { PageHeader } from "components/docs";

import { AdBox } from "analytics/ads";

const designView = () => {
  return (
    <DocsLayout>
      <PageHead title="design" />
      <PageHeader>design</PageHeader>
      <AdBox />
    </DocsLayout>
  );
};

export default designView;
