import "./App.css";
import html2canvas from "html2canvas";
import { useEffect } from "react";
const { Kakao } = window;

const App = () => {
  useEffect(() => {
    initKakao();
  }, []);

  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("e41efab98dfe045c9d7ce45f8b320444");
      }
    }
  };

  function sendLink() {
    Kakao.Link.createDefaultButton({
      container: ".card-shard" /*버튼 아이디*/,
      objectType:
        "feed" /*공유 타입. 다른 방식도 있는데 공식 홈페이지에서 확인이 가능하다.*/,
      content: {
        title: "테스트!!",
        description: "하하하",
        imageUrl: "함께 첨부될 이미지의 url",
        link: {
          webUrl: "https://baegofda.github.io/card-save-shard-test/",
        },
      },
    });
  }

  const onSave = (uri, filename) => {
    console.log("onSaveAs");
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const onCapture = () => {
    console.log("onCapture");
    html2canvas(document.querySelector(".grade-card")).then((canvas) => {
      onSave(canvas.toDataURL("image/png"), "grade-card.jpg");
    });
  };

  return (
    <div className="App">
      <button className="card-save" type="button" onClick={onCapture}>
        이미지 저장하기
      </button>
      <button className="card-shard" type="button" onClick={sendLink}>
        카톡 공유
      </button>
      <button className="card-save" type="button">
        페이스북 공유
      </button>
      <div className="grade-card">이미지 저장을 해봅시다</div>
    </div>
  );
};

export default App;
