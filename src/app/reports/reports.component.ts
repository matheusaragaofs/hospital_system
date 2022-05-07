import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.sass'],
})
export class ReportsComponent implements OnInit {
  @ViewChild('chart') chart: any = ChartComponent;
  public chartOptionsAvgPatientsAvg!: Partial<ChartOptions> | any;
  public chartOptionsVisitsAvg!: Partial<ChartOptions> | any;
  public showSecondDoctor: boolean = false;
  public firstDoctor: any = '';
  public secondDoctor: any = '';

  toggleCompareDoctor(): void {
    this.showSecondDoctor = !this.showSecondDoctor;
    if (this.showSecondDoctor) this.secondDoctor = '';
  }

  saveReports(): void {
    window.print();
  }
  selectedDoctor: string = '';
  doctorOptions = {
    first: [
      {
        label: 'Dr. Matheus',
        id: 2,
        patientsAvg: [20, 31, 22, 23, 13.2, 23.3, 12.2],
        prioritiesAvg: [25.3, 11, 4],
      },
      {
        label: 'Dr. Wesley',
        id: 3,
        patientsAvg: [13, 21.2, 13.2, 22, 22.1, 36, 32],
        prioritiesAvg: [33.2, 15, 7],
      },
      {
        label: 'Dr. Lucas',
        id: 4,
        patientsAvg: [10, 21, 12, 33, 43.1, 33.3, 22.2],
        prioritiesAvg: [22.3, 10.3, 4.2],
      },
    ],
    second: [
      {
        label: 'Dr. João Gomes ',
        id: 5,
        patientsAvg: [12.4, 18.9, 12.2, 23, 33.1, 23.3, 21.8],
        prioritiesAvg: [21.3, 7.3, 2.2],
      },
      {
        label: 'Dr. Tarcísio',
        id: 6,
        patientsAvg: [11.5, 21.2, 5, 23.1, 22.1, 21, 13.2],
        prioritiesAvg: [16.3, 11.3, 2.6],
      },
      {
        label: 'Dr. Vitor Fernandes',
        id: 7,
        patientsAvg: [22.2, 21.2, 9.2, 27.5, 21.1, 15.3, 22.2],
        prioritiesAvg: [12.3, 6.3, 1.2],
      },
    ],
  };
  public patientsAvg: any = [];
  public prioritiesAvg: any = [];

  setChartSeriesData({ position }: { position: 'first' | 'second' }): any {
    const patientsAvgData = this.doctorOptions[position].find(
      (el) => el.label === this[`${position}Doctor`].label
    );

    this.patientsAvg[position] = [
      {
        name: 'Média de pacientes atendidos',
        data: patientsAvgData?.patientsAvg,
      },
    ];

    this.prioritiesAvg[position] = [
      {
        name: 'Média de pacientes por prioridde',
        data: patientsAvgData?.prioritiesAvg,
      },
    ];
  }

  setFirstDoctor(event: MatSelectChange): void {
    this.firstDoctor = event.value;
    this.setChartSeriesData({ position: 'first' });
  }
  setSecondDoctor(event: MatSelectChange): void {
    this.secondDoctor = event.value;

    this.setChartSeriesData({ position: 'second' });
  }
  resetDoctors(): void {
    this.firstDoctor = '';
    this.secondDoctor = '';
    this.showSecondDoctor = false;
  }
  constructor() {
    this.chartOptionsAvgPatientsAvg = {
      chart: {
        height: '320px',
        width: '320px',
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val;
        },
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },

      xaxis: {
        categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        position: 'top',
        labels: {},
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      fill: {
        colors: ['#303f9f'],
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val;
          },
        },
      },
      title: {
        text: 'Média de pacientes atendidos por dia',
        floating: false,
        align: 'center',
        style: {
          fontWeight: 'light',
          color: '#444',
        },
      },
    };

    this.chartOptionsVisitsAvg = {
      chart: {
        height: '320px',
        width: '320px',
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val;
        },
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },

      xaxis: {
        categories: ['Baixa', 'Média', 'Alta'],
        position: 'top',
        labels: {},
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      fill: {
        colors: ['#303f9f'],
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val;
          },
        },
      },
      title: {
        text: 'Média de pacientes atendidos por pririodidade',
        floating: false,
        align: 'center',
        style: {
          fontWeight: 'light',
          fontSize: 12,
          color: '#444',
        },
      },
    };
  }

  ngOnInit(): void {}
}
