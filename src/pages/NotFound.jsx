import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            {/* services section start */}
            <div className="services_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="services_taital">404</h1>
                            <p className="services_text">
                                Page Not Found (404)
                            </p>
                        </div>
                    </div>
                    <div className="services_section_2">
                        <button className='btn btn-warning m-1' onClick={() => navigate(-1)}>Regresar</button>
                        <button className='btn btn-primary m-1' onClick={() => navigate('/')}>Ir a Home</button>
                    </div>
                </div>
            </div>
            {/* services section end */}
        </>

    )
}

export default NotFound