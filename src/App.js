import "./App.css"
import Navbar from "./components/Navbar";
import TopPage from "./components/TopPage";
import ScrollText from "./components/ScrollText/ScrollText";
import Introduce from "./Introduce/Introduce";


function App() {
  return(
    <div>
      <Navbar />
      <div className="text-overlay-parent"><TopPage /></div>
      
      <center><b className="murasaki">#Mission</b></center>

      <div className="scroll-text-parent">
        <ScrollText text="いつも寝てばかりの午前中を  有意義に使いたい" />
      </div>

      <center><b className="murasaki">#Board Members</b></center>
     
      <div style={{ marginBottom: "100px" }}></div>

      <div className="introduce-parent">
              <Introduce 
                name="Manato Chiba"
                description={"中田幼稚園中退後、家族でUSに渡り、Jarvis Preschool、 W.H Robinson Elementary(dropout)でキャリアを積む。仙台二高・東北大学工学部を卒業後、'24に東北大学情報科学研究科へ入学。MORING AWARD Ph1では過去No.1の成績を残し、現在は菅沼研究室朝活部長を務める"}
                imageUrl={'./bucho2.JPG'}
                />
          </div>
          <div className="introduce-parent">
              <Introduce 
                name="Ryotaro Matsui"
                description={"香川県立高松高校・東北大学工学部を卒業後、'23年に東北大学情報科学研究科に入学。'24年に所属する菅沼・水木研究室で朝活部・給食部を國見と共に設立し、現在はSugatakuChildren.IncのCEOを務める。  好きな言葉は「人生は困難な方に進むべき。」   "}
                imageUrl={'./sosetsu.JPG'}
                />
          </div>
          <div className="introduce-parent">
              <Introduce 
                name="Wataru Kunumi"
                description={"神奈川県立小田原高校・東北大学工学部を卒業、'24年に東北大学情報科学研究科に入学。デンマーク工科大（DTU）への留学の経験を活かし、松井と共に朝活部を設立。現在は、人々の生きる指針を示す自然言語型アプリケーションを製作中。"}
                imageUrl={'./firstmember.JPG'}
                />
          
       
      <div style={{ marginBottom: "100px" }}></div>

      <center><b className="murasaki">#news</b></center>

      </div>

      


 
      
    </div>
  )

}

export default App;
