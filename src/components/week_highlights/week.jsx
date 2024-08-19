import './week.css'

function week(){


    return(
        <>
        
        <div class="container">
            <div class = "week-text">
                <h1>The week Highlights</h1>
            </div>

            <div class="container bg-n">
                <div class="row bg-n d-flex justify-content-between">
                    
                    <div class="col-4 col-pad-1 bg-n">
                        <div class = "img-1 img">
                        <div class="overlay">
                            <h2>Exclusive Shoes</h2>
                            <p>PRICE 20% OFF</p>
                            <p>DISCOUNT CODE - VATR3920</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-8 col-pad-2 bg-n">
                        <div class= "img img-2">
                            <div class="overlay">
                                <h2>Exquisitve Styles and collections</h2>
                                <p>PRICE 20% OFF</p>
                                <p>DISCOUNT CODE - VATR3920</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row bg-n d-flex justify-content-between">
                    <div class="col-8 col-pad-1 bg-n">
                        <div class="img-3 img">
                        <div class="overlay">
                            <h2>new arrivals</h2>
                            <p>PRICE 20% OFF</p>
                            <p>DISCOUNT CODE - VATR3920</p>
                        </div>
                        </div>
                        
                    </div>
                    <div class="col-4 bg-n col-pad-2">
                        <div class=" img img-4"> 
                            <div class="overlay">
                                <h2>Exclusive Items</h2>
                                <p>PRICE 20% OFF</p>
                                <p>DISCOUNT CODE - VATR3920</p>
                            </div>
                        </div>
                    
                    </div>
                </div>  
            </div>

        </div>



        
        
        </>
    )
}

export default week;