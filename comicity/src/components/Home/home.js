import Nav from '../Navbar/nav';
import './home.css';
function Home() {
    return (
        <>
        <Nav/>
        <div id="home">
            <div id="homeImage">
                <div id="message"></div>
                <div id="intro"></div>
                </div>
                <div id="works">
                <h1>How it works?</h1>
                <div className='working'>
                    <div>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.vUlmLDLnl0Il0fOJFzPDrQAAAA&pid=Api&P=0&w=170&h=170" alt="loading.."/>
                    <h4>Login to our platform and view different scomic collections</h4>
                    </div>
                    <div>
                        <img src="https://tse1.mm.bing.net/th?id=OIP.E17fMdoMKAv7-6VCXTuChwHaHa&pid=Api&P=0&w=168&h=168" alt="loading.."/>
                    <h4>You can even add your own comic collections to our platform</h4>
                    </div>
                </div>
                </div>
                <button id="start">Getting Started</button>
           </div>
        </>
    )
}
export default Home;