import { Typography } from '@mui/material';

export default function QuienesSomos() {
    return (
        <>
            <Typography className="titulo-pagina" variant="h2" align='left' component="h1">Quienes somos</Typography>
            <div className="row">
                <div className="col-lg-12 pt-3">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui labore cupiditate reiciendis eligendi, sit error dicta nobis illo quas! Alias obcaecati rerum repellendus. Molestias, accusantium deleniti nesciunt repudiandae corrupti fugiat!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui labore cupiditate reiciendis eligendi, sit error dicta nobis illo quas! Alias obcaecati rerum repellendus.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <figure>
                        <img className='w-100' src="/our-team.jpg" alt="our team" />
                    </figure>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <figure>
                        <img className='w-100' src="/bb-yoda.jpg" alt="fail cake" />
                    </figure>
                </div>
                <div className="col-lg-4">
                    <figure>
                        <img className='w-100' src="/hercules.jpg" alt="fail cake" />
                    </figure>
                </div>
                <div className="col-lg-4">
                    <figure>
                        <img className='w-100'  src="pony.jpg" alt="fail cake" />
                    </figure>
                </div>
            </div>
        </>
    )
};
