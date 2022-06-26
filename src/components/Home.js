import React from 'react';


const Home = () => {
    return (
        <section class="home" id="home">
            <div class="text">
                <h1><span>Looking</span> to <br />rent a camera</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi veritatis commodi quibusdam cum autem
                    totam enim, asperiores architecto officiis voluptas ipsam reiciendis deserunt dolor fuga soluta qui
                    dolorum modi! Modi!</p>
                <div class="app-stores">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                        alt="" />
                    <img src="https://e7.pngegg.com/pngimages/384/968/png-clipart-google-play-app-store-android-mobile-app-android-text-logo.png"
                        alt="" />
                </div>
            </div>

            <div class="form-container">
                <form action="">
                    <div class="input-box">
                        <span>Location</span>
                        <input type="search" name="" id="" placeholder="Search Places" />
                    </div>
                    <div class="input-box">
                        <span>Pick-Up-Date</span>
                        <input type="date" name="" id="" />
                    </div>
                    <div class="input-box">
                        <span>Return-date</span>
                        <input type="date" name="" id="" />
                    </div>
                    <input type="submit" name="" id="" class="btn" />
                </form>
            </div>
        </section>
    )
}

export default Home;






























// import Product from './Product'

// const Home = () => {
//     return (
//         <div className='container-fluid'>
//             <img className='brand' src='../img/logoc.png' alt='logo' />
//             <div className='container my-3 py-3'>
//                 <div className='row'>
//                     <div className='col-12 mb-5'>
//                         <h1 className='display-6 fw-bolder text-center '>Why Us ?</h1>
//                         <hr />
//                         <p className='des'>"BABI Rental" is the number one online equipment renting platform which provides best quality brand new products for rent at low price with 100% customer satisifaction. We are the 1st Equipment rental website providing brand new electronic eqipments at low price. Our moto is to make people life eaiser by providing them their needs at their door steps. </p>
//                     </div>
//                 </div>
//             </div>
//             <div className='container my-3 py-3'>
//                 <div className='row'>
//                     <div className='col-12 mb-5'>
//                         <h1 className='display-6 fw-bolder text-center '>Our Services</h1>
//                         <hr />
//                         <ul className='des'>
//                             <li>Equipment Rental Services</li>
//                             <li>Camera rental services</li>
//                             <li>Laptop rental services</li>
//                             <li>Speaker rental services</li>
//                             <li>Generator rental services</li>
//                             <li>Fast delivery</li>
//                             <li>Customer support</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <Product />
//         </div>
//     )
// }

// export default Home;