const imageUrls = [
  "https://smiski.com/e/wp-content/uploads/2017/10/bath_bottom.png",
  "https://smiski.com/e/wp-content/uploads/2017/10/toilet_bottom.png",
  "https://smiski.com/e/wp-content/uploads/2016/03/bottom_s1.png",
  "https://smiski.com/e/wp-content/uploads/2016/03/bottom_s2-1.png",
  "https://smiski.com/e/wp-content/uploads/2017/02/bottom_s3.png",
  "https://smiski.com/e/wp-content/uploads/2016/03/bottom_s3-1.png",
];

function Series() {
  // Create an array of 2 rows, each containing 3 unique images
  const rows = Array.from({ length: 2 }, (_, rowIndex) => (
    <div key={rowIndex} className="row">
      {imageUrls.slice(rowIndex * 3, rowIndex * 3 + 3).map((url, colIndex) => (
        <img key={colIndex} src={url} alt="" />
      ))}
    </div>
  ));

  return (
    <div className="series-foot">
      <div className="series-card">{rows}</div>
    </div>
  );
}

export default Series;
