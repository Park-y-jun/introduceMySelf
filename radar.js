anychart.onDocumentReady(() => {
  const data = {
    header: ["#", "point"],
    rows: [
      ["I", 80],
      ["T", 50],
      ["S", 55],
      ["P", 55],
      ["빈칸", 0],
      ["E", 55],
      ["F", 80],
      ["N", 85],
      ["J", 80],
    ],
  };

  const chart = anychart.radar();
  chart.defaultSeriesType("area");
  chart.title("My MBTI");
  chart.palette(["#5F8D4E"]);
  chart.yScale().minimum(0).maximum(100).ticks({ interval: 0 });

  chart.background().fill({
    keys: ["#E1FFB1", "#B6E388", "#E1FFB1"],
    angle: 130,
  });

  chart.xGrid().stroke({
    color: "red",
    thickness: 1,
    dash: "10 5",
  });

  chart.yGrid().stroke({
    color: "red",
    thickness: 0,
    dash: "10 5",
  });

  chart.data(data);
  chart.container("chart");
  chart.draw();

  //* anyChart 공식 홈페이지 링크 dom 제거
  const hideAdLink = () => {
    document.querySelector("div.anychart-credits").remove();
  };

  //* Y축 눈금 및 레전드 제거
  const hideYAxis = () => {
    const pathYAxisElems = document.querySelectorAll("path");
    const gYAxisElems = document.querySelectorAll("g");
    const removePathYAxisIdList = ["33", "34"];
    pathYAxisElems.forEach((elem) => {
      if (
        removePathYAxisIdList.includes(elem.getAttribute("data-ac-wrapper-id"))
      ) {
        elem.remove();
      }
    });
    gYAxisElems.forEach((elem) => {
      if (elem.getAttribute("data-ac-wrapper-id") === "36") {
        elem.remove();
      }
    });
  };
  hideAdLink();
  hideYAxis();
});
