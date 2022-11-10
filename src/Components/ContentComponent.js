import Navbars from "./Navbars";

function ContentComponent(props) {
        const {contentComponents} = props;
    return (
        <div className="container">
            <Navbars/>
            <img src={contentComponents.himg} />
            <p className='text-secondary'> {contentComponents.hcontent}</p>
        </div>
    )
}

export default ContentComponent;