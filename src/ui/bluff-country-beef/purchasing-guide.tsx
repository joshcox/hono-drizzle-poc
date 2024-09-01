import { FC } from "hono/jsx";
import { Button, Card, Email, Grid, Pair, Section } from "./components";
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

    {/* New Pickup and Delivery Section */}
    <Section title="Pickup and Delivery Options">
      <p class="mb-4">
        We offer flexible options for getting your Bluff Country Beef to your table. Choose the method that works best for you:
      </p>
      <Grid cols={2}>
        <Card title="Farm Pickup">
          <p>Pick up your order directly from our farm in Fillmore County. This option allows you to see where your beef comes from and meet the farmers who raised it.</p>
          <ul class="list-disc list-inside mt-2">
            <li>Available by appointment</li>
            <li>Flexible scheduling</li>
            <li>Tour our farm (optional)</li>
          </ul>
        </Card>
        <Card title="Local Delivery">
          <p>We offer delivery to select locations within a 50-mile radius of our farm.</p>
          <ul class="list-disc list-inside mt-2">
            <li>Minimum order: Quarter beef</li>
            <li>Delivery fee may apply</li>
            <li>Scheduled on specific dates each month</li>
          </ul>
        </Card>
      </Grid>
      <div class="mt-6 bg-base-200 p-4 rounded-lg">
        <h3 class="text-xl font-semibold mb-2">Important Note on Shipping</h3>
        <p>
          Due to the nature of our product and our commitment to freshness, we do not offer shipping services. Our beef is sold as live animal purchases and is not USDA processed, which prevents us from shipping to ensure the highest quality and compliance with food safety regulations.
        </p>
      </div>
    </Section>

    {/* New Storage and Preparation Tips Section */}
    <Section title="Storage and Preparation Tips">
      <p class="mb-4">
        To ensure you get the most out of your Bluff Country Beef purchase, follow these storage and preparation tips:
      </p>
      <Grid cols={2}>
        <Card title="Proper Storage">
          <ul class="list-disc list-inside">
            <li>Keep beef frozen at 0°F (-18°C) or below for best quality</li>
            <li>Use freezer paper, plastic wrap, or vacuum sealing for long-term storage</li>
            <li>Label packages with cut and date for easy organization</li>
            <li>Use ground beef within 4 months, steaks within 6-12 months for best quality</li>
          </ul>
        </Card>
        <Card title="Thawing Methods">
          <ul class="list-disc list-inside">
            <li>Refrigerator: Slow but safest method (24 hours per 5 lbs)</li>
            <li>Cold water: Faster method (30 minutes per 1 lb)</li>
            <li>Microwave: Quick method for immediate cooking</li>
            <li>Never thaw meat on the counter at room temperature</li>
          </ul>
        </Card>
        <Card title="Cooking Tips">
          <ul class="list-disc list-inside">
            <li>Let steaks come to room temperature before cooking</li>
            <li>Use a meat thermometer to ensure proper doneness</li>
            <li>Let meat rest after cooking to retain juices</li>
            <li>Experiment with different cooking methods: grilling, roasting, braising</li>
          </ul>
        </Card>
        <Card title="Beef Cut Guide">
          <p>Different cuts require different cooking methods:</p>
          <ul class="list-disc list-inside">
            <li>Tender cuts (ribeye, sirloin): High-heat methods like grilling</li>
            <li>Tough cuts (chuck, brisket): Slow-cooking methods like braising</li>
            <li>Ground beef: Versatile for burgers, meatloaf, tacos, etc.</li>
          </ul>
        </Card>
      </Grid>
      <div class="mt-6 text-center">
        <Button href="/recipes" variant="primary">Check Out Our Beef Recipes</Button>
      </div>
    </Section>

    <Section title="Ready to Order?">
      <p class="bg-green-100 p-4 rounded-lg">
        To place your order or discuss pickup/delivery options, please email us at <Email mailto="contact@bluffcountrybeef.com" /> or call us at (555) 123-4567. We'll be happy to answer any questions and help you with your purchase!
      </p>
    </Section>
  </Layout>
);

export default PurchasingGuidePage;