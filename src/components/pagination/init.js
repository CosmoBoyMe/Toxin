import { Pagination } from './Pagination';

const paginationElements = document.querySelectorAll('.js-pagination');

paginationElements.forEach((element) => new Pagination(element));
