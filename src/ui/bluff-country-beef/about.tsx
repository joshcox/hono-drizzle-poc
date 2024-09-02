import { FC } from "hono/jsx";
import { Card, Grid, Section } from "./components";
import Layout from "./layout";

const AboutPage: FC = () => (
  <Layout title="About Us | Bluff Country Beef">
    <Section title="Our Rich History">
      <div class="flex flex-col md:flex-row items-center mb-8">
        <img src="/images/gravel-drive.jpg" alt="Historical Trogstad Farm" class="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <h3 class="text-2xl font-bold mb-4">A Century of Farming Excellence</h3>
          <p class="mb-4">
            The Trogstad family has been an integral part of Fillmore County's agricultural landscape for over 100 years. Our journey began in 1920 when Ole Trogstad, a Norwegian immigrant, purchased the initial 80 acres that would become the foundation of our farm.
          </p>
          <p>
            Through the years, each generation has built upon Ole's legacy, expanding our land, improving our practices, and maintaining a steadfast commitment to quality and sustainability.
          </p>
        </div>
      </div>
    </Section>

    <Section title="The Trogstad Family Legacy">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h4 class="text-xl font-bold">1920 - The Beginning</h4>
            <p>Ole Trogstad establishes the farm with 80 acres of land.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h4 class="text-xl font-bold">1950s - Expansion</h4>
            <p>Second generation expands the farm and introduces cattle raising.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h4 class="text-xl font-bold">1980s - Modernization</h4>
            <p>Third generation implements modern farming techniques and focuses on sustainable practices.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h4 class="text-xl font-bold">2000s - LIM-FLEX Introduction</h4>
            <p>Randy and Tanna Trogstad introduce LIM-FLEX cattle, combining tradition with innovation.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h4 class="text-xl font-bold">Today - Continuing the Legacy</h4>
            <p>The Trogstad family continues to provide high-quality, ethically raised beef to the community.</p>
          </div>
        </div>
      </div>
    </Section>

    {/* New Mission and Values Section */}
    <Section title="Our Mission and Values">
      <div class="mb-8">
        <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
        <p class="mb-4">
          At Bluff Country Beef, our mission is to provide high-quality, ethically raised beef to our community while preserving the land and agricultural heritage of Fillmore County for future generations. We strive to maintain the highest standards of animal welfare, environmental stewardship, and customer satisfaction.
        </p>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4">Our Core Values</h3>
        <Grid cols={2}>
          <Card title="Quality">
            <p>We are committed to producing the highest quality beef through careful breeding, ethical raising practices, and meticulous processing.</p>
          </Card>
          <Card title="Sustainability">
            <p>We implement sustainable farming practices to preserve our land, protect natural resources, and minimize our environmental impact.</p>
          </Card>
          <Card title="Animal Welfare">
            <p>We prioritize the health and well-being of our cattle, ensuring they are raised in humane conditions with proper care and nutrition.</p>
          </Card>
          <Card title="Community">
            <p>We value our role in the local community and strive to contribute positively through job creation, education, and community involvement.</p>
          </Card>
          <Card title="Transparency">
            <p>We believe in open communication with our customers about our farming practices, allowing them to make informed decisions about their food.</p>
          </Card>
          <Card title="Innovation">
            <p>While respecting traditional farming methods, we continually seek innovative ways to improve our practices and product quality.</p>
          </Card>
        </Grid>
      </div>
    </Section>

    <Section title="Meet the Farmers">
      <div class="flex flex-col md:flex-row items-center">
        <img src="/images/randy-calf.jpg" alt="Randy and Tanna Trogstad" class="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <p class="mb-4">
            Hi! We are Randy and Tanna Trogstad and we own and operate our family
            farm in Fillmore County, Minnesota, about 30 miles SE of Rochester. Our
            land has been farmed by the Trogstad family for over 100 years and we
            take great pride in caring for the land and the livestock we raise on
            it.
          </p>
          <p>
            In addition to our love for all things farming, we also love to
            spend time with our children, Ryan and Allison, and their families. We
            occasionally take a break from the farm on a sunny day to ride our
            motorcycle and enjoy the beauty of the landscape around us. We feel very
            blessed to live and work in the beautiful Mississippi River Valley
            a.k.a. Bluff Country!
          </p>
        </div>
      </div>
    </Section>
  </Layout>
);

export default AboutPage;