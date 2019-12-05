var trace1 = {
    x: [1],
    y: [34],
    width: [2],
    name: 'Targaryen',
    type: 'bar'
  };
  var trace2 = {
    x: [83],
    y: [27],
    width: [2],
    name: 'Frey',
    type: 'bar'
  };
  var trace3 = {
    x: [26],
    y: [6],
    width: [2],
    name: 'Tyrell',
    type: 'bar'
  };
  var trace4 = {
    x: [14],
    y: [9],
    width: [2],
    name: 'Lannister',
    type: 'bar'
  };
  var trace4 = {
    x: [13],
    y: [2],
    width: [2],
    name: 'Vance',
    type: 'bar'
  };
  var trace5 = {
    x: [11],
    y: [8],
    width: [2],
    name: 'Harlaw',
    type: 'bar'
  };
  var trace6 = {
    x: [8],
    y: [2],
    width: [2],
    name: 'Redwyne',
    type: 'bar'
  };
  var trace7 = {
    x: [7],
    y: [2],
    width: [3],
    name: 'Mormont',
    type: 'bar'
  };
  var trace8 = {
    x: [6],
    y: [13],
    width: [2],
    name: 'Greyjoy',
    type: 'bar'
  };
  var trace9 = {
    x: [6],
    y: [2],
    width: [2],
    name: 'Bolton',
    type: 'bar'
  };
  var trace10 = {
    x: [4],
    y: [7],
    width: [2],
    name: 'Baratheon',
    type: 'bar'
  };
  var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];

  var layout = {

    title: {
      text:'David GoT Project',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.2,
    },
    xaxis: {
      title: {
        text: 'Alive',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      range: [0, 20],
      title: {
        text: 'Dead',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f',
        }
      }
    }
  };

Plotly.newPlot('myDiv', data, layout, {responsive: true});