import Chart from 'chart.js/auto';

class PieChart {
  constructor(element) {
    const dataValues = element.getAttribute('data-values');
    const parsedValues = JSON.parse(dataValues);

    this.element = element;
    this.values = parsedValues;
    this.init();
  }

  init() {
    const { element, values } = this;
    const doughtCtx = element.getContext('2d');

    const purpleGradient = doughtCtx.createLinearGradient(0, 0, 0, 600);
    purpleGradient.addColorStop(0, '#BC9CFF');
    purpleGradient.addColorStop(1, '#8BA4F9');

    const greenGradient = doughtCtx.createLinearGradient(0, 0, 0, 600);
    greenGradient.addColorStop(0, '#6FCF97');
    greenGradient.addColorStop(1, '#66D2EA');

    const orangeGradient = doughtCtx.createLinearGradient(0, 0, 0, 600);
    orangeGradient.addColorStop(0, '#FFE39C');
    orangeGradient.addColorStop(1, '#FFBA9C');

    const blackGradient = doughtCtx.createLinearGradient(0, 0, 0, 600);
    blackGradient.addColorStop(0, '#909090');
    blackGradient.addColorStop(1, '#3D4975');

    // eslint-disable-next-line no-new
    new Chart(element, {
      type: 'doughnut',
      data: {
        cutout: 70,
        datasets: [
          {
            data: values,
            backgroundColor: [blackGradient, purpleGradient, greenGradient, orangeGradient],
            spacing: 2,
            borderWidth: 1,
          },
        ],
      },
      options: {
        cutout: 54,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });
  }
}

export { PieChart };
