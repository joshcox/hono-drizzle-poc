import { FC } from "hono/jsx";
import { Email, Section } from "./components";
import Layout from "./layout";

const HomePage: FC = () => (
  <Layout title="Bluff Country Beef">
    <Section title="Welcome to Bluff Country Beef">
      <div class="hero p-6 rounded-lg shadow-md">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Welcome to Bluff Country Beef</h1>
            <p class="py-6">
              We are a family-owned farm in Fillmore County, Minnesota, offering high-quality LIM-FLEX beef. Our cattle are raised with care on our family farm, ensuring flavorful, tender, and nutritious meat for your table.
            </p>
            <a href="/about" class="btn btn-primary">Learn More About Us</a>
          </div>
        </div>
      </div>
    </Section>

    <Section title="Now accepting reservations!">
      <div class="card shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Reserve Your Beef Today!</h2>
          <p>
            Email <Email mailto="contact@bluffcountrybeef.com" /> with your name, phone number, and the quantity you are interested in reserving. We will respond within 1-3 days with the processing dates we have available and next steps! Thank you!
          </p>
          <div class="card-actions justify-end">
            <a href="/purchasing-guide" class="btn btn-secondary">Learn More About Purchasing</a>
          </div>
        </div>
      </div>
    </Section>

    <Section title="Why Choose Bluff Country Beef?">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Experience</div>
          <div class="stat-value">100+ years</div>
          <div class="stat-desc">Family farming experience</div>
        </div>
        <div class="stat">
          <div class="stat-title">Quality</div>
          <div class="stat-value">LIM-FLEX</div>
          <div class="stat-desc">Optimal flavor and nutrition</div>
        </div>
        <div class="stat">
          <div class="stat-title">Care</div>
          <div class="stat-value">Pasture-raised</div>
          <div class="stat-desc">On our family farm</div>
        </div>
        <div class="stat">
          <div class="stat-title">Savings</div>
          <div class="stat-value">Bulk purchasing</div>
          <div class="stat-desc">Options for cost savings</div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default HomePage;