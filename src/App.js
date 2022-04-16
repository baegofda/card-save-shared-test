import "./App.css";
import html2canvas from "html2canvas";
const { Kakao } = window;

const App = () => {
  const onSharedNaver = () => {
    const url = "www.naver.com";
    const title = "타이틀";
    window.open(
      `http://share.naver.com/web/shareView.nhn?url=${encodeURI(
        url
      )}&title=${encodeURI(title)}`,
      "Share on Naver",
      "scrollbars=no, width=500, height=500"
    );
  };
  const onSharedTwitter = () => {
    const url = "www.facebook.com";
    window.open(
      `http://twitter.com/intent/tweet?text=글제목&url=${url}`,
      "scrollbars=no, width=500, height=500"
    );
  };

  const onSharedFacebook = () => {
    const url = "www.facebook.com";
    window.open(
      `http://www.facebook.com/sharer/sharer.php?u=${url}`,
      "scrollbars=no, width=500, height=500"
    );
  };
  const onSharedKakao = () => {
    Kakao.Link.createDefaultButton({
      container: ".card-kakao" /*버튼 아이디*/,
      objectType:
        "feed" /*공유 타입. 다른 방식도 있는데 공식 홈페이지에서 확인이 가능하다.*/,
      content: {
        title: "테스트!!",
        description: "하하하",
        imageUrl:
          "https://dimg.donga.com/ugc/CDB/WEEKLY/Article/5b/b3/22/85/5bb32285000ed2738de6.jpg",
        link: {
          mobileWebUrl: "https://baegofda.github.io/card-save-shared-test/",
          webUrl: "https://baegofda.github.io/card-save-shared-test/",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://baegofda.github.io/card-save-shared-test/",
            webUrl: "https://baegofda.github.io/card-save-shared-test/",
          },
        },
      ],
    });
  };

  const onSave = (uri, filename) => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const onCapture = () => {
    html2canvas(document.querySelector(".grade-card")).then((canvas) => {
      onSave(canvas.toDataURL("image/png"), "grade-card.jpg");
    });
  };

  return (
    <div className="App">
      <button className="btn card-save" type="button" onClick={onCapture}>
        이미지 저장하기
      </button>
      <button className="btn card-kakao" type="button" onClick={onSharedKakao}>
        카톡 공유
      </button>
      <button
        className="btn card-facebook"
        type="button"
        onClick={onSharedFacebook}
      >
        페이스북 공유
      </button>
      <button
        className="btn card-facebook"
        type="button"
        onClick={onSharedTwitter}
      >
        트위터 공유
      </button>
      <button className="btn card-naver" type="button" onClick={onSharedNaver}>
        네이버 공유
      </button>
      <div className="grade-card">이미지 저장을 해봅시다</div>
    </div>
  );
};

export default App;
