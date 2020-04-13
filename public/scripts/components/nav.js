export default function Nav(props) {

    var nav = props.categories.map(function (e, i) {
        return React.createElement(
            "span",
            { key: i.toString(), id: i == props.active ? "work-nav-active" : "", onClick: function onClick(_) {
                    return props.onClick(i);
                } },
            e
        );
    });

    return React.createElement(
        "div",
        { id: "work-nav" },
        nav
    );
}