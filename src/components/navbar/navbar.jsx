import './navbar.css'

function navbar(){


    return(

        <>
        
        <header class = "container">
            <div class="row d-flex justify-content-between bg-nav">
                <div class="col-3 bg-nav">
                    <div>
                        <p>laura's closet</p>
                    </div>
                </div>

                <div class="col-3 bg-nav">
                    <input type="text" placeholder="search for an item"/> 
                </div>

                <div class="col-3 bg-nav">
                    <div class="row d-flex justify-content-between">
                        <div class="col">
                            <a href="">Store</a>
                        </div>

                        <div class="col">
                            <a href="">Account</a>
                        </div>

                        <div class="col">
                            <a href="">Wishlist</a>
                        </div>

                        <div class="col">
                            <a href="">Basket</a>
                        </div>

                    </div>
                </div>

            </div>
        </header>

        </>
        

    )

}

export default navbar;