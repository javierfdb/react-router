import { Typography } from '@mui/material';

export default function Home() {
    return (
       <>
        <Typography  className="titulo-pagina" variant="h2" align='center' component="h1">Fail Cakes</Typography>
        <div className="row">
                <div className="col-lg-12 pt-3">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui labore cupiditate reiciendis eligendi, sit error dicta nobis illo quas! Alias obcaecati rerum repellendus. Molestias, accusantium deleniti nesciunt repudiandae corrupti fugiat!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui labore cupiditate reiciendis eligendi, sit error dicta nobis illo quas! Alias obcaecati rerum repellendus.</p>
                </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <figure>
                    <img className='w-100' src="/pepa-dick.jpg" alt="Pepa dick" />
                </figure>
            </div>
        </div>
       </>
    )
}