import { FC } from "hono/jsx";
import { Section } from "./components";
import Layout from "./layout";

const OurCattlePage: FC = () => (
  <Layout title="Our Cattle | Bluff Country Beef">
    <Section title="About Our LIM-FLEX Cattle">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-2/3 md:mr-6">
          <p class="mb-4">
            We raise a small herd of LIM-FLEX beef cattle, which are a combination
            of Limousin and Angus breeds. Limousin produce high volumes of lean meat
            and Angus produce heavily marbled meat. We believe the LIM-FLEX genetic
            combination is the key to flavorful, tender, and nutritious beef!
          </p>
          <p>
            All animals are raised from birth to finish on our farm and eat pasture
            grass, as well as hay and corn that is grown on our family farm. You can
            rest assured that these animals receive great quality care while on our
            farm!
          </p>
        </div>
        <img src="/images/steer.jpg" alt="LIM-FLEX cattle" class="w-full md:w-1/3 rounded-lg mt-4 md:mt-0" />
      </div>
    </Section>
  </Layout>
);

export default OurCattlePage;