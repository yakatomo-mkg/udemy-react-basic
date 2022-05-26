const ButtonStyle = (props) => {
  const { fs, bg, children } = props;
  const buttonStyle = {
    fontSize: fs,
    backgroundColor: bg
  };

  const buttonFanction = {
    onClick: onClick
  };

  return (
    <button style={buttonStyle} onClick={buttonFanction}>
      {children}
    </button>
  );
};

export default ButtonStyle;
