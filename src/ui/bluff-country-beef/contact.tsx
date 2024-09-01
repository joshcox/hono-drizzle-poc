import { FC } from "hono/jsx";
import { Email, Section } from "./components";
import Layout from "./layout";

const ContactPage: FC = () => (
  <Layout title="Contact Us | Bluff Country Beef">
    <Section title="Contact Us">
      <p class="mb-4">
        We'd love to hear from you! Whether you have questions about our beef, want to place an order, or just want to say hello, please don't hesitate to reach out.
      </p>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-2">Get in Touch</h3>
        <p class="mb-2">Email: <Email mailto="contact@bluffcountrybeef.com" /></p>
        <p class="mb-2">Phone: (555) 123-4567</p>
        <p>Address: 123 Farm Road, Fillmore County, MN 55555</p>
      </div>
    </Section>
  </Layout>
);

export default ContactPage;