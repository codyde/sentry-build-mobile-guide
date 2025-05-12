// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Sentry Build',
          logo: {
              src: './src/assets/placeholder.svg',
              replacesTitle: true,
          },
          components: {
              // Use our custom logo component
              SiteTitle: './src/components/SentryLogo.astro',
          },
          social: {
              github: 'https://github.com/getsentry/sentry-build-workshop',
          },
          customCss: [
              // Add our custom Sentry theme
              './src/styles/custom.css',
          ],
          sidebar: [
              {
                  label: 'Workshop',
                  items: [
                      { label: 'Quickstart', slug: 'quickstart' },
                      { label: 'Configuring Sentry', slug: 'configure-sentry' },
                      {
                          label: 'Debugging Mobile Issues',
                          items: [
                              { label: 'Part 1: Tuning Alerts', slug: '1-tuning-alerts-debugging' },
                              { label: 'Part 2: Debugging SSO with Sentry Issues', slug: '2-fixing-sso' },
                              { label: 'Part 3: Troubleshooting the Store Cart with Tracing', slug: '3-tracing-cart-issue' },
                              { label: 'Part 4: Fixing the Checkout with Tracing', slug: '4-fixing-checkout' },
                          ]
                      },
                      { label: 'Wrapping Up!', slug: 'wrapping-up' },
                  ],
              },
              {
                  label: 'Resources',
                  items: [
                      { label: 'Sentry Documentation', link: 'https://docs.sentry.io/' },
                      { label: 'React Native SDK', link: 'https://docs.sentry.io/platforms/javascript/guides/react-native/' },
                  ],
              },
          ],
      }),
  ],

  // Configure Vercel adapter with specific options for assets
  adapter: vercel({
    includeFiles: [
      './src/assets/**/*', 
      './src/assets/img/**/*',
      './src/assets/img/**/*.gif',
      './src/assets/sentry-glyph-light-400x367.png'
    ],
  }),
});