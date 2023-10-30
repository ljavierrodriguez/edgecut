import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

const ServiceDetail = () => {

    const params = useParams()

    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        console.log(params)
        console.log(location)
    }, [])

    return (
        <>
            {/* services section start */}
            <div className="services_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="services_taital">Services</h1>
                            <p className="services_text">
                                Typesetting industry lorem Ipsum is simply dummy text of the{" "}
                            </p>
                        </div>
                    </div>
                    <div className="services_section_2">
                        <h2>{params.title}</h2>

                        <button className='btn btn-warning' onClick={() => navigate(-1)}>Regresar</button>
                        <button className='btn btn-primary' onClick={() => navigate('/')}>Ir a Home</button>
                    </div>
                </div>
            </div>
            {/* services section end */}
        </>

    )
}

export default ServiceDetail