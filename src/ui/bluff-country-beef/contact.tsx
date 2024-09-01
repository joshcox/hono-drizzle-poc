import { FC } from "hono/jsx";
import { Email, Section } from "./components";
import Layout from "./layout";

const ContactPage: FC = () => (
  <Layout title="Contact Us | Bluff Country Beef">
    <Section title="Contact Us">
      <p class="mb-4">
        We'd love to hear from you! Whether you have questions about our beef,
        want to place an order, or just want to say hello, please don't hesitate
        to reach out.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form class="space-y-4">
            <div>
              <label for="name" class="block mb-1">Name</label>
              <input type="text" id="name" name="name" class="w-full p-2 border rounded" required />
            </div>
            <div>
              <label for="email" class="block mb-1">Email</label>
              <input type="email" id="email" name="email" class="w-full p-2 border rounded" required />
            </div>
            <div>
              <label for="phone" class="block mb-1">Phone (optional)</label>
              <input type="tel" id="phone" name="phone" class="w-full p-2 border rounded" />
            </div>
            <div>
              <label for="message" class="block mb-1">Message</label>
              <textarea id="message" name="message" rows="4" class="w-full p-2 border rounded" required></textarea>
            </div>
            <div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
          <p class="mb-2">
            <strong>Email:</strong> <Email mailto="contact@bluffcountrybeef.com" />
          </p>
          <p class="mb-2">
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p class="mb-2">
            <strong>Address:</strong><br />
            Bluff Country Beef<br />
            123 Farm Road<br />
            Fillmore County, MN 55555
          </p>
          <div class="mt-6">
            <h4 class="text-lg font-semibold mb-2">Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default ContactPage;
