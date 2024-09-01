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