import React from "react";
import PageHead from "components/head";
import DocsLayout from "components/layouts/docs";
import { PageHeader } from "components/docs";

import { AdBox } from "analytics/ads";

const InstallationView = () => {
  return (
    <DocsLayout>
      <PageHead title="Installation" />
      <PageHeader>Installation</PageHeader>
      <AdBox />
    </DocsLayout>
  );
};

export default InstallationView;
