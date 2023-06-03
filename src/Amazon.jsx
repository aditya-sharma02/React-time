import Cards from "./Components";
import Sdata from "./Netflixdata";
const Amazon = () => {
    return (
        <>
            <Cards
                key={Sdata[0].id}
                imgsrc={Sdata[0].imgsrc}
                link={Sdata[0].links}
                sname={Sdata[0].sname}
                title={Sdata[0].title}
            />
            </>
    )
}
export default Amazon;