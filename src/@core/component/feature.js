import { Icon } from "@iconify/react";
import PhoneImage from '../../assets/images/phone.png'
import Image from "next/image";

export default function Feature(){
    return(
        <div className="container featureBlock d-flex justify-content-evenly align-items-center flex-wrap-reverse mb-5 mt-3">
            <div className="d-flex flex-column justify-content-center align-items-start text-container gap-3">
                <p className="fs-xxl primary roboto-medium p-0 m-0 ls-50" >All in one market software report </p>
                <p className="p-0 m-0  primary">Digital Agency offering unique solution to create digital presence and increase your sales to create digital presence and increase your sales</p>
                <p className="p-0 m-0  primary">Digital Agency offering unique solution to create digital presence and increase your sales</p>
                <button className='main-btn white orange-bg fs-md'>
                    Request access <Icon icon="tabler:arrow-right" />
                </button>

            </div>
            <div>
                <Image src={PhoneImage} alt="not found "  className="image img-fluid"></Image>
                {/* <div className="halfCicle">

                </div> */}

            </div>

        </div>
    )
}