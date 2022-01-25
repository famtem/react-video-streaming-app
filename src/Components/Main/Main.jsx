import { ContainerMain } from "./Styles";
import { FaPlay } from "react-icons/fa";
import {FaDownload} from "react-icons/fa"
import MovieCoverImage  from "../../Assets/cartaz.jpg"
import { Link } from "react-router-dom";
export function Main () {
    return (
        <>
        <ContainerMain > 
            <div className='image'>
                <img src={MovieCoverImage} alt='Cover' />
            </div>

            <div className='infos'>
                <h1>King of Boys</h1>
                <div>
                 <p>2018  <span>16+   </span><span></span> <span>3h 2m</span><button>HD</button></p>
                </div>
                <p>When a powerful businesswoman's political ambitions are threatened by her underworld connections, the ensuing power struggle could cost her everything</p>

                <div  className="btns">
                    <div style={{ backgroundColor:"red"}} className="movie">
                        <Link to="/stream" style={{textDecoration: 'none'}}> <p style={{ color:"white", textAlign:"center", paddingTop:"-2px" }}>Stream now <FaPlay/></p> </Link>
                    </div>
                   
                    <div style={{ backgroundColor:"#8b8b8a"}} className="downloadbtn">
                        <a href="/" style={{textDecoration: 'none'}}> <p style={{ color:"white", textAlign:"center" }}>Download now <FaDownload/></p></a>
                    </div>
                </div>
            </div>
                
            
        </ContainerMain>
        </>
    )
}