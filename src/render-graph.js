function renderGraph() {
  //grab name to progress's page
  document.querySelector('#user-name').innerHTML = localStorage.getItem("name") ? localStorage.getItem("name") : "Mr.X"

  const dataset = JSON.parse(localStorage.getItem('data')) || []
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

    time: {
      timezoneOffset: 7 * 60
    },

    xAxis: {
      labels: {
        formatter: function () {
          return moment(this.value).format('hh:mm A')
        }
      }
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
        },
        cursor: 'pointer',
        point: {
          events: {
            click: function(e) {
              hs.htmlExpand(null, {
                pageOrigin: {
                  x: e.pageX || e.clientX,
                  y: e.pageY || e.clientY
                },
                headingText: this.options.name,
                maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                  this.options.note,
                width: 200
              });
            }
          }
        },
        marker: {
          lineWidth: 1
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
    for (let date of dataset) {
      dataArray.push({
        x: date.time,
        y: date.score,
        name: date.emotion,
        note: date.note
      })
    }
    console.log(moment(dataArray[0].x).format('hh:mm A'))
    return dataArray
  }
}

module.exports = renderGraph;
