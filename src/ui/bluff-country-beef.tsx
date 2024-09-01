import { FC, PropsWithChildren } from "hono/jsx";

type EmailProps = { mailto: string };
const Email: FC<EmailProps> = ({ mailto }) => (
  <a href={`mailto:${mailto}`} class="text-blue-600 hover:underline">
    {mailto}
  </a>
);

type PairProps = { left: string; right: string };
const Pair: FC<PairProps> = ({ left, right }) => (
  <div class="mb-2">
    <dt class="font-semibold">{left}</dt>
    <dd class="ml-4">{right}</dd>
  </div>
);

type SectionProps = PropsWithChildren<{ title: string }>;
const Section: FC<SectionProps> = ({ title, children }) => (
  <section class="mb-8">
    <h2 class="text-2xl font-bold mb-4 text-green-800">{title}</h2>
    {children}
  </section>
);

export default () => (
  <main class="max-w-4xl mx-auto px-4 py-8 bg-green-50">
    <h1 class="text-4xl font-bold mb-8 text-center text-green-900">Bluff Country Beef</h1>

    <Section title="Now accepting reservations!">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <p class="mb-4">
          Email <Email mailto="contact@bluffcountrybeef.com" /> with your name,
          phone number, and the quantity (see{" "}
          <a href="#PurchasingBeef" class="text-blue-600 hover:underline">Purchasing Beef</a>) you are interested in
          reserving. We will respond within 1-3 days with the processing dates we
          have available and next steps! Thank you!
        </p>
      </div>
    </Section>

    <Section title="Meet the Farmers">
      <div class="flex flex-col md:flex-row items-center">
        <img src="/images/farmers.jpg" alt="Randy and Tanna Trogstad" class="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
        <p>
          Hi! We are Randy and Tanna Trogstad and we own and operate our family
          farm in Fillmore County, Minnesota, about 30 miles SE of Rochester. Our
          land has been farmed by the Trogstad family for over 100 years and we
          take great pride in caring for the land and the livestock we raise on
          it. In addition to our love for all things farming, we also love to
          spend time with our children, Ryan and Allison, and their families. We
          occasionally take a break from the farm on a sunny day to ride our
          motorcycle and enjoy the beauty of the landscape around us. We feel very
          blessed to live and work in the beautiful Mississippi River Valley
          a.k.a. Bluff Country!
        </p>
      </div>
    </Section>

    <Section title="About the Cattle">
      <div class="flex flex-col md:flex-row items-center">
        <p class="md:w-2/3 md:mr-6">
          We raise a small herd of LIM-FLEX beef cattle, which are a combination
          of Limousin and Angus breeds. Limousin produce high volumes of lean meat
          and Angus produce heavily marbled meat. We believe the LIM-FLEX genetic
          combination is the key to flavorful, tender, and nutritious beef! All
          animals are raised from birth to finish on our farm and eat pasture
          grass, as well as hay and corn that is grown on our family farm. You can
          rest assured that these animals receive great quality care while on our
          farm!
        </p>
        <img src="/images/cattle.jpg" alt="LIM-FLEX cattle" class="w-full md:w-1/3 rounded-lg mt-4 md:mt-0" />
      </div>
    </Section>

    <Section title="Purchasing Beef">
      <p class="mb-4">
        Buying meat in bulk can be a large upfront investment but is a really
        great way to save money in the long-term as the price per lb is averaged
        for ALL cuts of meat. For example: steaks, roasts, and ribs are about
        the same price as you would pay for just ground beef in the grocery
        store.
      </p>

      <h3 class="text-xl font-semibold mb-2">Terminology</h3>
      <dl class="bg-white p-4 rounded-lg shadow-sm mb-4">
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

    <Section title="Frequently Asked Questions">
      <dl class="bg-white p-4 rounded-lg shadow-sm">
        <Pair
          left="Will you sell less than a quarter?"
          right="The smallest we will sell is a quarter of beef, but you can always split your purchase with other people on your own. We have many families that purchase by the whole or half for cost savings and then split between themselves and friends."
        />
        <Pair
          left="Can you ship the meat to us?"
          right="We cannot ship as they are live animal purchases and not USDA processed."
        />
      </dl>
    </Section>
  </main>
);
