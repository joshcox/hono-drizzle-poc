import { FC } from "hono/jsx";
import { Pair, Section } from "./components";
import Layout from "./layout";

const FAQPage: FC = () => (
  <Layout title="FAQ | Bluff Country Beef">
    <Section title="Frequently Asked Questions">
      <dl class="bg-white p-4 rounded-lg shadow-sm space-y-4">
        <Pair
          left="Will you sell less than a quarter?"
          right="The smallest we will sell is a quarter of beef, but you can always split your purchase with other people on your own. We have many families that purchase by the whole or half for cost savings and then split between themselves and friends."
        />
        <Pair
          left="Can you ship the meat to us?"
          right="We cannot ship as they are live animal purchases and not USDA processed."
        />
        {/* Add more FAQs as needed */}
      </dl>
    </Section>
  </Layout>
);

export default FAQPage;