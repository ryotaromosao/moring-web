import "./App.css"
import Navbar from "./components/Navbar";
import TopPage from "./components/TopPage";
import ScrollText from "./components/ScrollText/ScrollText";
import Introduce from "./Introduce/Introduce";


function App() {
  return(
    <div>
      <Navbar />
      <TopPage />
      
      <div className="scroll-text-parent">
        <ScrollText text="いつも寝てばかりの午前中を  有意義に使いたい" />
      </div>

      <center><b className="murasaki">#Board Members</b></center>
     
      <div style={{ marginBottom: "100px" }}></div>

      <div className="introduce-parent">
              <Introduce 
                name="Manato Chiba"
                description={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                imageUrl={'./bucho2.JPG'}
                />
          </div>
          <div className="introduce-parent">
              <Introduce 
                name="Ryotaro Matsui"
                description={"香川県立高松高校・東北大学工学部を卒業後、'23年に東北大学情報科学研究科に入学し、現在はオーバーサンプリングの研究を行っている。\n'24年には菅沼研究室朝活部・給食部を設立し、研究室運営に注力している。  好きな言葉は「人生は困難な方に進むべき。」   "}
                imageUrl={'./sosetsu.JPG'}
                />
          </div>
          <div className="introduce-parent">
              <Introduce 
                name="Wataru Kunumi"
                description={"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
                imageUrl={'./firstmember.JPG'}
                />
          
       
      <div style={{ marginBottom: "100px" }}></div>

      <center><b className="murasaki">#news</b></center>

      </div>

      


 
      
    </div>
  )

}

export default App;
