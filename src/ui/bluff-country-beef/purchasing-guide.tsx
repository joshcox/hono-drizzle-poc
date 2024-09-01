import { FC } from "hono/jsx";
import { Email, Pair, Section } from "./components";
import Layout from "./layout";

const PurchasingGuidePage: FC = () => (
  <Layout title="Purchasing Guide | Bluff Country Beef">
    <Section title="Purchasing Beef">
      <p class="mb-4">
        Buying meat in bulk can be a large upfront investment but is a really
        great way to save money in the long-term as the price per lb is averaged
        for ALL cuts of meat. For example: steaks, roasts, and ribs are about
        the same price as you would pay for just ground beef in the grocery
        store.
      </p>

      <h3 class="text-xl font-semibold mb-2">Terminology</h3>
      <dl class="p-4 rounded-lg shadow-sm mb-4">
        <Pair left="Live weight" right="the weight of the animal when it arrives for processing" />
        <Pair left="Dressed weight" right="the weight after the non-edible portions of the animal have been removed" />
        <Pair left="Packaged weight" right="the weight of the actual cuts of meat that you will bring home" />
      </dl>

      <h3 class="text-xl font-semibold mb-2">Cuts of Meat</h3>
      <p class="mb-4">
        Quarters are cut as "side-splits" which means we do not reserve as a
        front/back quarter. Each quarter will be 1/4 of the total meat and
        include all available cuts, such as: T-bone, Ribeye, Sirloin, Round
        Steak, Porterhouse Steak, Roast, Ribs, Stew Meat, Sirloin tips, Brisket,
        Skirt Steak, Flank Steak, Ground Beef, Soup Bones, and Organ Meats.
      </p>

      <h3 class="text-xl font-semibold mb-2">Ready to Order?</h3>
      <p class="bg-green-100 p-4 rounded-lg">
        Email us today at <Email mailto="contact@bluffcountrybeef.com" /> to
        place your deposit and reserve your beef!
      </p>
    </Section>
  </Layout>
);

export default PurchasingGuidePage;