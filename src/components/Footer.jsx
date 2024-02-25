import facebook_logo from '../assets/footer-logos/facebook-logo.svg'
import github_logo from '../assets/footer-logos/github-logo.svg'
import instgram_logo from '../assets/footer-logos/instgram-logo.svg'
import twitter_logo from '../assets/footer-logos/twitter-logo.svg'
function Footer(){
    return(
        <div className="footer">
            <a href="">
                <img src={twitter_logo}/>
            </a>

            <a href="">
                <img src={facebook_logo}/>
            </a>

            <a href="">
                <img src={instgram_logo}/>
            </a>

            <a href="https://github.com/HishamElmorsi7">
                <img src={github_logo}/>
            </a>
        </div>
    )
}

export default Footer;