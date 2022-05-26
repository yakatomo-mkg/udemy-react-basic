const ColorfulMessage = (props) => {
  // console.log(props);  // propsの中身の確認
  // console.log("カラフルコンポーネント"); // 再レンダリングの確認

  const { color, children } = props;
  const contentStyle = {
    // color: color,  プロパティのkeyとvalueの値が同じときは、valueは省略可
    color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
