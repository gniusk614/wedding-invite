import Icon from "../lib/img/share_icon.png";
import React from "react";
import {BsShareFill} from "react-icons/bs";

export default function ShareBox() {
  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://developers.kakao.com/sdk/js/kakao.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const kakao = () => {
  //   // 사용할 앱의 JavaScript 키를 설정해 주세요.
  //   window.Kakao.init("e5c5f0051a5b0fec7039bca859ca2c29");
  //   // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
  //   window.Kakao.Link.createCustomButton({
  //     container: "#kakaoLink",
  //     templateId: 81085,
  //   });
  // };


  return (
    <div
      style={{
        backgroundColor: "gray",
      }}
    >
      {/* <div id="kakaoLink" onClick={kakao}>
        <img src={Icon} style={{ width: "30px" }} />
      </div> */}
      <span>
        <BsShareFill />
      </span>
    </div>
  );
}
