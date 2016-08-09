import {Component} from '@angular/core';
import { successBarChart} from './successBarChart/successBarChart.graph';
import { latencyLineGraph } from './latencyLineGraph/latencyLineGraph.graph';
import { descriptiveInfo } from './descriptiveInfo/descriptiveInfo.info';
 
@Component({
  selector: 'graphs',
  directives: [successBarChart, latencyLineGraph, descriptiveInfo],
  template: `
    <div>
      <descriptiveInfo></descriptiveInfo>
      <successBarChart></successBarChart>
    </div>
  `
})
 
export class Graphs {
  
}


// var summaryData = {
//     latency: [0, 1, 2, 4, 1], 
//     averageLat: 2, 
//     minLat: 0, 
//     maxLat: 2, 
//     latStdDev: .2,
//     numSuccess: 100, 
//     numFailures: 0, 
//     totalReqs: 100
// };

//graph to visualize load balancer to server interactions somehow..
//bar chart for success//failures
//summary latency stats at top.
//line chart to view all latencies

