import { FC } from "hono/jsx";
import { Email, Section } from "./components";
import Layout from "./layout";

const HomePage: FC = () => (
  <Layout title="Bluff Country Beef">
    <Section title="Welcome to Bluff Country Beef">
      <p class="mb-4">
        We are a family-owned farm in Fillmore County, Minnesota, offering high-quality LIM-FLEX beef. Our cattle are raised with care on our family farm, ensuring flavorful, tender, and nutritious meat for your table.
      </p>
    </Section>

    <Section title="Now accepting reservations!">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <p class="mb-4">
          Email <Email mailto="contact@bluffcountrybeef.com" /> with your name,
          phone number, and the quantity you are interested in reserving. We will respond within 1-3 days with the processing dates we
          have available and next steps! Thank you!
        </p>
        <a href="/purchasing-guide" class="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
          Learn More About Purchasing
        </a>
      </div>
    </Section>

    <Section title="Why Choose Bluff Country Beef?">
      <ul class="list-disc list-inside space-y-2">
        <li>100+ years of family farming experience</li>
        <li>LIM-FLEX cattle for optimal flavor and nutrition</li>
        <li>Pasture-raised on our family farm</li>
        <li>Bulk purchasing options for cost savings</li>
      </ul>
    </Section>
  </Layout>
);

export default HomePage;