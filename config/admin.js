module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61aa0f07c9d137ecff3fe1e85dc02706'),
  },
});
