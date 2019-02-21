import React, {Component} from 'react';

const Publications = () => {
    return (
        <section id="publications" class="right_section">
           <div id="heading">
                <h2>Publications</h2>
                <div id="publications-num">
                    <a href="#">
                        <span>All(500)</span>
                        <i class="fa fa-angle-down"></i>
                   </a>
                </div> 
           </div>
           <div id="publication">
                <i class="fa fa-newspaper-o"></i>
                <div id="publication-details">
                    <h2>
                        A Large-Scale Analysis of Genetic Variants Within Putative 
                        miRNA Binding Sites in Prostate Cancer.
                    </h2>
                    <p>Stegeman S, Amankawah E, Klein K, O'Mara T, Kim D, Lin H, Permuth-Wey J, Siriniva... </p>
                </div>
               
           </div>
            <div id="publication-links">
                <div id="save-ref">
                    <i class="fa fa-plus"></i>
                    <a href="#">Save Reference</a>
                </div>

                <div id="full-text">
                    <i class="fa fa-arrow-right"></i>
                    <a href="#">Get Full Text at Journal</a>
                 </div>
                <div id="readers">
                    <span>5 Readers</span>
                    </div>
                </div>
        </section>
    );
}

export default Publications;