import React,{ useState } from "react"
import './Body.css';

function Body() {
    return (
        <div>
            <body>
                <div>
                    <h1 className="body_head">
                        Crypto Tycoon
                    </h1>
                    <p className="abt">
                        A fun Crypto based Discord game bot 
                    </p>
                    <div>
                        <img className="crypto_pic1" src="./images/cryp2.png" alt=""/>
                        <img className="crypto_pic3" src="./images/cryp3.png" alt=""/>
                        <img className="crypto_pic2" src="./images/cryp1.png" alt=""/>
                    </div>
                    <div>
                        <button href="/IDK1" class="btn1">Documentation</button>
                        <button href="/" class="btn2">iNVITE Me</button>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Body;