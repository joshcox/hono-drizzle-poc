import { FC } from "hono/jsx";
import { Button, Card, Email, Grid, Section } from "./components";
import Layout from "./layout";

const HomePage: FC = () => (
  <Layout title="Bluff Country Beef">
    <div class="hero min-h-screen" style="background-image: url(/images/farm-silhouette.jpg);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-4xl font-bold">Welcome to our farm!</h1>
          <p class="mb-5">Providing prime quality beef straight from our family to yours. </p>
          <p class="mb-5">You'll be able to taste the difference as our Angus-Limousin cattle are bred naturally on pasture and spend their entire lives on our family farm in the beautiful bluff country of Fillmore County, Minnesota.</p>
          <Button href="/about">Learn More About Us</Button>
        </div>
      </div>
    </div>

    <Section title="Our Story">
      <div class="flex flex-col md:flex-row items-center">
        <img src="/images/rolling-corn-fields.jpg" alt="Randy and Tanna Trogstad" class="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div>
          <p class="mb-4">
            For over a century, the Trogstad family has been farming the land where Bluff Country Beef is located. Our family's commitment to ethically raising high quality nutritious beef and using sustainable farming practices has been passed down through generations.
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
        <img src="/images/steer.jpg" alt="LIM-FLEX Cattle" class="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6" />
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

    <Section title="What Our Customers Say">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <Card title="The Johnson Family">
            <p class="italic mb-4">"We've been buying beef from Bluff Country for years now. The quality is consistently excellent, and we love knowing exactly where our food comes from. It's a great value for our family!"</p>
            <div class="text-right">- Sarah Johnson</div>
          </Card>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <Card title="Local Chef Mike">
            <p class="italic mb-4">"As a chef, I'm always looking for the best ingredients. Bluff Country Beef's LIM-FLEX cattle produce some of the most flavorful and tender beef I've ever worked with. It's a game-changer for my restaurant."</p>
            <div class="text-right">- Mike Anderson, Head Chef at The Bluff Bistro</div>
          </Card>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <Card title="Health-Conscious Consumer">
            <p class="italic mb-4">"I appreciate how transparent Bluff Country Beef is about their farming practices. Knowing that the cattle are raised ethically and fed a natural diet gives me peace of mind about the meat I'm feeding my family."</p>
            <div class="text-right">- Emily Thompson</div>
          </Card>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </Section>

    {/* New CTA Section */}
    <Section title="">
      <div class="bg-primary text-primary-content rounded-lg p-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Experience Premium Beef?</h2>
        <p class="mb-6 text-lg">
          Taste the difference of our farm-raised, ethically produced LIM-FLEX beef. 
          Order now and bring the flavors of Bluff Country to your table!
        </p>
        <div class="flex justify-center space-x-4">
          <Button href="/purchasing-guide" variant="secondary">View Purchasing Options</Button>
          <Button href="/contact" variant="accent">Contact Us to Order</Button>
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