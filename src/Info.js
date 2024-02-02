function Info() {
  return (
    <div className="info-container">
      <div className="row">
        <div className="info-card">
          <div className="info-img">
            <img
              src="https://smiski.com/e/wp-content/uploads/2016/09/s3_secret.png"
              alt=""
            />
          </div>

          <div className="info-p">
            <p className="info-data">
              Each series has 6 Smiski variations, plus a secret Smiski that is
              rare to find! <br />
              *The secret Smiski are distributed randomly and may not always be
              included in one assort box.
            </p>
          </div>
        </div>

        <div className="info-card-2">
          <div className="info-img">
            <img
              src="https://smiski.com/e/wp-content/uploads/2016/09/s3_blindbox.png"
              alt=""
            />
          </div>

          <div className="info-p">
            <p className="info-data">
              Smiski come packaged randomly in blind boxes so you won't know
              which one you'll get until you open the box.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
