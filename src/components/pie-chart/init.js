import { PieChart } from './PieChart';

const pieChartElements = document.querySelectorAll('.js-pie-chart__item');
pieChartElements.forEach((element) => new PieChart(element));
