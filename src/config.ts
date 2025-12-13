const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID,
};

export default config;

