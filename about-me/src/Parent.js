import Child from "./Child";

function Parent() {
  const styleName = {
    fontFamily: "Roboto",
    fontSize: "30px",
    margin: "0 0 0 100px",
    textShadow: "1px 1px 1px #000000",
  };

  const styleDes = {
    fontFamily: "Georgia",
    fontSize: "30px",
    margin: "0 0 0 100px",
    fontStyle: "Italic",
  };
  return (
    <>
      <></>
      <div style={styleName}>Zar Ni</div>
      <div style={styleDes}>Software Engineer</div>
      <Child
        title="About Me"
        text="I am interested in learning cutting-edge technology and passionate to create a better environment."
      />
      <Child
        title="Contact Me"
        text="Email: aung.zarni@gmail.com | LinkedIn: https://www.linkedin.com/in/zar-ni-aung-427a7b182/"
      />
    </>
  );
}

export default Parent;
