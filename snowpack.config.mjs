/** @type {import("snowpack").SnowpackUserConfig} */
export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],
  devOptions: {
    open: 'none',
  },
};
