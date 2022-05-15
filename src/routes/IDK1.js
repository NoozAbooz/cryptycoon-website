import React from "react";
import './IDK1.css'
import {Routes,Route} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

function IDK1() {
    return (
    <div>
        <div>
            
            <h1 className="doc_head">Documentation</h1>
        </div>

        <div class="div_docs">
            <ul class="docs">
                <li><a class='list' href="#doc1">About the Bot</a></li>
                <li><a class='list' href="#doc2">General Commands</a></li>
                <li><a class='list' href="#doc3">Fun Commands</a></li>
                <li><a class='list' href="#doc4">Other</a></li>
            </ul>
        </div>


        <div id="slider1">
            <input type="radio" name="slider" id="slide1" class="lol"/>
            <input type="radio" name="slider" id="slide2" class="lol"/>
            <input type="radio" name="slider" id="slide3" class="lol"/>
            <input type="radio" name="slider" id="slide4" class="lol"/>
            <div id="slides">
                <div id="overflow">
                    <div class='inner'>
                        <div class='slide slide_1'>
                            <div class='slide-content'>
                                <h2 class='head1'>About the Bot</h2>
                                <p class='content1'>
                                    The default prefix to use the bot commands is {'>'} 
                                </p>
                                <p class='content2'>
                                Simulate the joys and pains of being a crypto bro, with only the slight pains associated with real life crypto trading. 
                                </p>
                            </div>
                        </div>
                        <div class='slide slide_2'>
                            <div class='slide-content'>
                                <h2>Slide 2</h2>
                                <p>
                                    Content for slide 2 for doc 1
                                </p>
                            </div>
                        </div>
                        <div class='slide slide_3'>
                            <div class='slide-content'>
                                <h2>Slide 3</h2>
                                <p>
                                    Content for slide 3 for doc 1
                                </p>
                            </div>
                        </div>
                        <div class='slide slide_4'>
                            <div class='slide-content'>
                                <h2>Slide 4</h2>
                                <p>
                                    Content for slide 4 for doc 1
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div id="controls">
                <label for="slide1"></label>
                <label for="slide2"></label>
                <label for="slide3"></label>
                <label for="slide4"></label>
            </div>
            <div id="bullets" class="dots">
                <label for="slide1"></label>
                <label for="slide2"></label>
                <label for="slide3"></label>
                <label for="slide4"></label>
            </div>
        </div>



{/*
        <section id="doc1">
            <h1>lol1</h1>
            <p>
                Hello
            </p>
        </section>

        <section id="doc2">
            lol2
        </section>

        <section id="doc3">
            lol3
        </section>

        <section id="doc4">
            lol4
    </section>*/}
    
    </div>
    )
}



export default IDK1;