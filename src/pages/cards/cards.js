import './cards.scss';
import '../../components/sign-up-form/sign-up-form';
import '../../components/room-card/room-card';

import { initSearchRoomsForm } from '../../components/search-rooms-form/search-rooms-form';
import { initBookingForm } from '../../components/booking-form/booking-form';
import { initDatePicker } from '../../components/datepicker/datepicker';

initSearchRoomsForm();
initBookingForm();
initDatePicker('main__third-column-datepicker');
