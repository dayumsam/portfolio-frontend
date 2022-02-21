import './style.scss'

export default function index() {

    let links = [
        {
            'name': "Instagram",
            'link': '/about/'
        },
        {
            'name': "Youtube",
            'link': '/projects/'
        },
        {
            'name': "Twitter",
            'link': '/projects/'
        }
    ]

    return (
        <footer className="section footer">
            <div className="container">
            {
                links.map((link, index) => <a key={index}  href={link.link} className="social-link">{link.name}</a> )
            }
            <div className="rule"></div>
            </div>
        </footer>
    )
}
