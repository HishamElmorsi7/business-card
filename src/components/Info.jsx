import info_pic from "../assets/info-pic.jpg";
import linkedin_icon from "../assets/linkedin-icon.png"
import mail_icon from "../assets/mail-icon.png"

function Info() {
    return(
        <div className="info">
            <img className="info--pic" src = {info_pic} alt="info picture" />
            <h1 className="info--name">Hisham Elmorsi</h1>
            <h3 className="info--job">Software Engineer</h3>
            <h4 className="info--website">hishamelmorsi7.github.io</h4>

            <div className="contacts">
                <button className="contacts--email">
                    <img className="contacts--email--icon" src={mail_icon}/>                    
                    <p className="contacts--email--title">Email</p>
                </button>
                
                <button className="contacts--linkedin">
                    <img className="contacts--linkedin--icon" src={linkedin_icon}/>
                    <p className="contacts--linkedin--title">Linkedin</p>
                </button>
            </div>
        </div>
    )
}

export default Info;