import "./App.css"
import Navbar from "./components/Navbar";
import TopPage from "./components/TopPage";
import ScrollText from "./components/ScrollText/ScrollText";
import Introduce from "./components/Introduce/Introduce";
import News from "./components/News/News";


function App() {
  return(


    <>
      <Navbar />
      <div className="text-overlay-parent"><TopPage /></div>
     
      <center><b className="murasaki">#Mission</b></center>


      <div className="scroll-text-parent">
        <ScrollText text="いつも寝てばかりの午前中を  有意義に使いたい" />
      </div>


      <center><b className="murasaki">#Board Members</b></center>
     
      <div style={{ marginBottom: "100px" }}></div>


    <Introduce
      name="Manato Chiba"
      description={"中田幼稚園中退後、家族でUSに渡り、Jarvis Preschool、 W.H Robinson Elementary(dropout)でキャリアを積む。仙台二高・東北大学工学部を卒業後、'24に東北大学情報科学研究科へ入学。MORING AWARD Ph1では過去No.1の成績を残し、現在は菅沼研究室朝活部長を務める"}
      imageUrl={'./bucho2.JPG'}
      />
    <Introduce
      name="Ryotaro Matsui"
      description={"香川県立高松高校・東北大学工学部を卒業後、'23年に東北大学情報科学研究科に入学。'24年に所属する菅沼・水木研究室で朝活部・給食部を國見と共に設立し、現在はSugatakuChildren.IncのCEOを務める。  好きな言葉は「人生は困難な方に進むべき。」   "}
      imageUrl={'./sosetsu.JPG'}
      />


    <Introduce
      name="Wataru Kunumi"
      description={"神奈川県立小田原高校・東北大学工学部を卒業、'24年に東北大学情報科学研究科に入学。デンマーク工科大（DTU）への留学の経験を活かし、松井と共に朝活部を設立。現在は、人々の生きる指針を示す自然言語型アプリケーションを製作中。"}
      imageUrl={'./firstmember.JPG'}
      />
         
       
          <div style={{ marginBottom: "100px" }}></div>


          <center><b className="murasaki">#News</b></center>
          <div style={{ marginBottom: "100px" }}></div>


          <News
            name={"4/17 給食制度を開始しました"}        
            description={"4/17より朝活部の新たな取り組みとして、給食部が発足しました。曜日ごとに担当が分かれ、自分たちで食材調達から調理まで行うことで、圧倒的なコスパの給食を提供します。記念すべき初回のシェフはM2釜谷・M1和泉が、食材調達はM2田中が担当しました。"}
            imageUrl={'./kyuusyoku-1.JPG'}
          />


          <News
            name={"4/2 B3向け部活動紹介を行いました"}        
            description={"幣部部長の千葉が学部3年生向けに部活動紹介を行いました。朝活のルールやこれまでの実績について簡単に説明しながら、朝活の魅力を熱く語りました。ペナルティ制度にはあえて言及せず、新入生の入部を図りました。"}
            imageUrl={'./B3syoukai.JPG'}
          />


          <News
            name={"4/1 MMWph1をM1千葉が受賞しました"}        
            description={"今年後、初めてのMMW AWARD授賞式が行われ、修士1年の千葉愛斗が受賞しました。千葉は朝活黎明期からその可能性に注目し、積極的な朝活動を展開してきました。千葉の最終的に17Pの朝活ポイントを獲得し、歴代最高の成績を残しました。"}
            imageUrl={'./MMWph1.JPG'}
          />


          <div style={{ marginBottom: "100px" }}></div>




         
         
      </>
  )
}


export default App;
