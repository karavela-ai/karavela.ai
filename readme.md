# Karavela website

This is the source code for the Karavela website, built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Sanity](https://www.sanity.io).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Populate the `.env.local` file with the appropriate credentials (contact the website administrator for these).
The `.env.local` file should look like this:

```plaintext
NEXT_PUBLIC_SANITY_PROJECT_ID=project_id
NEXT_PUBLIC_SANITY_DATASET=production
SMTP_USERNAME=username
SMTP_PASSWORD=password
CONTACT_EMAIL=email_which_will_receive_contact_form_submissions
```

Next, create a new Sanity project to power the blog within this template:

```bash
npm create sanity@latest -- --env=.env.local --create-project "Karavela Blog" --dataset production
```

This will prompt you to create a new Sanity account if you don't have one already. When asked "Would you like to add configuration files for a Sanity project in this Next.js folder?", choose "n".

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

To manage your blog content, visit the embedded Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

## Deployment

Test building the website locally with:

```bash
npm run build
```

You can then deploy the website to Vercel by pushing your code to the `main`, `staging` or `dev` branches respectively.
