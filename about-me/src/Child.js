//import Card from "./Card";

function Child({ title, text }) {
  const styleobj = {
    display: "flex",
    flexDirection: "column",
    displayJustify: "center",
  };

  const rectangleStyle = {
    width: "1000px",
    height: "200px",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black", // Optional border
    margin: "70px 30px 100px 300px",
    padding: "0 0 50px 0",
  };

  const smboxStyle = {
    width: "800px",
    height: "1px",
    backgroundColor: "white",
    border: "1px solid white",
    borderShadow: "1px 1px 0 0",
  };

  const styletitle = {
    textShadow: "2px 2px 4px #000000",
    style: "bold",
    fontSize: "30px",
    padding: "0px 0px 50px 0px",
    fontFamily: "cursive",
  };

  const styletext = {
    fontSize: "20px",
    padding: "30px 0px 0px 0px",
    fontFamily: "TimesNewRomen",
  };

  return (
    <div style={rectangleStyle}>
      <div sytle={styleobj}>
        <div style={styletitle}>{title}</div>
        <div style={smboxStyle}></div>
        <div style={styletext}>{text}</div>
      </div>
    </div>
  );
}

export default Child;
