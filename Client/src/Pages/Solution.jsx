import './Solution.css'
import { SectionOne } from '../Components/Section/SectionOne'
import {Arrowbutton} from '../Components/Arrow Button/Arrowbutton'
export const Solution = () =>{
    return (
       <>
        <div className="SolutionHero">
            <div className='SolutionContent'>
                <h1>Unlock the Potential.<br/>
                Harness the Power.<br/>
                Embrace the Future.</h1>
                <p>We use data, cloud, and AI to help innovative companies find new business opportunities, make smart decisions, and drive business impact.</p>
                <Arrowbutton name={'GO Fladdra Today'} />
            </div>
            </div>
            <SectionOne/>
       </>
    )
}