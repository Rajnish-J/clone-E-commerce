import '../../components/summer_coll/summer.css';

import image1 from '../../assets/summer_coll/images/image 6.png'

function Summer() {
    return (
        <>
            <br /><br /><br />
            <div className="container bg-image">
                <div className="row align-items-center text-center">
                    <div className="col-md-12">
                        <h1 className="display-4  fw-bold">
                            Summer <span className="text-highlight">Collections</span>
                        </h1>
                        <a href="#" className="btn btn-primary btn-lg mt-3">Shop Now</a>
                    </div>
                    <div className="col-12">
                    <div className="row countdown mt-5 justify-content-start">
                    <div className="col-2">
                        <h2>07</h2>
                        <p>Days</p>
                    </div>
                    <div className="col-2">
                        <h2>08</h2>
                        <p>Hours</p>
                    </div>
                    <div className="col-2">
                        <h2>04</h2>
                        <p>Minutes</p>
                    </div>
                    <div className="col-2">
                        <h2>05</h2>
                        <p>Seconds</p>
                    </div>
                </div>
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default Summer;

