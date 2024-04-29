import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import TopPage from "./components/TopPage/TopPage";
import ScrollText from "./components/ScrollText/ScrollText";
import Introduce from "./components/Introduce/Introduce";
import News from "./components/News/News";
import Member from "./components/Member/Member";
import Rules from "./components/Rules/Rules";


function App() {
  return(


    <>
      <Navbar />
      <div className="text-overlay-parent"><TopPage /></div>
     
      <div style={{ marginBottom: "3%" }}></div>

      <center><b className="murasaki">#Mission</b></center>


      <div className="scroll-text-parent">
        <ScrollText text="有意義な朝活を通して、いつまでも成長し続ける人材に" />
      </div>


      <center><b className="murasaki">#Board Members</b></center>
     
      <div style={{ marginBottom: "3%" }}></div>


    <Introduce
      name="Manato Chiba / General Manager"
      description={"中田幼稚園中退後、家族でUSに渡り、Jarvis Preschool、 W.H Robinson Elementary(dropout)でキャリアを積む。仙台二高・東北大学工学部を卒業後、'24に東北大学情報科学研究科へ入学。MORING AWARD Ph1では過去No.1の成績を残し、現在は菅沼研朝活部長を務める。"}
      imageUrl={'./bucho2.JPG'}
      />

    <Introduce
      name="Ryotaro Matsui / Founder"
      description={"香川県立高松高校・東北大学工学部を卒業後、'23年に東北大学情報科学研究科に入学。'24年に所属する菅沼・水木研究室で朝活部・給食部を國見と共に設立し、現在はSugatakuChildren.IncのCEOを務める。  好きな言葉は「人生は困難な方に進むべき。」   "}
      imageUrl={'./matsui.jpg'}
      />


    <Introduce
      name="Wataru Kunimi / co-Founder"
      description={"神奈川県立小田原高校・東北大学工学部を卒業後、'24年に東北大学情報科学研究科に入学。半年間のデンマーク工科大（DTU）への留学の経験を活かし、松井と共に朝活部を設立。現在は、人々の生きる指針を示す自然言語型アプリケーションを製作中。"}
      imageUrl={'./firstmember.JPG'}
      />
    
    <div style={{ marginBottom: "3%" }}></div>

    <center><b className="murasaki">#Rules</b></center>

    <div style={{ marginBottom: "4%" }}></div>

    <Rules
      text="・朝活宣言を行った日の朝9時までに研究室に入室する"
    /><Rules
      text="・9~12時は各々にとってmeaningfulな活動を行う"
    /><Rules
      text="・朝活成功時には、朝活ポイントが1P付与される"
    /><Rules
      text="・遅刻した場合、出席人数×最大200円を支払う"
    /><Rules
      text="・シーズン王者には、額縁・朝活資金運営権が与えられる"
    />

    <div style={{ marginBottom: "5%" }}></div>

    <center><b className="murasaki">#Members</b></center>
   
    <div style={{ marginBottom: "3%" }}></div>

    <Member 
      picture1="./takahata-2.JPG"
      picture2={"./tanaka.jpg"}
      picture3={"./MMC_logo.jpg"}
      picture4={"./taichi.JPG"}

      name1={"Naoki Takahata"}
      name2={"Kodai Tanaka / MMWph1 MVP"}
      name3={"Yoshikazu Brother"}
      name4={"Taichi Uchimura"}

      />

    <Member 
      picture1="./MMC_logo-2.jpg"
      picture2={"./izumi.JPG"}
      picture3={"./MMC_logo-2.jpg"}
      picture4={"./MMC_logo-2.jpg"}

      name1={"Mayuko Kamaya"}
      name2={"Keinosuke Izumi"}
      name3={"Yoshiya Hayasaka"}
      name4={"Ren Yoshida"}
      />
       
      <Member 
      picture1="./MMC_logo.jpg"
      picture2={"./tkd.JPG"}
      picture3={"./MMC_logo.jpg"}

      name1={"Shingo Kato"}
      name2={"TKD / dealer"}
      name3={"Ryoya Koyama"}
      />


    <div style={{ marginBottom: "6%" }}></div>


    <center><b className="murasaki">#News</b></center>

    <div style={{ marginBottom: "3%" }}></div>


    <News
      name={"4/17 給食制度を開始しました"}        
      description={"4/17より朝活部の新たな取り組みとして、給食部が発足しました。曜日ごとに担当が分かれ、自分たちで食材調達から調理まで行うことで、圧倒的なコスパの給食を提供します。記念すべき初回のシェフはM2釜谷・M1和泉が、食材調達はM2田中が担当しました。"}
      imageUrl={'./Kyuusyoku.JPG'}
    />


    <News
      name={"4/2 B3向け部活動紹介を行いました"}        
      description={"弊部部長の千葉が学部3年生向けに部活動紹介を行いました。部活のルールやカルチャー、実績について簡単に説明しながら、朝活の魅力を熱く語りました。ペナルティ制度にはあえて言及しないことで、新入生の入部を図りました。"}
      imageUrl={'./B3.JPG'}
    />


    <News
      name={"4/1 MMW ph1をM1千葉が受賞しました"}        
      description={"今年後、初めてのMMW AWARD授与式が行われ、修士1年の千葉愛斗が受賞しました。千葉は朝活黎明期からその可能性に注目し、積極的な朝活動を展開してきました。千葉は最終的に17Pの朝活ポイントを獲得し、歴代最高成績を残しました。"}
      imageUrl={'./MMW_ph1.JPG'}
    />


    <div style={{ marginBottom: "3%" }}></div>




         
         
      </>
  )
}


export default App;
