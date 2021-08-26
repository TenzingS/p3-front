function Home() {
    return (
        <div className="container">
            <h2 className = 'breakingnews'>Breaking News</h2>
            <div className="newsdiv">
                <div className="news">
                    <img 
                        className = 'newsimage'
                        alt="News Entry" 
                        src="https://dimg.donga.com/wps/NEWS/IMAGE/2021/08/17/108583297.2.gif"/>
                        <h1 className='newstitle'>Taliban Take Over Afghanistan</h1>
                        <h4 className='newsstory'>The taliban came in force and ambushed a local amusment park</h4>
                </div>
                <div class="news">    
                    <img 
                        className = 'newsimage'
                        alt="News Entry" 
                        src="https://c.tenor.com/cb6WtBTLxooAAAAC/onlyfans-onlyfans-creators.gif"/>
                        <h4>Stocks are slightly lower on Wall Street Thursday, Aug. 26, 2021 as the market's momentum cools off following a five-day winning streak for the S&P 500.</h4>            
                </div>
                <div class="news"> 
                        <h1>QWERT</h1>
                        <img 
                            className = 'newsimage'
                            alt="News Entry"
                            src="https://lh3.googleusercontent.com/pw/ACtC-3cdu8WjY2As9DTDLiIWE0x8B0p0T7jRFTODl9MS-22nHrC-bhSdFk3OVKr_qnanJ_im85iCJbpTqQreTZTRflN40tW_z6QlhSDUqE-EbBoglNdl3MlMAKqte_hZ04yM-ssrHmbj_G7kKfrHvKmwumLKNw=w1127-h752-no"/>
                        <h4>Stocks are slightly lower on Wall Street Thursday, Aug. 26, 2021 as the market's momentum cools off following a five-day winning streak for the S&P 500.</h4>
                </div>               
                <div class="news">
                        <img 
                            className = 'newsimage'
                            alt="News Entry" 
                            src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210429120541-restricted-global-chip-shortage.jpg"/>
                        <h4>World’s Largest Chip Maker to Raise Prices, Threatening Costlier Electronics</h4>
                </div>
                <div class="news">
                    <img 
                        className = 'newsimage'
                        alt="News Entry" 
                        src="https://image.cnbcfm.com/api/v1/image/106874995-1619609153385-gettyimages-1232572802-210428_usmc_vaccination_10.jpeg?v=1619609185&w=740&h=416"/>
                    <h4>Japan pulls 1.6 million Moderna vaccine doses over contamination concerns.</h4>
                </div>         
            </div>
        </div>
    )
}

export default Home;