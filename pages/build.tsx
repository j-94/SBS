import { NextPage } from "next";
import PageHead from "components/head";
import SiteLayout from "components/layouts/site";

import splitbee from "@splitbee/web";
import ToTop from "components/to-top";

import ChocoForm from "components/forms/chocoform";
splitbee.init();

const Build: NextPage = (props: any) => {
  return (
    <SiteLayout>
      <PageHead title="Build in Surrey" />
      <ChocoForm />
      sdgasd
    </SiteLayout>
  );
};

// <ChocoForm />
// <Formikchakra />
// {/* <Feature1 /> */}
// <Box pt={100}></Box>

export default Build;
