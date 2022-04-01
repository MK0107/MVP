import React from 'react'
import { VictoryLabel, VictoryPie } from 'victory';

export default function Charts(props) {

  return (
    <div className="pies">
      <svg viewBox="0 0 500 500">
        <VictoryPie
          standalone={false}
          width={350} height={350}
          data={[
            { x: 'general', y: 5 }, { x: 'task', y: 3 }, { x: 'bugs', y: 2 }, { x: 'implementation', y: 10 }, { x: 'chores', y: 10 }
          ]}
          innerRadius={60} labelRadius={80}
          style={{ labels: { fontSize: 20, fill: "white" } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 25 }}
          x={175} y={175}
          text="Type"
        />
      </svg>
      <svg viewBox="0 0 500 500">
      <VictoryPie
          standalone={false}
          width={350} height={350}
          data={[
            { x: 'low', y: props.data[3].count }, { x: 'normal', y: props.data[4].count }, { x: 'important', y: props.data[5].count }, { x: 'critical', y: props.data[6].count }
          ]}
          innerRadius={60} labelRadius={80}
          style={{ labels: { fontSize: 20, fill: "white" } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 25 }}
          x={175} y={175}
          text="Priority"
        />
      </svg>
      <svg viewBox="0 0 500 500">
      <VictoryPie
          standalone={false}
          width={350} height={350}
          data={[
            { x: 'progress', y: props.data[0].count }, { x: 'review', y: props.data[1].count }, { x: 'complete', y: props.data[2].count }
          ]}
          innerRadius={60} labelRadius={80}
          style={{ labels: { fontSize: 20, fill: "white" } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 25 }}
          x={175} y={175}
          text="Status"
        />
      </svg>
    </div>
  );
}
