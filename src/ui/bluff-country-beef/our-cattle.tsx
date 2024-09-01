import { FC } from "hono/jsx";
import { Button, Card, Grid, Section } from "./components";
import Layout from "./layout";

const OurCattlePage: FC = () => (
  <Layout title="Our Cattle | Bluff Country Beef">
    <Section title="Our LIM-FLEX Cattle">
      <div class="flex flex-col md:flex-row items-center mb-8">
        <img src="/images/lim-flex-herd.jpg" alt="LIM-FLEX Cattle Herd" class="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <h3 class="text-2xl font-bold mb-4">The Best of Both Worlds</h3>
          <p class="mb-4">
            At Bluff Country Beef, we raise LIM-FLEX cattle, a carefully bred combination of Limousin and Angus breeds. This unique blend offers the best qualities of both breeds, resulting in beef that's both lean and well-marbled.
          </p>
          <p>
            Our commitment to this breed reflects our dedication to providing our customers with the highest quality, most flavorful beef possible.
          </p>
        </div>
      </div>
    </Section>

    <Section title="LIM-FLEX Breed Characteristics">
      <Grid cols={2}>
        <Card title="Limousin Qualities">
          <ul class="list-disc list-inside">
            <li>Known for producing lean, tender meat</li>
            <li>Excellent feed efficiency</li>
            <li>Superior muscle development</li>
            <li>Calm temperament</li>
          </ul>
        </Card>
        <Card title="Angus Qualities">
          <ul class="list-disc list-inside">
            <li>Renowned for marbling and flavor</li>
            <li>Early maturity</li>
            <li>Excellent mothering abilities</li>
            <li>Adaptable to various environments</li>
          </ul>
        </Card>
      </Grid>
    </Section>

    <Section title="Benefits of LIM-FLEX Beef">
      <div class="bg-base-200 rounded-lg p-6">
        <h3 class="text-2xl font-bold mb-4">Why Choose LIM-FLEX?</h3>
        <ul class="list-disc list-inside mb-4">
          <li>Optimal balance of lean meat and marbling</li>
          <li>Consistently tender and flavorful</li>
          <li>High nutritional value</li>
          <li>Efficient growth and feed conversion</li>
          <li>Adaptable to various cooking methods</li>
        </ul>
        <p>
          Our LIM-FLEX cattle combine the best traits of both parent breeds, resulting in beef that satisfies both health-conscious consumers and flavor enthusiasts alike.
        </p>
      </div>
    </Section>

    <Section title="Our Raising Practices">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:mr-6">
          <h3 class="text-2xl font-bold mb-4">Pasture-Raised with Care</h3>
          <p class="mb-4">
            Our LIM-FLEX cattle are raised on lush pastures in the beautiful bluffs of Fillmore County, Minnesota. They graze freely on a diet of natural grasses, supplemented with hay and corn grown right here on our family farm.
          </p>
          <p class="mb-4">
            This natural, stress-free environment not only ensures the well-being of our animals but also contributes to the superior taste and quality of our beef.
          </p>
          <Button href="/purchasing-guide" variant="primary">Learn How to Purchase</Button>
        </div>
        <img src="/images/cattle-grazing.jpg" alt="LIM-FLEX Cattle Grazing" class="w-full md:w-1/2 rounded-lg mt-4 md:mt-0" />
      </div>
    </Section>

    {/* New Ethical Farming Practices Section */}
    <Section title="Our Commitment to Ethical Farming">
      <div class="bg-base-200 rounded-lg p-6">
        <h3 class="text-2xl font-bold mb-4">Sustainable and Humane Practices</h3>
        <p class="mb-4">
          At Bluff Country Beef, we believe that ethical farming practices are not just good for our cattle, but also for our customers and the environment. Our commitment to sustainability and animal welfare is at the core of everything we do.
        </p>
        <Grid cols={2}>
          <Card title="Pasture-Raised">
            <p>Our cattle roam freely on lush pastures, enjoying a natural diet and plenty of fresh air and sunshine.</p>
          </Card>
          <Card title="Sustainable Land Management">
            <p>We practice rotational grazing and other sustainable techniques to maintain soil health and biodiversity.</p>
          </Card>
          <Card title="Stress-Free Environment">
            <p>We prioritize low-stress handling techniques to ensure the well-being of our cattle throughout their lives.</p>
          </Card>
          <Card title="Local Feed Production">
            <p>Most of our cattle feed is grown right here on our farm, reducing transportation and supporting local agriculture.</p>
          </Card>
          <Card title="Humane Processing">
            <p>We work with local, family-owned processors who share our commitment to humane and ethical practices.</p>
          </Card>
        </Grid>
        <div class="mt-6">
          <p class="mb-4">
            Our ethical farming practices not only ensure the highest quality of life for our cattle but also result in superior beef for our customers. When you choose Bluff Country Beef, you're supporting a system that respects animals, the land, and our local community.
          </p>
          <Button href="/about#our-mission-and-values" variant="primary">Learn More About Our Values</Button>
        </div>
      </div>
    </Section>
  </Layout>
);

export default OurCattlePage;