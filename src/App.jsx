import { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初"); // 再レンダリングの確認
  // stateの定義
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // ボタンの定義
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 3の倍数の時に顔文字を表示する関数を定義
  useEffect(() => {
    console.log("useEffect!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>

      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button
        style={{ fontSize: "20px", backgroundColor: "yellow" }}
        onClick={onClickCountUp}
      >
        カウントアップ
      </button>
      <br />
      <button
        style={{ fontSize: "15px", backgroundColor: "gray" }}
        onClick={onClickSwitchShowFlag}
      >
        on/off
      </button>

      <p>{num}</p>
      {faceShowFlag && <p>ᕦ(ò_óˇ)ᕤ</p>}
    </>
  );
};

export default App;
