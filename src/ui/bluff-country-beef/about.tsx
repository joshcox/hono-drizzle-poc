import { FC } from "hono/jsx";
import { Section } from "./components";
import Layout from "./layout";

const AboutPage: FC = () => (
  <Layout title="About Us | Bluff Country Beef">
    <Section title="Meet the Farmers">
      <div class="flex flex-col md:flex-row items-center">
        <img src="/images/farmers.jpg" alt="Randy and Tanna Trogstad" class="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
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