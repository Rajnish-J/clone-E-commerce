import './brand.css';
import pic_1 from '../../assets/brands/1.png'
import pic_2 from '../../assets/brands/2.png'
import pic_3 from '../../assets/brands/3.png'
import pic_4 from '../../assets/brands/4.png'
import pic_5 from '../../assets/brands/5.png'
import pic_6 from '../../assets/brands/6.png'

function week(){


    return(

        <>

        <div className="container-md">

            <div class = "row brands-div">

                <div class="col d-flex justify-content-center">
                    <div class = "title-tag">
                        <p>BRANDS FOR YOU</p>
                    </div>
                    <div class = "for=rect">

                    </div>
                </div>

            </div>
            
            <div class = "logo-div row justify-content-center">

                <div class="col-1 d-flex">
                    <img src={pic_1} alt="" />
                </div>
                
                <div class="col-1 d-flex">
                    <img src={pic_2} alt="" />
                </div>
                
                <div class="col-1 d-flex">
                    <img src={pic_3} alt="" />
                </div>
                
                <div class="col-1 d-flex">
                    <img src={pic_4} alt="" />
                </div>
                
                <div class="col-1 d-flex">
                    <img src={pic_5} alt="" />
                </div>
                
                <div class="col-1 d-flex">
                    <img src={pic_6} alt="" />
                </div>

            </div>

        </div>
        
        </>

    )

}

export default week;