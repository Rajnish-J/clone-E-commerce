import './popular.css'
import pop_1 from '../../assets/popular/images/1.png'
import pop_2 from '../../assets/popular/images/2.png'
import pop_3 from '../../assets/popular/images/3.png'
import pop_4 from '../../assets/popular/images/4.png'

function popular(){


    return(
        <>
            <div class="container-md">

                <div class="pop-content">
                    <h1>Popular this week</h1>
                </div>

                <div class = "img-div">
                    <div class="row d-flex justify-content-between">

                        <div class="col-3 bg-p">
                            <div class = "img-cont">
                                <img src={pop_1} alt="" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                                <div>
                                    <div>
                                        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                                    </div>
                                    <div class = "con-flex">
                                        <div><p>$120.23     $120.23</p></div>
                                        <div>+ Add to Basket</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-3 bg-p">
                            <div class = "img-cont">
                                <img src={pop_2} alt="" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                                <div>
                                    <div>
                                        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                                    </div>
                                    <div class = "con-flex">
                                        <div><p>$120.23     $120.23</p></div>
                                        <div>+ Add to Basket</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-3 bg-p">
                            <div class = "img-cont">
                                <img src={pop_3} alt="" className="img-fluid" style={{ width: '100%', height: 'auto' }} />
                                <div>
                                    <div>
                                        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                                    </div>
                                    <div class = "con-flex">
                                        <div><p>$120.23     $120.23</p></div>
                                        <div>+ Add to Basket</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-3 bg-p">
                            <div class = "img-cont">
                                <img src={pop_4} alt="" className="img-fluid" style={{ width: '100%', height: 'auto' }}/>
                                <div>
                                    <div>
                                        <p>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                                    </div>
                                    <div class="con-flex"> 
                                        <div><p>$120.23     $120.23</p></div>
                                        <div>+ Add to Basket</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default popular;