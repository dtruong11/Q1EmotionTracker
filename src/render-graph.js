function renderGraph() {
  //grab name to progress's page
  document.querySelector('#user-name').innerHTML = localStorage.getItem("name") ? localStorage.getItem("name") : "Mr.X"

  const dataset = JSON.parse(localStorage.getItem('data'))
  const dataArray = formatData(dataset)

  Highcharts.chart('graph', {
    title: {
      text: 'My Moods'
    },

    subtitle: {
      text: 'your moods over time'
    },

    yAxis: {
      title: {
        text: 'happiness'
      }
    },

    xAxis: {
      type: 'datetime'
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },

    series: [{
      name: 'mood',
      data: dataArray
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

  });

  function formatData(dataset) {
    const dataArray = []
    for (let date in dataset) {
      dataArray.push([parseInt(date)+18000000, dataset[date].score])
    }
    return dataArray
  }
}

module.exports = renderGraph;
