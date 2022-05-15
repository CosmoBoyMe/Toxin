import '../../styles/index.scss';
import './room-details.scss';

import '../../components/header/header';
import '../../components/like-btn/like-btn';
import { initBookingForm } from '../../components/booking-form/booking-form';

import { initPieChart } from '../../components/pie-chart/pie-chart';

initPieChart('chart', [0, 65, 65, 130]);
initBookingForm();
