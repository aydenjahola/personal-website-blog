# Personal Website Blog

This is a blog for my personal website. It is built using [NextJS](https://https://nextjs.org/) and [Sanity](https://sanity.io) and hosted on [Vercel](https://vercel.com/).

## Getting Started

To run this project locally, you will need to have [NodeJS](https://nodejs.org/en/) installed. You will also need to have a [Sanity](https://sanity.io) account and project set up. You can find instructions for that [here](https://www.sanity.io/docs/getting-started-with-sanity-cli).

Once you have cloned the repo, run `npm install` to install the dependencies. Then, create a `.env` file in the root directory and add the following environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
NEXT_PUBLIC_SANITY_API_VERSION=your_api_version
```

You can find your project ID and dataset name in your Sanity dashboard. The API version should be set to `2023-05-03` or later.

Finally, run `npm run dev` to start the development server. You can view the site at `http://localhost:3000`.

## Sanity Studio

The Sanity Studio is located in the `/app/studio` directory. you can access the studio at `localhost:3000/studio` on your local development server. You can find more information about the Sanity Studio [here](https://www.sanity.io/docs/sanity-studio).

## Deploying

This project is set up to be deployed on [Vercel](https://vercel.com/). You can find instructions for deploying a NextJS project on Vercel [here](https://nextjs.org/docs/deployment).

## Built With

- [NextJS](https://https://nextjs.org/)
- [Sanity](https://sanity.io)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)
- [Vercel](https://vercel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)