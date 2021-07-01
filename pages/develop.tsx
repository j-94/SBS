import React from "react";
import PageHead from "components/head";
import DocsLayout from "components/layouts/docs";
import { PageHeader } from "components/docs";

import { AdBox } from "analytics/ads";

function iframe() {
  return {
    __html: '<iframe src="public/Uc8nCBcqLWs/index.html" ></iframe>',
  };
}
const DevelopView = () => {
  return (
    <DocsLayout>
      <PageHead title="Develop" />
      <PageHeader>Develop</PageHeader>
      <AdBox />
      <div>
        <div dangerouslySetInnerHTML={iframe()} />
      </div>
    </DocsLayout>
  );
};

export default DevelopView;
