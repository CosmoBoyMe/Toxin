import '../../styles/index.scss';
import './roomDetails.scss';

import '../../components/header/header';
import '../../components/likeBtn/likeBtn.js';
import { initBookingForm } from '../../components/bookingForm/bookingForm';

import { initPieChart } from '../../components/pieChart/pieChart';

initPieChart('chart', [0, 65, 65, 130]);
initBookingForm();
