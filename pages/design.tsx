import { NextPage } from "next";
import PageHead from "components/head";
import SiteLayout from "components/layouts/site";

import splitbee from "@splitbee/web";
import ToTop from "components/to-top";

splitbee.init();

const Design: NextPage = (props: any) => {
  return (
    <SiteLayout>
      <PageHead title="design in Surrey" />
    </SiteLayout>
  );
};

export default Design;
