import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {nvD3} from '.././ng2-nvd3/lib/ng2-nvd3';
declare let d3: any;

@Component({
  selector: 'successBarChart',
  directives: [nvD3],
  templateUrl: './client/app/components/graphs/successBarChart/successBarChart.component.html'
})


export class successBarChart implements OnInit{
  options;
  data;
  @ViewChild(nvD3)
  nvD3: nvD3;
  ngOnInit(){
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 300,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',0%')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Server #'
        },
        yAxis: {
          axisLabel: '% requests successfully handled by load balancer',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Server Latencies",
        values: [
          {
            "label" : "Server1" ,
            "value" : 80
          } ,
          {
            "label" : "Server2" ,
            "value" : 90
          }
        ]
      }
    ];
  }

  ngAfterViewInit() {
      this.nvD3.chart.update()
  }

}
