const Part = (props) => {
    console.log("part", props)
    return (
        <div> 
        <p>{props.part} {props.exercise}</p>
        </div>
    )
}

const Content = (props) => {
    console.log('content', props)
    return (
    <div>
        <Part part={props.part1} exercise={props.exercises1}/>
        <Part part={props.part2} exercise={props.exercises2}/>
        <Part part={props.part3} exercise={props.exercises3}/>
    </div>
    )
}

export default Content;