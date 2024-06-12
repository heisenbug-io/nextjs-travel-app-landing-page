const isProd = process.env.NODE_ENV === 'production';

const prefix = isProd ? 'https://heisenbug-io.github.io/nextjs-travel-app-landing-page' : '';

export { prefix };