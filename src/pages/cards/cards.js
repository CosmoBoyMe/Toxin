import './cards.scss';
import '../../components/signUpForm/signUpForm';
import '../../components/roomCard/roomCard';

import { initSearchRoomsForm } from '../../components/searchRoomsForm/searchRoomsForm';
import { initBookingForm } from '../../components/bookingForm/bookingForm';
import { initDatePicker } from '../../components/datepicker/datepicker';

initSearchRoomsForm();
initBookingForm();
initDatePicker('main__third-column-datepicker');
