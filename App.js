const parent = React.createElement("div", {id:"parent"},
    [
        React.createElement("div", {id: "child"},
            [
                React.createElement("h1",{},"I'm h1 tag"),
                React.createElement("h2", {}, "I'm h2 tag")
            ]
        ),
        React.createElement("div", {id: "child2"},
            [
                React.createElement("h1",{},"I'm h1 tag"),
                React.createElement("h2", {}, "I'm h2 tag")
            ]
        )]
     );
     React.createElement("div", {id:"parent2"},
        [
            React.createElement("div", {id: "child"},
                [
                    React.createElement("h1",{},"I'm h1 tag"),
                    React.createElement("h2", {}, "I'm h2 tag")
                ]
            ),
            React.createElement("div", {id: "child2"},
                [
                    React.createElement("h1",{},"I'm h1 tag"),
                    React.createElement("h2", {}, "I'm h2 tag")
                ]
            )]
         );
    
    
    
    
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(parent);

// create using js 

    //    const heading = document.createElement("h1");
    //    heading.innerHTML = "Hello";
    //    const root = document.getElementById("root");
    //    root.appendChild(heading);
