import { FC } from "hono/jsx";

const Email = (props: { mailto: string }) => (
  <a href={`mailto:${props.mailto}`}>{props.mailto}</a>
);

const Pair: FC<{ left: string; right: string }> = ({ left, right }) => (
  <div>
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

export default () => (
  <main>
    <section>
      <h2>Now accepting reservations!</h2>
      <p>
        Email <Email mailto="contact@bluffcountrybeef.com" /> with your name,
        phone number, and the quantity (see{" "}
        <a href="#PurchasingBeef">Purchasing Beef</a>) you are interested in
        reserving. We will respond within 1-3 days with the processing dates we
        have available and next steps! Thank you!
      </p>
    </section>

    <section>
      <h2>Meet the Farmers</h2>
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
    </section>
    <section>
      <h2>About the Cattle</h2>
      <p>
        We raise a small herd of LIM-FLEX beef cattle, which are a combination
        of Limousin and Angus breeds. Limousin produce high volumes of lean meat
        and Angus produce heavily marbled meat. We believe the LIM-FLEX genetic
        combination is the key to flavorful, tender, and nutritious beef! All
        animals are raised from birth to finish on our farm and eat pasture
        grass, as well as hay and corn that is grown on our family farm. You can
        rest assured that these animals receive great quality care while on our
        farm!
      </p>
      <p>
        We process our animals when they have gained adequate weight. We use a
        local processing facility that we know and trust, and we will transport
        the live animals from our farm to the facility for you.
      </p>
    </section>
    <section>
      <h2>Purchasing Beef</h2>
      <p>
        Buying meat in bulk can be a large upfront investment but is a really
        great way to save money in the long-term as the price per lb is averaged
        for ALL cuts of meat. For example: steaks, roasts, and ribs are about
        the same price as you would pay for just ground beef in the grocery
        store.
      </p>

      <h3>Terminology</h3>
      <ul>
        <li>
          <Pair
            left="Live weight"
            right="the weight of the animal when it arrives for processing"
          />
        </li>
        <li>
          <Pair
            left="Dressed weight"
            right="the weight after the non-edible portions of the animal have been removed"
          />
        </li>
        <li>
          <Pair
            left="Packaged weight"
            right="the weight of the actual cuts of meat that you will bring home"
          />
        </li>
      </ul>

      <h3>Cuts of Meat</h3>
      <p>
        Quarters are cut as “side-splits” which means we do not reserve as a
        front/back quarter. Each quarter will be 1/4 of the total meat and
        include all available cuts, such as: T-bone, Ribeye, Sirloin, Round
        Steak, Porterhouse Steak, Roast, Ribs, Stew Meat, Sirloin tips, Brisket,
        Skirt Steak, Flank Steak, Ground Beef, Soup Bones, and Organ Meats. Many
        households use a lot of ground beef and are not used to cooking as many
        steaks. You have the option to have the processor grind some of the
        steak cuts into ground beef. We recommend enjoying and learning about
        all the different cuts of meat on your first purchase, though! You can
        build an appreciation for how each cut has its own unique flavor and
        texture. We will soon be adding a recipes tab to share how we like to
        prepare and enjoy many different cuts of beef.
      </p>
      <h3>Freezer Capacity</h3>
      <p>
        The general rule of thumb for freezer capacity is approximately 30 lbs
        of meat per cubic foot of freezer space. Based on that rule and our
        estimates above for the average size animal from our farm, we recommend
        a minimum of 5 cubic foot freezer for a quarter, 10 cubic foot freezer
        for a half, or a 19 cubic foot freezer for a whole. Your meat will stay
        fresh for more than a year.
      </p>
      <h3>Payment and Pickup</h3>
      <p>
        We will collect a non-refundable deposit at the time of booking, which
        will be applied to the final cost of the live animal purchase. The
        balance for the live animal purchase is due to us the week of processing
        and we will contact you regarding that final payment amount. We accept
        cash, some local checks, Venmo, and PayPal. All payments must be made
        prior to picking up your beef.
      </p>
      <p>
        The processing facility will contact you separately and will communicate
        directly with you on your custom cut and packaging, as well as pickup
        and payment to them for processing fees.
      </p>
      <h3>Ready to Order?</h3>
      <p>
        Email us today at <Email mailto="contact@bluffcountrybeef.com" /> to
        place your deposit and reserve your beef!
      </p>
    </section>
    <section>
      <h2>Frequently Asked Questions</h2>
      <ul>
        <li>
          <Pair
            left="Will you sell less than a quarter?"
            right="The smallest we will sell is a quarter of beef, but you can always split your purchase with other people on your own. We have many families that purchase by the whole or half for cost savings and then split between themselves and friends."
          />
        </li>
        <li>
          <Pair
            left="Can you ship the meat to us?"
            right="We cannot ship as they are live animal purchases and not USDA processed."
          />
        </li>
      </ul>
    </section>
  </main>
);
