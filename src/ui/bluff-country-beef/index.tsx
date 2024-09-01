import { FC } from "hono/jsx";
import { Button, Card, Email, Grid, Section } from "./components";
import Layout from "./layout";

const HomePage: FC = () => (
  <Layout title="Bluff Country Beef">
    <div class="hero min-h-screen" style="background-image: url(/images/farm-silhouette.jpg);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Welcome to Bluff Country Beef</h1>
          <p class="mb-5">Premium Farm-Raised Beef, Straight from Our Family to Yours</p>
          <p class="mb-5">Experience the rich flavors of our LIM-FLEX cattle, raised with care in the beautiful bluffs of Fillmore County, Minnesota.</p>
          <Button href="/about">Learn More About Us</Button>
        </div>
      </div>
    </div>

    <Section title="Our Story">
      <div class="flex flex-col md:flex-row items-center">
        <img src="/images/farmers.jpg" alt="Randy and Tanna Trogstad" class="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <p class="mb-4">
            For over a century, the Trogstad family has been nurturing the land and raising cattle in the heart of Fillmore County, Minnesota. Our commitment to sustainable farming practices and animal welfare has been passed down through generations.
          </p>
          <p class="mb-4">
            At Bluff Country Beef, we believe in:
          </p>
          <ul class="list-disc list-inside mb-4">
            <li>Ethical and humane treatment of our animals</li>
            <li>Sustainable farming practices that preserve our land for future generations</li>
            <li>Producing high-quality, flavorful beef for our community</li>
            <li>Maintaining the rich agricultural heritage of Bluff Country</li>
          </ul>
          <Button href="/about" variant="secondary">Read Our Full Story</Button>
        </div>
      </div>
    </Section>

    <Section title="Our LIM-FLEX Cattle">
      <div class="flex flex-col md:flex-row items-center bg-base-200 rounded-lg p-6">
        <img src="/images/lim-flex-cattle.jpg" alt="LIM-FLEX Cattle" class="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <h3 class="text-2xl font-bold mb-4">Superior Quality Beef</h3>
          <p class="mb-4">
            Our LIM-FLEX cattle are a carefully bred combination of Limousin and Angus, resulting in beef that's both lean and well-marbled. This unique blend offers:
          </p>
          <ul class="list-disc list-inside mb-4">
            <li>Exceptional tenderness and flavor</li>
            <li>Optimal balance of lean meat and marbling</li>
            <li>High nutritional value</li>
            <li>Consistent quality in every cut</li>
          </ul>
          <p class="mb-4">
            Raised on our family farm, our cattle graze on lush pastures and are fed a diet of hay and corn grown right here on our land. This ensures the highest quality beef for your table.
          </p>
          <Button href="/our-cattle" variant="primary">Learn More About Our Cattle</Button>
        </div>
      </div>
    </Section>

    <Section title="Now accepting reservations!">
      <Card title="Reserve Your Beef Today!">
        <p>
          Email <Email mailto="contact@bluffcountrybeef.com" /> with your name, phone number, and the quantity you are interested in reserving. We will respond within 1-3 days with the processing dates we have available and next steps! Thank you!
        </p>
        <div class="card-actions justify-end mt-4">
          <Button href="/purchasing-guide" variant="secondary">Learn More About Purchasing</Button>
        </div>
      </Card>
    </Section>

    <Section title="Why Choose Bluff Country Beef?">
      <Grid>
        <Card title="Experience">
          <p>100+ years of family farming experience</p>
        </Card>
        <Card title="Quality">
          <p>LIM-FLEX beef for optimal flavor and nutrition</p>
        </Card>
        <Card title="Care">
          <p>Pasture-raised on our family farm</p>
        </Card>
        <Card title="Savings">
          <p>Bulk purchasing options for cost savings</p>
        </Card>
      </Grid>
    </Section>
  </Layout>
);

export default HomePage;