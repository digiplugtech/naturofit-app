import ReactGA from 'react-ga4';
import config from '../config';

const GA_MEASUREMENT_ID = config.gaMeasurementId;

export const initGA = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  } else {
    console.warn('GA_MEASUREMENT_ID is missing in environment variables');
  }
};

export const logPageView = () => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }
};

export const logEvent = (category: string, action: string, label?: string) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};

