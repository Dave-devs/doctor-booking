import { images } from "../constants/images"


const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/* ....... Left  Side of Footer ..... */}
                <div>
                    <img className="mb-5 w-40" src={images.logo} alt="" />
                    <p className="w-full md:w-2/3 text-grey-600 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                {/* ....... Center of Footer ..... */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-grey-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* ....... Right  Side of Footer ..... */}
                <div>
                    <p className="text-xl font-medium mb-5">Get In  Touch</p>
                    <ul className="flex flex-col gap-2 text-grey-600">
                        <li>+234-123-4567-890</li>
                        <li>odetundeoreoluwadavid@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* ....... Copyrigt Text ..... */}
            <div>
                <hr />
                <p className="text-center text-sm py-5">Copyright 2024 @Prescripto - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer