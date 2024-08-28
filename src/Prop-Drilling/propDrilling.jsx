// Prop Drilling

export const Parant = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[100vh] bg-gray-800 text-white text-[30px]">
                <div>
                    <h1>This is Parant Component.</h1>
                    <Child data="React JS Developer." />
                </div>
            </div>
        </>
    )
}

const Child = (props) => {
    return (
        <>
            <div>
                <h1>This is Child component.</h1>
                <GrandChild data={props.data} />
            </div>
        </>
    )
}

const GrandChild = (props) => {
    return (
        <>
            <div>
                <h1>This is Grand Child Component.</h1>
                <GrandGrandChild data={props.data} />
            </div>
        </>
    )
}

const GrandGrandChild = (props) => {
    return (
        <>
            <div>
                <h1>This is Grand Grand Child component</h1>
                <h2>I am {props.data}</h2>
            </div>
        </>
    )
}