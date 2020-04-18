export default function Footer(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Check out more of our work"
            ),
            React.createElement(
                "h3",
                null,
                "Follow us on our social media..."
            ),
            React.createElement("img", { src: "./images/static/icons/fb.png" }),
            React.createElement("img", { src: "./images/static/icons/insta.png" }),
            React.createElement("img", { src: "./images/static/icons/yt.png" })
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Looking for an event photographer...?"
            ),
            React.createElement(
                "p",
                null,
                "We will make sure that every moment of your precious event is captured so that they can last forever."
            ),
            React.createElement(
                "h3",
                null,
                "GET IN TOUCH NOW"
            ),
            React.createElement(
                "a",
                { id: "contact-button", href: "./contact.html" },
                "CONTACT US"
            )
        )
    );
}
