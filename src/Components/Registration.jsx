import React from 'react'
import RegisterForm from './RegisterForm'
const Registration = () => {
    return(
        <div className='containerMain Register'>
        <div className='left Register'>
<div className='registrationContentLeft'>
    <h1 className='header White Registration'>
        Let's get you signed up!
    </h1>
    <img alt='registrationOnBoardingImageofBot'/>
    <p className='bodyText registration'>
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
    </p>
</div>
        </div>
        <div className='right Register'>
            <div className='registationContentRight'>
                <RegisterForm></RegisterForm>
            </div>
            </div>
        </div>
    )
}

export default Registration