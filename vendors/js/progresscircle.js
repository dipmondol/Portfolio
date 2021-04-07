function makesvg(percentage, inner_text = "") {

  var abs_percentage = Math.abs(percentage).toString();
  var percentage_str = percentage.toString();
  var classes = ""

  if (percentage < 0) {
    classes = "danger-stroke circle-chart__circle--negative";
  } else if (percentage > 0 && percentage <= 30) {
    classes = "warning-stroke";
  } else if (percentage > 60 && percentage < 70) {
    classes = "circle1";
  } else if (percentage >= 70 && percentage < 79) {
    classes = "circle2";
  } else if (percentage >= 79 && percentage < 84) {
    classes = "circle3";
  } else if (percentage >= 84 && percentage < 90) {
    classes = "circle4";
  }else if(percentage >= 90 && percentage <=100){
    classes ="circle5";
  }

  var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
    '<circle class="circle-chart__background" cx="17" cy="17" r="15.9" />' +
    '<circle class="circle-chart__circle ' + classes + '"' +
    'stroke-dasharray="' + abs_percentage + ',100"    cx="17" cy="17" r="15.9" />' +
    '   <text class="circle-chart__percent" x="50%" y="60%">' + percentage_str + '%</text>';

  if (inner_text) {
    svg += '<text class="circle-chart__subline" x="16.91549431" y="22">' + inner_text + '</text>'
  }

  svg += ' </g></svg>';

  return svg
}

(function ($) {

  $.fn.circlechart = function () {
    this.each(function () {
      var percentage = $(this).data("percentage");
      var inner_text = $(this).text();
      $(this).html(makesvg(percentage, inner_text));
    });
    return this;
  };

}(jQuery));