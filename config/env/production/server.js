module.exports = ({ env }) => ({
    url: env('https://hotelstrapi.herokuapp.com/'),
    proxy: true,
    app: {keys: env.array('APP_KEYS',
     ['hotel-key',
      'hotel-secret']),
      },});